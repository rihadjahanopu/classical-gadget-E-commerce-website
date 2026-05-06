import Image from "next/image";

function RatedCard() {
	return (
		<div className="flex mb-3 sm:mb-4 border border-[#ebe8e870] rounded-lg p-2 sm:p-2.5 hover:border-[#0088cc] hover:shadow-lg transition-all duration-300 cursor-pointer group">
			{/* Image Container */}
			<div className="shrink-0 w-20 sm:w-24 md:w-20 lg:w-24 h-20 sm:h-24 md:h-20 lg:h-24 rounded-lg overflow-hidden bg-gray-50">
				<Image
					src="/image/product-4-2.jpg"
					alt="Top Rated Product"
					width={96}
					height={96}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
				/>
			</div>

			{/* Content */}
			<div className="flex-1 min-w-0 pl-3 sm:pl-4 flex flex-col justify-center">
				<h4 className="font-semibold text-xs sm:text-sm text-[rgb(106,106,109)] group-hover:text-[#0088cc] transition-colors line-clamp-2 leading-tight">
					Porto Extended Camera
				</h4>
				<div className="flex gap-0.5 text-[10px] sm:text-xs text-amber-500 my-1 sm:my-1.5">
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
				</div>
				<span className="font-bold text-sm sm:text-base text-[#0088cc]">
					$49.00
				</span>
			</div>
		</div>
	);
}

function ColumnCard({ title }: { title: string }) {
	return (
		<div className="w-full md:flex-1 md:basis-1/3 mb-8 sm:mb-10 md:mb-5 px-2">
			{/* Section Header */}
			<div className="mb-3 sm:mb-4">
				<h2 className="font-black text-xs sm:text-sm text-[#222] uppercase tracking-tighter mb-2">
					{title}
				</h2>
				<div className="w-full h-[2px] bg-gray-100 relative">
					<div className="absolute top-0 left-0 w-10 sm:w-12 h-full bg-[#222]"></div>
				</div>
			</div>

			{/* Product Cards */}
			<RatedCard />
			<RatedCard />
			<RatedCard />
		</div>
	);
}

export default function TopRatedProducts() {
	return (
		<section className="px-4 lg:px-0">
			<div className="flex flex-col md:flex-row mt-6 sm:mt-8 md:mt-10 -mx-2">
				<ColumnCard title="TOP RATED PRODUCTS" />
				<ColumnCard title="BEST SELLING" />
				<ColumnCard title="LATEST PRODUCTS" />
			</div>
		</section>
	);
}
