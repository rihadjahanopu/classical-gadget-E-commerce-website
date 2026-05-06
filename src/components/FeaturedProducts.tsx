import Image from "next/image";

function ProductCard() {
	return (
		<div className="flex-1 min-w-0 bg-white group cursor-pointer border-2 border-[#ebe8e870] p-3 sm:p-4 rounded-lg hover:border-[#0088cc] hover:shadow-2xl transition-all duration-300 relative">
			{/* Badges */}
			<div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex flex-col gap-1.5 sm:gap-2">
				<span className="bg-[#222] text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm uppercase">
					HOT
				</span>
				<span className="bg-[#eb2771] text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm uppercase">
					-20%
				</span>
			</div>

			{/* Image Container */}
			<div className="relative h-40 sm:h-44 md:h-48 mb-3 sm:mb-4 overflow-hidden rounded-md">
				<Image
					className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
					src="/image/product-1.jpg"
					alt="Product"
					width={200}
					height={200}
				/>

				{/* Hover Overlay - Desktop Only */}
				<div className="hidden md:flex absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center gap-2 lg:gap-3">
					<button className="w-9 h-9 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0088cc] hover:text-white transition-colors">
						<i className="fa-solid fa-cart-shopping text-xs lg:text-sm"></i>
					</button>
					<button className="w-9 h-9 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0088cc] hover:text-white transition-colors">
						<i className="fa-solid fa-heart text-xs lg:text-sm"></i>
					</button>
					<button className="w-9 h-9 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0088cc] hover:text-white transition-colors">
						<i className="fa-solid fa-magnifying-glass text-xs lg:text-sm"></i>
					</button>
				</div>

				{/* Mobile Quick Actions - Always Visible */}
				<div className="flex md:hidden absolute bottom-2 left-2 right-2 gap-2">
					<button className="flex-1 h-8 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center shadow-md text-[#0088cc] text-xs font-bold">
						<i className="fa-solid fa-cart-shopping mr-1"></i> Add
					</button>
					<button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-[#eb2771]">
						<i className="fa-solid fa-heart text-xs"></i>
					</button>
				</div>
			</div>

			{/* Product Info */}
			<div className="text-center">
				<p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase mb-1 tracking-widest">
					Category
				</p>
				<h3 className="text-xs sm:text-sm font-bold text-[#222] mb-1.5 sm:mb-2 group-hover:text-[#0088cc] transition-colors line-clamp-1">
					Porto Camera Compact
				</h3>

				{/* Rating */}
				<div className="flex justify-center gap-0.5 sm:gap-1 text-[9px] sm:text-[10px] text-amber-400 mb-1.5 sm:mb-2">
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
					<i className="fa-solid fa-star"></i>
				</div>

				{/* Price */}
				<div className="flex items-center justify-center gap-1.5 sm:gap-2">
					<span className="text-gray-400 line-through text-[11px] sm:text-xs">
						$299.00
					</span>
					<span className="text-[#0088cc] font-black text-base sm:text-lg">
						$199.00
					</span>
				</div>
			</div>
		</div>
	);
}

export default function FeaturedProducts() {
	return (
		<section className="mb-8 sm:mb-10 lg:mb-12 px-4 lg:px-0">
			{/* Header */}
			<div className="flex items-center justify-between mb-4">
				<h2 className="font-black text-xs sm:text-sm text-[#222] uppercase tracking-tighter">
					FEATURED PRODUCTS
				</h2>
				<div className="flex gap-1.5 sm:gap-2">
					<button className="w-7 h-7 sm:w-8 sm:h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:border-[#0088cc] hover:text-[#0088cc] transition-colors">
						<i className="fa-solid fa-angle-left text-xs sm:text-sm"></i>
					</button>
					<button className="w-7 h-7 sm:w-8 sm:h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:border-[#0088cc] hover:text-[#0088cc] transition-colors">
						<i className="fa-solid fa-angle-right text-xs sm:text-sm"></i>
					</button>
				</div>
			</div>

			{/* Divider */}
			<div className="w-full h-[2px] bg-gray-100 relative mb-4 sm:mb-6">
				<div className="absolute top-0 left-0 w-16 sm:w-20 h-full bg-[#222]"></div>
			</div>

			{/* Product Grid */}
			<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</section>
	);
}
