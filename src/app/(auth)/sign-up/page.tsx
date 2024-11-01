"use client"

import PasswordInput from "@/components/PasswordInput"
import TermsCheckbox from "@/components/TermsCheckbox"
import Input from "@/components/ui/Input"
import RightArrowIcon from "@/components/ui/RightArrowIcon"
import { useAuthStore } from "@/store/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"

const signUpSchema = z.object({
	firstName: z.string().optional(),
	lastName: z.string().optional(),
	email: z.string().email(),
	password: z.string().min(6)
})

type SignUpForm = {
	email: string
	firstName: string
	lastName: string
	password: string
	terms: string
}

const SignUpPage = () => {
	const lastNameRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
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
		formState: { errors, isValid }
	} = useForm<SignUpForm>({
		resolver: zodResolver(signUpSchema),
		mode: "onChange"
	})

	const isTermsAgree = useAuthStore(state => state.isTermsAgree)

	const onSubmit = async (formData: SignUpForm) => {
		try {
			const res = await fetch(
				process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/sign-up",
				{
					method: "POST",
					body: JSON.stringify(formData),
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
			const data = await res.json()

			if (res.ok) {
				toast.success("User created successfully!")

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
			toast.error("Unable to sign up")
			throw new Error("Unable to sign up")
		}
	}

	const isButtonDisabled = !isTermsAgree || !isValid

	return (
		<div className="mx-auto xl:w-[40%] h-screen flex items-center justify-center">
			<div className="relative z-10 w-[90%] py-10 rounded-[2rem] bg-white shadow-xl flex flex-col lg:w-max h-max md:py-24 px-8 xl:px-20">
				<h2 className="text-[2rem] md:text-[3rem] font-medium text-gray-tiny text-center mb-[2rem] md:mb-[6rem]">
					Get started <span className="text-blue-default font-bold">free</span>
				</h2>

				<form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-8 md:flex-row justify-between ">
						<Input
							{...register("firstName")}
							placeholder="First Name"
							onKeyDown={e => handleKeyDown(e, lastNameRef)}
							errors={errors.firstName}
						/>
						<Input
							{...register("lastName")}
							placeholder="Last Name"
							onKeyDown={e => handleKeyDown(e, emailRef)}
							errors={errors.lastName}
						/>
					</div>
					<Input
						{...register("email")}
						placeholder="Email*"
						onKeyDown={e => handleKeyDown(e, passwordRef)}
						errors={errors.email}
					/>
					<PasswordInput register={register} errors={errors.password} />

					<TermsCheckbox />

					<p className="text-center">
						Already have an account?{" "}
						<Link href="/sign-in" className="text-blue-dark hover:underline">
							Sign in
						</Link>
					</p>

					<div className="flex itmes-center gap-4">
						<button
							type="submit"
							className={`flex-1 px-5 py-2 rounded-md text-xl mt-2 md:mt-6 transition-all duration-300 ${
								isButtonDisabled
									? "bg-gray-400 text-gray-200 cursor-not-allowed"
									: "bg-blue-default text-white hover:bg-blue-dark"
							}`}
							disabled={isButtonDisabled}
						>
							Create new account
						</button>
						<Link
							href="/"
							className="flex items-center gap-2 px-5 py-2 rounded-md text-xl mt-2 md:mt-6 border border-black hover:bg-blue-default hover:text-white group transition-colors duration-200 hover:border-white"
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

export default SignUpPage
