import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="px-4 lg:px-0">
			{/* Main Hero Banner */}
			<div className="relative w-full h-[380px] sm:h-[420px] md:h-[450px] lg:h-[500px] bg-[#0088cc] rounded-sm overflow-hidden flex items-center mb-5">
				<div className="relative z-10 pl-5 sm:pl-8 md:pl-16 w-full sm:w-3/4 md:w-1/2 pr-4">
					<p className="text-white text-xs sm:text-sm md:text-lg font-bold mb-2 tracking-tight opacity-90 uppercase">
						Find the Boundaries. Push Through!
					</p>
					<h2 className="text-white text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] leading-none font-['Dancing_Script',cursive] mb-2 drop-shadow-md">
						Summer Sale
					</h2>
					<div className="flex flex-col mb-4 md:mb-8">
						<strong className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] text-white font-black leading-[0.85] uppercase tracking-tighter">
							70% OFF
						</strong>
					</div>
					<div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
						<div className="flex items-center gap-2 sm:gap-3">
							<span className="text-white font-bold text-[10px] md:text-xs uppercase opacity-80">
								Starting At
							</span>
							<div className="bg-[#eb2771] px-2.5 sm:px-3 md:px-4 py-1 md:py-1.5 -rotate-2 shadow-lg">
								<span className="font-bold text-lg sm:text-xl md:text-3xl text-white italic">
									$199
								</span>
							</div>
						</div>
						<button className="bg-[#222] hover:bg-black text-white px-4 sm:px-5 md:px-8 py-2 md:py-4 font-black text-[10px] md:text-sm uppercase tracking-widest transition-all rounded-sm shadow-xl hover:scale-105 active:scale-95">
							SHOP NEW!
						</button>
					</div>
				</div>

				{/* Background Image */}
				<div className="absolute top-0 right-0 w-full h-full opacity-30 sm:opacity-40 md:opacity-100 pointer-events-none">
					<Image
						className="w-full h-full object-cover object-right"
						src="/image/slide-1.png"
						alt="Summer Sale Banner"
						width={900}
						height={500}
						priority
					/>
				</div>
			</div>

			{/* Bottom Promo Banners */}
			<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 border border-gray-200 rounded-sm overflow-hidden p-3 sm:p-4 mb-2.5">
				{/* Banner 1 - Watches */}
				<div className="flex-1 relative h-36 sm:h-40 md:h-44 lg:h-48 bg-[#f4f4f4] rounded-sm overflow-hidden group cursor-pointer">
					<Image
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						src="/image/banner-1.jpg"
						alt="Porto Watches"
						width={400}
						height={250}
					/>
					<div className="absolute inset-0 flex flex-col justify-center p-5 sm:p-6 md:p-8 bg-black/5 group-hover:bg-black/10 transition-colors">
						<h3 className="font-black text-base sm:text-lg md:text-xl text-[#222] tracking-tighter">
							Porto Watches
						</h3>
						<div className="flex items-center gap-2 mt-1">
							<span className="text-[11px] sm:text-xs md:text-sm font-bold text-[#eb2771] uppercase">
								20% OFF
							</span>
						</div>
					</div>
				</div>

				{/* Banner 2 - Deal Promos */}
				<div className="flex-1 relative h-36 sm:h-40 md:h-44 lg:h-48 bg-[#f4f4f4] rounded-sm overflow-hidden group cursor-pointer">
					<div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/5 group-hover:bg-black/10 transition-colors">
						<h2 className="font-black text-xl sm:text-2xl md:text-3xl text-[#222] tracking-tighter">
							DEAL PROMOS
						</h2>
						<p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-500 uppercase mt-1">
							Starting at $99
						</p>
						<button className="mt-2 sm:mt-3 md:mt-4 border-b-2 border-[#222] font-black text-[10px] sm:text-xs uppercase py-1 hover:border-[#0088cc] hover:text-[#0088cc] transition-colors">
							SHOP NOW
						</button>
					</div>
				</div>

				{/* Banner 3 - Handbags */}
				<div className="flex-1 relative h-36 sm:h-40 md:h-44 lg:h-48 bg-[#f4f4f4] rounded-sm overflow-hidden group cursor-pointer">
					<Image
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						src="/image/banner-3.jpg"
						alt="Handbags"
						width={400}
						height={250}
					/>
					<div className="absolute inset-0 flex flex-col justify-center p-5 sm:p-6 md:p-8 bg-black/5 group-hover:bg-black/10 transition-colors">
						<h3 className="font-black text-base sm:text-lg md:text-xl text-[#222] tracking-tighter">
							Handbags
						</h3>
						<span className="text-[11px] sm:text-xs md:text-sm font-bold text-gray-500 uppercase mt-1">
							Starting at $99
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
