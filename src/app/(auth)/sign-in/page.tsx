"use client"

import PasswordInput from "@/components/PasswordInput"
import Input from "@/components/ui/Input"
import RightArrowIcon from "@/components/ui/RightArrowIcon"
import { fetchWithAuth } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"

const signInSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(1, "Password is required")
})

type SignInForm = z.infer<typeof signInSchema>

const SignInPage = () => {
	const passwordRef = useRef<HTMLInputElement>(null)
	const router = useRouter()

	const handleKeyDown = (
		event: React.KeyboardEvent<HTMLInputElement>,
		nextRef: React.RefObject<HTMLInputElement> | null
	) => {
		if (event.key === "Enter" && nextRef?.current) {
			event.preventDefault()
			nextRef.current.focus()
		}
	}

	const {
		register,
		handleSubmit,
		formState: { isValid }
	} = useForm<SignInForm>({
		resolver: zodResolver(signInSchema),
		mode: "onChange"
	})

	const onSubmit = async (formData: SignInForm) => {
		try {
			const res = await fetchWithAuth(
				process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/sign-in",
				{
					method: "POST",
					body: JSON.stringify(formData)
				}
			)
			const data = await res.json()

			if (res.ok) {
				toast.success("User signed in successfully!")
				localStorage.setItem("accessToken", data.accessToken)
				router.push("/")
			} else {
				if (typeof data.message === "string") {
					toast.error(data.message)
				} else {
					data.message.forEach((msg: string) => {
						toast.error(msg)
					})
				}
			}
		} catch (error) {
			console.log(error)
			toast.error("Unable to sign in")
		}
	}

	return (
		<div className="mx-auto xl:w-[40%] h-screen flex items-center justify-center">
			<div className="relative z-10 max-w-[600px] py-10 rounded-[2rem] bg-white shadow-xl flex flex-col lg:w-max h-max md:py-28 px-8 xl:px-28">
				<h2 className="text-[2rem] md:text-[3rem] font-medium text-gray-tiny text-center mb-[2rem] md:mb-[6rem]">
					Welcome <span className="text-blue-default font-bold">back</span>
				</h2>

				<form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
					<Input
						{...register("email")}
						placeholder="Email*"
						onKeyDown={e => handleKeyDown(e, passwordRef)}
					/>
					<PasswordInput register={register} />

					<p className="text-center">
						Does not have an account yet?{" "}
						<Link href="/sign-up" className="text-blue-dark hover:underline">
							Sign up
						</Link>
					</p>

					<div className="flex itmes-center gap-4">
						<button
							type="submit"
							className={`flex-1 px-5 py-2 rounded-md text-xl mt-2 md:mt-6 transition-all duration-300 ${
								!isValid
									? "bg-gray-400 text-gray-200 cursor-not-allowed"
									: "bg-blue-default text-white hover:bg-blue-dark"
							}`}
							disabled={!isValid}
						>
							Log in
						</button>
						<Link
							href="/"
							className=" flex items-center gap-2 px-5 py-2 rounded-md text-xl mt-2 md:mt-6 border border-black hover:bg-blue-default hover:text-white group transition-colors duration-200 hover:border-white"
						>
							<span>Demo</span>
							<RightArrowIcon className="w-10 h-10 fill-black group-hover:fill-white group-hover:translate-x-2 transition-all duration-200" />
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignInPage
