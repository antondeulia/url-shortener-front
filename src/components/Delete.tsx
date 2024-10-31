"use client"

import { useShortenedUrlsStore } from "@/store/shortenedUrls"
import fetchWithAuth from "@/utils"
import Image from "next/image"
import { toast } from "react-toastify"

const Delete = ({ id }: { id: number }) => {
	const deleteShortenedUrl = useShortenedUrlsStore(state => state.deleteShortenedUrl)

	const handleDelete = async () => {
		try {
			const res = await fetchWithAuth(
				process.env.NEXT_PUBLIC_BACKEND_URL + "/" + id,
				{
					method: "DELETE"
				}
			)

			if (res.status === 200) {
				deleteShortenedUrl(id)
				toast.success("The item was deleted")
			}
		} catch (error) {
			console.log(error)
			toast.error("Unable to delete the shortened url")
			throw new Error("Unable to delete the shortened url")
		}

		deleteShortenedUrl(id)
	}

	return (
		<Image
			className="cursor-pointer"
			src="/delete.svg"
			alt="delete"
			width={25}
			height={25}
			onClick={handleDelete}
		/>
	)
}

export default Delete
