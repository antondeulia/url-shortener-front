type TextBlockProps = {
	title: string
	text: string
}

const TextBlock = ({ title, text }: TextBlockProps) => {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-[1.3rem] text-gray-bold font-bold">{title}</h2>
			<p className="text-[0.9rem] max-w-[90%]">{text}</p>
		</div>
	)
}

export default TextBlock
