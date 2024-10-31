// "use client"

// import React from "react"

// type FormInputProps = {
// 	errors: any
// 	props: {
// 		name: string
// 		placeholder: string
// 		ref: any
// 	}
// }

// const Input = ({ errors, ...props }: FormInputProps) => {
// 	return (
// 		<div>
// 			<input
// 				{...props}
// 				style={{
// 					width: "100%",
// 					padding: "14px",
// 					fontSize: "19px",
// 					borderRadius: "4px",
// 					border: "1px solid gray"
// 				}}
// 			/>
// 			{errors && (
// 				// @ts-ignore
// 				<div className="text-red-500">{errors.message}</div>
// 			)}
// 		</div>
// 	)
// }

// export default Input
"use client"

import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	errors?: any
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ errors, ...props }, ref) => {
		return (
			<div>
				<input
					ref={ref}
					className="your-input-styles"
					style={{
						width: "100%",
						padding: "14px",
						fontSize: "19px",
						borderRadius: "4px",
						border: "1px solid gray"
					}}
					{...props}
				/>
			</div>
		)
	}
)

Input.displayName = "Input"

export default Input
