"use client"

import { useShortenedUrlsStore } from "@/store/shortenedUrls"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"

const createFormSchema = z.object({
	origin: z.string().url()
})

const CreateForm = () => {
	const addShortenedUrl = useShortenedUrlsStore(state => state.addShortenedUrl)

	const {
		register,
		handleSubmit,
		reset,
		clearErrors,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(createFormSchema),
		mode: "onChange"
	})

	const onSubmit = async (data: any) => {
		const res = await fetch(`http://localhost:4200`, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczMDI0MDA2OCwiZXhwIjoxNzMwMzI2NDY4fQ._cOe1SbJ6_9YlvJArTHF_VaYGS-jmQ4CDlKVYxsmIWk`
			}
		})

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

			<button className="p-[1.5rem] w-full md:w-max text-xl bg-blue-dark text-white font-bold hover:bg-blue-light transition-all duration-300">
				Shorten Url
			</button>
		</form>
	)
}

export default CreateForm
