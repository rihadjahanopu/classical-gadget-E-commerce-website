import Image from "next/image";

interface SupportCardProps {
	src: string;
	alt: string;
	title: string;
	subtitle: string;
	description: string;
}

function SupportCard({
	src,
	alt,
	title,
	subtitle,
	description,
}: SupportCardProps) {
	return (
		<div className="flex-1 p-4 sm:p-5 text-center flex flex-col items-center border border-[#eee] rounded-[10px] shadow-sm hover:shadow-lg hover:border-[#0d6efd] transition-all duration-300 group">
			<div className="mb-2.5">
				<Image
					src={src}
					alt={alt}
					width={200}
					height={200}
				/>
			</div>
			<div className="mb-2">
				<h3 className="text-sm sm:text-base md:text-[1.1rem] font-bold text-[#222]">
					{title}
				</h3>
				<p className="text-[#807d7d] text-[11px] sm:text-xs md:text-[0.8rem] mb-2 sm:mb-[10px] uppercase tracking-wider">
					{subtitle}
				</p>
			</div>
			<p className="text-xs sm:text-sm md:text-[0.85rem] text-[#777] leading-relaxed md:leading-[1.6] max-w-[250px]">
				{description}
			</p>
		</div>
	);
}

export default function CustomerSupport() {
	const cards = [
		{
			src: "/image/Screenshotooooo 2022-09-06 210518.png",
			alt: "Customer Support",
			title: "CUSTOMER SUPPORT",
			subtitle: "Need Assistance?",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.",
		},
		{
			src: "/image/Screenshot 2022-09-06 205300.png",
			alt: "Secured Payment",
			title: "SECURED PAYMENT",
			subtitle: "Safe & Fast",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.",
		},
		{
			src: "/image/Screenshotdddd 2022-09-06 210616.png",
			alt: "Returns",
			title: "RETURNS",
			subtitle: "Easy & Free",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.",
		},
	];

	return (
		<section className="px-4 lg:px-0">
			<div className="flex flex-col sm:flex-row py-6 sm:py-8 md:py-10 justify-between border-t border-[#eee] gap-4 sm:gap-5">
				{cards.map((card, index) => (
					<SupportCard
						key={index}
						{...card}
					/>
				))}
			</div>
		</section>
	);
}
