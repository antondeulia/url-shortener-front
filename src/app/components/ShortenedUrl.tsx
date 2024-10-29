type ShortenedUrlProps = {
	id: number
	name?: string
	origin: string
	url: string
	code: string
}

const ShortenedUrl = ({ shortenedUrl }: { shortenedUrl: ShortenedUrlProps }) => {
	const { id, code, origin, url, name } = shortenedUrl

	return (
		<div>
			{id}. {url} | {origin} | {code}
		</div>
	)
}

export default ShortenedUrl
