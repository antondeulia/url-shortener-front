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
