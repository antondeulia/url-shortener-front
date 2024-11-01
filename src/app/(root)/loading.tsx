import Image from "next/image"

const RootLoading = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<Image src="/loader.gif" alt="loader" width={50} height={50} />
		</div>
	)
}

export default RootLoading
