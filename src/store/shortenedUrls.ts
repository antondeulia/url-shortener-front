"use client"

import { fetchWithAuth } from "@/utils"
import { IShortenedUrl } from "@/utils/interfaces/shortenedUrl"
import { create } from "zustand"

type ShortenedUrlsStore = {
	shortenedUrls: IShortenedUrl[]
	shortenedUrlsFromLs: IShortenedUrl[]

	setShortenedUrls: (data: IShortenedUrl[]) => void
	addShortenedUrl: (data: IShortenedUrl) => void
	deleteShortenedUrl: (id: number) => void
	fetchShortenedUrls: () => Promise<void>
	addShortenedUrlFromLs: (data: any) => void
	getShortenedUrlsFromLs: () => void
}

export const useShortenedUrlsStore = create<ShortenedUrlsStore>(set => ({
	shortenedUrls: [],
	shortenedUrlsFromLs: [],

	setShortenedUrls: (data: IShortenedUrl[]) => set({ shortenedUrls: data }),
	addShortenedUrl: newUrl =>
		set(state => ({
			shortenedUrls: [...state.shortenedUrls, newUrl]
		})),
	deleteShortenedUrl: (id: number) =>
		set(state => ({
			shortenedUrls: [
				...state.shortenedUrls.filter(shortenedUrl => shortenedUrl.id !== id)
			]
		})),
	fetchShortenedUrls: async () => {
		const res = await fetchWithAuth(process.env.NEXT_PUBLIC_BACKEND_URL as string, {
			method: "GET"
		})
		if (res.status === 200) {
			const data: IShortenedUrl[] = await res.json()

			set(state => {
				if (JSON.stringify(state.shortenedUrls) !== JSON.stringify(data)) {
					return { shortenedUrls: data }
				}
				return state
			})
		} else {
			throw new Error("Unable to fetch your data")
		}
	},
	addShortenedUrlFromLs: (newUrl: any) =>
		set(state => {
			return {
				shortenedUrlsFromLs: [...(state.shortenedUrlsFromLs || []), newUrl]
			}
		}),
	getShortenedUrlsFromLs: () => {
		const shortenedUrls = localStorage
			.getItem("shortenedUrls")
			?.split(" ")
			.map(url => JSON.parse(url))

		set(state => {
			if (
				JSON.stringify(state.shortenedUrlsFromLs) !==
				JSON.stringify(shortenedUrls)
			) {
				return { shortenedUrlsFromLs: shortenedUrls }
			}
			return state
		})
	}
}))
