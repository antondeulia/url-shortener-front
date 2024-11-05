import Link from "next/link"
import Delete from "./Delete"
import Copy from "./Copy"
import Image from "next/image"
import MobileDots from "./MobileDots"

type ShortenedUrlProps = {
	id: number
	name?: string | null
	origin: string
	url: string
	code: string
}

const ShortenedUrl = ({
	shortenedUrl,
	index
}: {
	shortenedUrl?: ShortenedUrlProps
	index: number
}) => {
	const backgroundColorClass = index % 2 === 0 ? "bg-gray-100" : "bg-white"

	return (
		<div className={`flex items-center ${backgroundColorClass} py-2 px-4 relative`}>
			{shortenedUrl && (
				<>
					<Link
						target="_blank"
						href={`${shortenedUrl.url}`}
						className=" text-sm flex flex-1 gap-2 items-center text-blue-default hover:underline w-max"
					>
						{shortenedUrl.url}
					</Link>
					<p className="text-sm hidden md:block flex-1 text-gray-500">
						{shortenedUrl.origin}
					</p>

					<div className="hidden md:flex flex-2 gap-5 items-center">
						<Copy url={shortenedUrl.url} />
						<Image
							src="edit.svg"
							alt="edit"
							width={20}
							height={20}
							className="cursor-pointer"
						/>
						<Delete id={shortenedUrl.id} />
					</div>

					<MobileDots id={shortenedUrl.id} url={shortenedUrl.url} />
				</>
			)}
		</div>
	)
}

export default ShortenedUrl
