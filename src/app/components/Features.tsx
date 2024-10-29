import { featuresData } from "@/constants"
import Feature, { FeatureProps } from "./Feature"

const Features = () => {
	return (
		<ul className="flex flex-wrap flex-col md:flex-row mt-[4rem] mb-[3rem] gap-2 justify-between bg-white shadow-md py-[1.2rem] px-[1rem] md:px-[5.5rem]">
			{featuresData.map(feature => (
				<Feature key={feature.name} feature={feature} />
			))}
		</ul>
	)
}

export default Features
