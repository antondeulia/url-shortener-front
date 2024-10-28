import Link from "next/link"

const footerLinks: { name: string; href: string }[] = [
	{
		name: "ShortURL",
		href: ""
	},
	{
		name: "URL Click Counter",
		href: ""
	},
	{
		name: "Unshorten URL",
		href: ""
	},
	{
		name: "Report Mailicous URL",
		href: ""
	},
	{
		name: "Terms of Service",
		href: ""
	},
	{
		name: "Privacy",
		href: ""
	},
	{
		name: "Contact",
		href: ""
	}
]

const Footer = () => {
	return (
		<footer className="footer text-gray-light relative z-10">
			<div className="max-w-[1000px] px-[30px] mx-auto flex flex-col gap-[15px]">
				<p className="text-center mt-[24px]">
					© 2024 ShortUrl.at - Tool to shorten a long link
				</p>

				<nav className="mb-[20px] md:mb-[60px]">
					<ul className="flex flex-wrap gap-2 md:gap-0 items-center text-xl justify-between text-blue-default">
						{footerLinks.map(link => (
							<li className="hover:underline">
								<Link href={link.href}>{link.name}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
