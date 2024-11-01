import React, { Ref, RefObject } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	errors?: any
}

const Input: React.FC<InputProps> = ({ errors, ...props }) => {
	return (
		<div className="relative">
			<input
				className={`border border-gray-500 focus:border-blue-default focus:border-2 focus:outline-none ${
					errors ? "border-red-500" : ""
				}`}
				style={{
					width: "100%",
					padding: "14px",
					fontSize: "19px",
					borderRadius: "4px"
				}}
				{...props}
			/>
			{errors && (
				<span className="text-red-500 absolute top-[59px] left-0">
					{errors.message}
				</span>
			)}{" "}
		</div>
	)
}

export default Input
