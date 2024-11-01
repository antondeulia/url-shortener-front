import * as React from "react"

type RightArrowIconProps = {
	className: string
}

const RightArrowIcon = ({ className = "" }: RightArrowIconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
		<path
			fillRule="evenodd"
			d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
			clipRule="evenodd"
		></path>
	</svg>
)

export default RightArrowIcon
