import Image from "next/image";

export default function BrandLogos() {
	const brands = [
		{ src: "/image/brand1.png", alt: "Brand 1" },
		{ src: "/image/brand2.png", alt: "Brand 2" },
		{ src: "/image/brand3.png", alt: "Brand 3" },
		{ src: "/image/brand4.png", alt: "Brand 4" },
		{ src: "/image/brand5.png", alt: "Brand 5" },
	];

	return (
		<section className="px-4 lg:px-0">
			<div className="flex flex-wrap py-6 sm:py-8 md:py-10 justify-center items-center border-b border-[#eee] gap-6 sm:gap-8 md:gap-4">
				{brands.map((brand, index) => (
					<div
						key={index}
						className="w-[45%] sm:w-1/3 md:w-auto flex items-center justify-center group">
						<Image
							src={brand.src}
							alt={brand.alt}
							width={150}
							height={50}
							className="w-auto h-8 sm:h-10 md:h-12 object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
						/>
					</div>
				))}
			</div>
		</section>
	);
}
