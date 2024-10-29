import { IShortenedUrl } from "@/utils/interfaces/shortenedUrl"
import ShortenedUrl from "./ShortenedUrl"

const fetchShortenedUrls = async (): Promise<IShortenedUrl[]> => {
	const res = await fetch("http://localhost:4200", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczMDIzMjk5NywiZXhwIjoxNzMwMjM2NTk3fQ.o0KrBlD0EoXIL9d-jcbOcXMiP7EyJbf9odVCWRzIo2Y`
		}
	})

	if (res.status === 200) {
		return await res.json()
	} else {
		throw new Error("Unable to fetch your data")
	}
}

const List = async () => {
	const shortenedUrls = await fetchShortenedUrls()

	return (
		<div className="flex flex-col mt-[4rem] mb-[3rem] gap-2 justify-between bg-white shadow-md py-[1.2rem] px-[1rem] md:px-[5.5rem]">
			{shortenedUrls.map(shortenedUrl => (
				<ShortenedUrl key={shortenedUrl.id} shortenedUrl={shortenedUrl} />
			))}
		</div>
	)
}

export default List
