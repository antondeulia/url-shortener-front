import Image from "next/image"

const Loader = () => {
	return (
		<div className="h-screen w-full flex justify-center items-center">
			<Image src="/loader.gif" alt="loader" width={50} height={50} />
		</div>
	)
}

export default Loader
