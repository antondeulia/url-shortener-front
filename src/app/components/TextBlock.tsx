type TextBlockProps = {
	title: string
	text: string
}

const TextBlock = ({ title, text }: TextBlockProps) => {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-[2rem] text-gray-bold font-bold">{title}</h2>
			<p className="text-[1.1rem] max-w-[90%]">{text}</p>
		</div>
	)
}

export default TextBlock
