"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"

const createFormSchema = z.object({
	origin: z.string()
})

const CreateForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(createFormSchema)
	})

	const onSubmit = async (data: any) => {
		const res = await fetch(`http://localhost:4200`, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczMDIzMjk5NywiZXhwIjoxNzMwMjM2NTk3fQ.o0KrBlD0EoXIL9d-jcbOcXMiP7EyJbf9odVCWRzIo2Y`
			}
		})

		if (res.status === 201) {
			toast.success("Item was created successfully")
			reset()
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

			<button className=" p-[1.5rem] w-full md:w-max text-xl bg-blue-dark text-white font-bold hover:bg-blue-light transition-all duration-300">
				Shorten Url
			</button>
		</form>
	)
}

export default CreateForm
