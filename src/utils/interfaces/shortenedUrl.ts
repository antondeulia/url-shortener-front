export interface IShortenedUrl {
	id: number
	name?: string | null
	url: string
	origin: string
	code: string
	clicks: number
	createdAt: Date
	updatedAt: Date
	userId: number
}
