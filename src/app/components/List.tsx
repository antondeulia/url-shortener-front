"use client"

import React, { useEffect } from "react"
import ShortenedUrl from "./ShortenedUrl"
import { useShortenedUrlsStore } from "@/store/shortenedUrls"

const List = () => {
	const shortenedUrls = useShortenedUrlsStore(state => state.shortenedUrls)
	const fetchShortenedUrls = useShortenedUrlsStore(state => state.fetchShortenedUrls)

	useEffect(() => {
		fetchShortenedUrls()
	}, [shortenedUrls])

	return (
		<div className="flex flex-col mt-[2rem] mb-[3rem] gap-2 justify-between bg-white shadow-md py-[1.2rem] px-[1rem]">
			{shortenedUrls.length > 0 ? (
				<ul className="flex flex-col gap-4">
					{shortenedUrls.map((shortenedUrl, index) => (
						<ShortenedUrl
							key={shortenedUrl.id}
							shortenedUrl={shortenedUrl}
							index={index}
						/>
					))}
				</ul>
			) : (
				<p>The list is empty.</p>
			)}
		</div>
	)
}

export default List
