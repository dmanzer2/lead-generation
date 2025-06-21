import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
	{
		name: "Security-Focused Installations",
		description:
			"From smart locks to real-time security monitoring, smart home systems put peace of mind at your fingertips—no matter where you are.",
		icon: CloudArrowUpIcon,
	},
	{
		name: "Convenience + Comfort",
		description:
			"Imagine walking into a perfectly lit, climate-controlled home that responds to your voice or phone. Smart installations make it effortless.",
		icon: LockClosedIcon,
	},
	{
		name: "Energy Efficiency",
		description:
			"Lower your energy bills while increasing comfort and control. Smart tech optimizes your home’s performance—so you don’t have to.",
		icon: ServerIcon,
	},
];

export default function Home() {
	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pt-0 lg:pr-8">
						<div className="lg:max-w-lg">
							<h1 className="text-base/7 font-semibold text-indigo-600">Your East Valley Smart Home Installation Resource</h1>
							<h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
								Smarter Living Starts Here, Sign Up for Expert Guidance
							</h2>
							<p className="mt-6 text-lg/8 text-gray-600">
								A professionally installed smart home system lets you control lighting, climate, security, and entertainment from anywhere—making everyday life more convenient, secure, and energy efficient.
							</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
								{features.map((feature) => (
									<div key={feature.name} className="relative pl-9">
										<dt className="inline font-semibold text-gray-900">
											<feature.icon aria-hidden="true" className="absolute top-1 left-1 w-5 h-5 text-indigo-600" />
											{feature.name}
										</dt>{" "}
										<dd className="inline">{feature.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
					<Image
						alt="Product screenshot"
						src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
						width={2432}
						height={1442}
						className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
					/>
				</div>
			</div>
		</div>
	);
}
