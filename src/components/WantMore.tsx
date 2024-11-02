import Link from "next/link"

const WantMore = () => {
	return (
		<div className='flex flex-col items-center bg-white  shadow-md mt-[1.5rem] py-[1.2rem] px-[1rem] md:px-[5.5rem]"'>
			<h2 className="text-2xl text-gray-bold font-bold">
				The demo feature is temporarily unavailable
			</h2>

			<p className="text-center max-w-[550px] mt-[1.5rem] mx-auto text-sm">
				Custom short links, powerful dashboard, detailed analytics, API, UTM
				builder, QR codes, browser extension, app integrations and support
			</p>

			<Link
				href="sign-up"
				className="rounded-md p-[1.5rem] w-full md:w-max text-sm bg-blue-dark text-white font-bold hover:bg-blue-light transition-all duration-300 mt-[1.5rem]"
			>
				Create Account
			</Link>
		</div>
	)
}

export default WantMore
