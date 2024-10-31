import Image from "next/image"
import Link from "next/link"
import { toast } from "react-toastify"
import Delete from "./Delete"
import { MotionDiv } from "./MotionDiv"
import MobileDots from "./MobileDots"
import Copy from "./Copy"

type ShortenedUrlProps = {
	id: number
	name?: string | null
	origin: string
	url: string
	code: string
}

const variants = {
	show: { opacity: 1, height: "auto" },
	hidden: { opacity: 0, height: 0, overflow: "hidden" }
}

const ShortenedUrl = ({
	shortenedUrl,
	index
}: {
	shortenedUrl: ShortenedUrlProps
	index: number
}) => {
	const { id, origin, url } = shortenedUrl

	const backgroundColorClass = index % 2 === 0 ? "bg-gray-100" : "bg-white"

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(url)
			toast.success("Copied successfully!")
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<MotionDiv
			className={`flex items-center ${backgroundColorClass} py-2 px-4 relative`}
		>
			<Link
				target="_blank"
				href={`${url}`}
				className="flex flex-1 gap-2 items-center text-blue-default hover:underline w-max"
			>
				{url}
			</Link>

			<p className="hidden md:block flex-1 text-gray-500">{origin}</p>

			<div className="hidden md:flex flex-2 gap-5 items-center">
				<Copy url={url} />
				<Image
					className="cursor-pointer"
					src="/edit.svg"
					alt="edit"
					width={25}
					height={25}
				/>
				<Delete id={id} />
			</div>

			<MobileDots id={id} url={url} />
		</MotionDiv>
	)
}

export default ShortenedUrl
