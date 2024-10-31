import fetchWithAuth from "@/utils"
import { IShortenedUrl } from "@/utils/interfaces/shortenedUrl"
import { create } from "zustand"

type ShortenedUrlsStore = {
	shortenedUrls: IShortenedUrl[]
	setShortenedUrls: (data: IShortenedUrl[]) => void
	addShortenedUrl: (data: IShortenedUrl) => void
	deleteShortenedUrl: (id: number) => void
	fetchShortenedUrls: () => Promise<void>
}

export const useShortenedUrlsStore = create<ShortenedUrlsStore>(set => ({
	shortenedUrls: [],

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
	}
}))
