const AuthSidebar = () => {
	return (
		<div className="w-[60%] xl:min-w-[60%] items-center justify-center relative hidden xl:flex">
			<div className="rounded-md flex flex-col  w-[100%] mr-9 h-[90%] py-12 px-28 ">
				<span className="text-sm tracking-wide text-blue-default">
					URL SHORTENER
				</span>

				<h1 className="text-[2.5rem] mt-[10rem]">
					<span className="text-blue-default font-bold">Url Shortener.</span>{" "}
					Fully managed url shortener{" "}
				</h1>
				<p className="text-[1.1rem] mt-[2rem] text-gray-500">
					Get ready for higher performance, free usage, and <br /> greater ease
					of use.
				</p>
			</div>
		</div>
	)
}

export default AuthSidebar
