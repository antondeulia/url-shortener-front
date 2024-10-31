"use client"

import PasswordInput from "@/components/PasswordInput"
import TermsCheckbox from "@/components/TermsCheckbox"
import Input from "@/components/ui/Input"
import { useAuthStore } from "@/store/auth"
import { zodResolver } from "@hookform/resolvers/zod"
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
					console.log(data.message)
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
		<div className="flex relative z-10">
			<div className="mx-auto xl:w-[40%] h-screen flex items-center justify-center">
				<div className="w-[90%] py-10 rounded-[2rem] bg-white shadow-xl flex flex-col lg:w-max h-max md:py-28 px-8 xl:px-28">
					<h2 className="text-[2rem] md:text-[3rem] font-medium text-gray-tiny text-center mb-[2rem] md:mb-[6rem]">
						Get started{" "}
						<span className="text-blue-default font-bold">free</span>
					</h2>

					<form
						className="flex flex-col gap-8"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="flex flex-col gap-8 md:flex-row justify-between ">
							<div>
								<Input
									{...register("firstName")}
									placeholder="First Name"
									name="firstName"
									onKeyDown={e => handleKeyDown(e, lastNameRef)}
									errors={errors}
								/>
								{errors && (
									<span className="text-red-500">
										{errors.firstName?.message}
									</span>
								)}
							</div>
							<div>
								<Input
									{...register("lastName")}
									placeholder="Last Name"
									name="lastName"
									onKeyDown={e => handleKeyDown(e, lastNameRef)}
									errors={errors}
								/>
								{errors && (
									<span className="text-red-500">
										{errors.lastName?.message}
									</span>
								)}
							</div>
						</div>
						<div>
							<Input
								{...register("email")}
								placeholder="Email*"
								name="email"
								onKeyDown={e => handleKeyDown(e, emailRef)}
								errors={errors}
							/>
							{errors && (
								<span className="text-red-500">
									{errors.email?.message}
								</span>
							)}
						</div>
						<div>
							<PasswordInput
								ref={passwordRef}
								register={register}
								errors={errors}
							/>
							{errors && (
								<span className="text-red-500">
									{errors.password?.message}
								</span>
							)}
						</div>

						<TermsCheckbox />

						<button
							type="submit"
							className={`py-5 rounded-md text-xl mt-2 md:mt-8 transition-all duration-300 ${
								isButtonDisabled
									? "bg-gray-400 text-gray-200 cursor-not-allowed"
									: "bg-blue-default text-white hover:bg-blue-dark"
							}`}
							disabled={isButtonDisabled}
						>
							Create your account
						</button>
					</form>
				</div>
			</div>
			<div className="w-[60%] items-center justify-center relative hidden xl:flex">
				<div className="rounded-md flex flex-col  w-[100%] mr-9 h-[90%] py-12 px-28 ">
					<span className="text-sm tracking-wide text-blue-default">
						URL SHORTENER
					</span>

					<h1 className="text-[4rem] mt-[10rem]">
						<span className="text-blue-default font-bold">
							Url Shortener.
						</span>{" "}
						Fully managed url shortener{" "}
					</h1>
					<p className="text-[1.7rem] mt-[2rem] text-gray-500">
						Get ready for higher performance, free usage, and <br /> greater
						ease of use.
					</p>
				</div>
			</div>
		</div>
	)
}

export default SignUpPage
