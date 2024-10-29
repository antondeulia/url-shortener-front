import { FeatureProps } from "@/app/components/Feature"

export const footerLinks: { name: string; href: string }[] = [
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

export const featuresData: FeatureProps[] = [
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
