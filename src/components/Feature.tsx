import Image from "next/image"

export type FeatureProps = {
	name: string
	desc: string
	icon: string
}

const Feature = ({ feature }: { feature: FeatureProps }) => {
	const { name, desc, icon } = feature

	return (
		<li className="w-100% md:max-w-[32%] flex flex-col items-center gap-3">
			<Image src={icon} alt="icon" width={50} height={50} />

			<h3 className="text-xl text-gray-tiny font-bold">{name}</h3>

			<p className="text-md text-gray-bold text-center">{desc}</p>
		</li>
	)
}

export default Feature
