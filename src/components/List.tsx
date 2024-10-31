"use client"

import React, { useEffect } from "react"
import ShortenedUrl from "./ShortenedUrl"
import { useShortenedUrlsStore } from "@/store/shortenedUrls"
import Image from "next/image"

const List = () => {
	const shortenedUrls = useShortenedUrlsStore(state => state.shortenedUrls)
	const fetchShortenedUrls = useShortenedUrlsStore(state => state.fetchShortenedUrls)

	useEffect(() => {
		fetchShortenedUrls()
	}, [shortenedUrls])

	return (
		<div className="mt-[2rem] mb-[3rem] justify-between bg-white shadow-md py-[1.2rem] px-[1rem]">
			{shortenedUrls.length ? (
				<ul className="flex flex-col gap-2 min-h-[300px]">
					{shortenedUrls.map((shortenedUrl, index) => (
						<li>
							<ShortenedUrl
								key={shortenedUrl.id}
								shortenedUrl={shortenedUrl}
								index={index}
							/>
						</li>
					))}
				</ul>
			) : (
				<div className="relative w-[400px] h-[300px] mx-auto">
					<Image src="/Designer (1).jpeg" alt="empty" fill />
				</div>
			)}
		</div>
	)
}

export default List
