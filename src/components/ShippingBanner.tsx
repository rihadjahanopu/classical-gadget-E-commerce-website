export default function ShippingBanner() {
	return (
		<section className="mb-8 px-4 lg:px-0">
			<div className="flex flex-col sm:flex-row border border-[#e7e7e7] rounded-sm divide-y sm:divide-y-0 sm:divide-x divide-[#e7e7e7] overflow-hidden">
				{/* Free Shipping */}
				<div className="flex flex-1 items-center p-4 sm:p-5 hover:bg-gray-50/50 transition-colors">
					<div className="shrink-0 mr-3 sm:mr-4">
						<i className="fa-solid fa-truck-fast text-[1.8rem] sm:text-[2.2rem] text-[#0088cc]"></i>
					</div>
					<div className="min-w-0">
						<h3 className="text-xs sm:text-sm font-bold text-[#111] uppercase leading-tight">
							Free Shipping & Return
						</h3>
						<p className="text-[10px] sm:text-[11px] text-[#999] mt-0.5 sm:mt-1">
							Free shipping on all orders over $99
						</p>
					</div>
				</div>

				{/* Money Back */}
				<div className="flex flex-1 items-center p-4 sm:p-5 hover:bg-gray-50/50 transition-colors">
					<div className="shrink-0 mr-3 sm:mr-4">
						<i className="fa-solid fa-sack-dollar text-[1.8rem] sm:text-[2.2rem] text-[#0088cc]"></i>
					</div>
					<div className="min-w-0">
						<h3 className="text-xs sm:text-sm font-bold text-[#111] uppercase leading-tight">
							Money Back Guarantee
						</h3>
						<p className="text-[10px] sm:text-[11px] text-[#999] mt-0.5 sm:mt-1">
							100% money back guarantee
						</p>
					</div>
				</div>

				{/* Support */}
				<div className="flex flex-1 items-center p-4 sm:p-5 hover:bg-gray-50/50 transition-colors">
					<div className="shrink-0 mr-3 sm:mr-4">
						<i className="fa-solid fa-headset text-[1.8rem] sm:text-[2.2rem] text-[#0088cc]"></i>
					</div>
					<div className="min-w-0">
						<h3 className="text-xs sm:text-sm font-bold text-[#111] uppercase leading-tight">
							Online Support 24/7
						</h3>
						<p className="text-[10px] sm:text-[11px] text-[#999] mt-0.5 sm:mt-1">
							Lorem ipsum dolor sit amet.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
