"use client"

import React, { useState } from "react"
import Input from "./ui/Input"
import Image from "next/image"
import { UseFormRegister } from "react-hook-form"

const PasswordInput = ({
	ref,
	register,
	errors
}: {
	ref: React.RefObject<HTMLInputElement>
	register: UseFormRegister<any>
	errors: any
}) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className="relative">
			<Input
				{...register("password")}
				className="w-full"
				type={isShow ? "text" : "password"}
				name="password"
				placeholder="Password*"
				errors={errors}
			/>

			<div
				className="absolute top-[50%] right-4 translate-y-[-50%] cursor-pointer"
				onClick={() => setIsShow(prev => !prev)}
			>
				{isShow ? (
					<Image src="/eye-open.svg" alt="show" width={25} height={25} />
				) : (
					<Image src="/eye-closed.svg" alt="hide" width={25} height={25} />
				)}
			</div>
		</div>
	)
}

export default PasswordInput
