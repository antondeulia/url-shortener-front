"use client"

import { useShortenedUrlsStore } from "@/store/shortenedUrls"
import { fetchWithAuth, generateRandomString, generateRandomNumber } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"

const createFormSchema = z.object({
	origin: z.string().url()
})

const CreateForm = () => {
	const [isLoading, setIsLoading] = useState(false)
	const addShortenedUrl = useShortenedUrlsStore(state => state.addShortenedUrl)

	const {
		register,
		handleSubmit,
		reset,
		clearErrors,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(createFormSchema),
		mode: "onChange",
		reValidateMode: "onBlur"
	})

	const addShortenedUrlLs = useShortenedUrlsStore(state => state.addShortenedUrlFromLs)

	const onSubmit = async (formData: any) => {
		setIsLoading(true)

		if (localStorage.getItem("accessToken")) {
			const res = await fetchWithAuth(
				process.env.NEXT_PUBLIC_BACKEND_URL as string,
				{
					method: "POST",
					body: JSON.stringify(formData)
				}
			)

			if (res.status === 201) {
				const newUrlData = await res.json()
				addShortenedUrl(newUrlData)

				toast.success("Item was created successfully")
				reset()
				clearErrors()
			} else {
				const error = await res.json()

				error?.message?.map((message: string) => {
					toast.error(message)
				})
			}
		} else {
			const uniqueCode = generateRandomString(6)
			const uniqueId = generateRandomNumber(6)

			const newShortenedUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${uniqueCode}`
			const shortenedUrls = localStorage.getItem("shortenedUrls")

			const shortenedUrlLs = `{"id":"${uniqueId}","url":"${newShortenedUrl}","origin":"${formData.origin}"}`

			if (shortenedUrls) {
				localStorage.setItem(
					"shortenedUrls",
					`${shortenedUrls} ${shortenedUrlLs}`
				)
			} else {
				localStorage.setItem("shortenedUrls", `${shortenedUrlLs}`)
			}

			addShortenedUrlLs(shortenedUrlLs)

			const res = await fetchWithAuth(
				process.env.NEXT_PUBLIC_BACKEND_URL as string,
				{
					method: "POST",
					body: JSON.stringify(formData)
				}
			)

			if (res.status === 201) {
				const newUrlData = await res.json()
				addShortenedUrl(newUrlData)

				toast.success("Item was created successfully")
				reset()
				clearErrors()
			} else {
				const error = await res.json()

				error?.message?.map((message: string) => {
					toast.error(message)
				})
			}
		}

		setIsLoading(false)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 md:gap-0 md:flex-row items-center mt-[1.5rem] max-w-[90%] mx-auto relative"
		>
			<input
				{...register("origin")}
				type="text"
				placeholder="Enter the link here..."
				className="p-[1.5rem] rounded-sm border border-gray-400 w-full flex-1"
			/>
			{errors.origin && typeof errors.origin.message === "string" && (
				<span className="text-red-500 absolute top-[-25px]">
					{errors.origin.message}
				</span>
			)}

			<button className="p-[1.5rem] min-w-[20%] w-full md:w-max text-xl bg-blue-dark text-white font-bold hover:bg-blue-light transition-all duration-300">
				{isLoading ? (
					<>
						<Image
							className="mx-auto"
							src="/loader.gif"
							alt="loading"
							width={30}
							height={30}
						/>
					</>
				) : (
					<>Shorten Url</>
				)}
			</button>
		</form>
	)
}

export default CreateForm
