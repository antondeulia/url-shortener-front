"use client"

import { useShortenedUrlsStore } from "@/store/shortenedUrls"

const OneTimeUrlModal = () => {
	const isOpen = useShortenedUrlsStore(state => state.isOpen)

	return (
		<>
			{isOpen && (
				<div className="fixed w-full h-screen top-0 left-0 bg-black opacity-80">
					<div className="bg-white">Hello</div>
				</div>
			)}
		</>
	)
}

export default OneTimeUrlModal
