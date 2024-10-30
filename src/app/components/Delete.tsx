"use client"

import { useShortenedUrlsStore } from "@/store/shortenedUrls"
import Image from "next/image"
import { toast } from "react-toastify"

const Delete = ({ id }: { id: number }) => {
	const deleteShortenedUrl = useShortenedUrlsStore(state => state.deleteShortenedUrl)

	const handleDelete = async () => {
		try {
			const res = await fetch(`http://localhost:4200/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczMDI0MDA2OCwiZXhwIjoxNzMwMzI2NDY4fQ._cOe1SbJ6_9YlvJArTHF_VaYGS-jmQ4CDlKVYxsmIWk"
				}
			})

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
