import Link from "next/link"
import CreateForm from "../../components/CreateForm"
import Features from "../../components/Features"
import List from "../../components/List"
import TextBlock from "../../components/TextBlock"
import WantMore from "@/components/WantMore"
import SignedIn from "@/components/SignedIn"
import SignedOut from "@/components/SignedOut"

const HomePage = () => {
	return (
		<section>
			<div className="max-w-[1000px] mx-auto mt-10 relative z-10 pt-10 md:pt-0">
				<div className="hidden md:block text-[2.5rem] font-black text-blue-light text-center">
					Welcome to Short URL
				</div>

				<SignedIn>
					<div className="bg-white shadow-md mt-[1.5rem] py-[1.2rem] px-[1rem] md:px-[5.5rem]">
						<h2 className="text-[1.6rem] text-gray-bold font-bold text-center">
							Paste the URL to be shortened
						</h2>

						<CreateForm />

						<p className="text-center max-w-[550px] mt-[1.5rem] mx-auto text-sm text-gray-700">
							ShortURL is a free tool to shorten URLs and generate short
							links URL shortener allows to create a shortened link making
							it easy to share
						</p>
					</div>
				</SignedIn>

				<SignedIn>
					<List />
				</SignedIn>

				<SignedOut>
					<WantMore />
				</SignedOut>

				<div className="mt-[2rem] flex flex-col gap-6 bg-white shadow-md py-[1.2rem] px-[1rem] md:px-[5.5rem]">
					<TextBlock
						title="Simple and fast URL shortener!"
						text="ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites. Just paste the long URL and click the Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails. After shortening the URL, check how many clicks it received."
					/>
					<TextBlock
						title="Shorten, share and track"
						text="Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. Track statistics for your business and projects by monitoring the number of hits from your URL with our click counter."
					/>
				</div>

				<Features />
			</div>
		</section>
	)
}

export default HomePage
