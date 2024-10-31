import Image from "next/image"
import { toast } from "react-toastify"

const Copy = ({ url }: { url: string }) => {
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(url)
			toast.success("Copied successfully!")
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Image
			className="cursor-pointer"
			src="/copy.svg"
			alt="copy"
			width={25}
			height={25}
			onClick={handleCopy}
		/>
	)
}

export default Copy
