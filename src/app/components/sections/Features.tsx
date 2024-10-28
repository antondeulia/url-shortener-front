import Feature, { FeatureProps } from "../Feature"

const featuresData: FeatureProps[] = [
	{
		name: "Easy",
		desc: "ShortURL is easy and fast, enter the long link to get your shortened link",
		icon: "/like.svg"
	},
	{
		name: "Shortened",
		desc: "Use any link, no matter what size, ShortURL always shortens",
		icon: "/url.svg"
	},
	{
		name: "Secure",
		desc: "It is fast and secure, our service has HTTPS protocol and data encryption",
		icon: "/secure.svg"
	},
	{
		name: "Statistics",
		desc: "Check the number of clicks that your shortened URL received",
		icon: "/statistics.svg"
	},
	{
		name: "Reliable",
		desc: "All links that try to disseminate spam, viruses and malware are deleted",
		icon: "/unique.svg"
	},
	{
		name: "Devices",
		desc: "Compatible with smartphones, tablets and desktop",
		icon: "/responsive.svg"
	}
]

const Features = () => {
	return (
		<div className="flex flex-wrap flex-col md:flex-row mt-[4rem] mb-[3rem] gap-2 justify-between bg-white shadow-md py-[1.2rem] px-[1rem] md:px-[5.5rem]">
			{featuresData.map(feature => (
				<Feature key={feature.name} feature={feature} />
			))}
		</div>
	)
}

export default Features
