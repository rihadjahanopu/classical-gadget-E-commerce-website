"use client";

import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	const toggleDropdown = (item: string) => {
		setActiveDropdown(activeDropdown === item ? null : item);
	};

	return (
		<>
			{/* Mobile Header / Toggle */}
			<div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#c7c7c7] px-4 py-3 flex items-center justify-between">
				<strong className="text-sm tracking-tighter text-[#222]">
					BROWSE CATEGORIES
				</strong>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="p-2 text-[#222] hover:text-[#0088cc] transition-colors"
					aria-label="Toggle menu">
					{isOpen ?
						<i className="fa-solid fa-xmark text-xl"></i>
					:	<i className="fa-solid fa-bars text-xl"></i>}
				</button>
			</div>

			{/* Mobile Overlay */}
			{isOpen && (
				<div
					className="lg:hidden fixed inset-0 bg-black/50 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Sidebar Container */}
			<div
				className={`
				${isOpen ? "translate-x-0" : "-translate-x-full"}
				lg:translate-x-0
				fixed lg:static
				top-[52px] lg:top-auto
				left-0
				w-[280px] lg:w-full
				h-[calc(100vh-52px)] lg:h-auto
				overflow-y-auto lg:overflow-visible
				bg-white lg:bg-transparent
				z-40 lg:z-auto
				transition-transform duration-300
				p-4 lg:p-0
			`}>
				<div className="border border-[#c7c7c7] overflow-hidden rounded-sm lg:rounded-none">
					{/* Desktop Header - Hidden on Mobile */}
					<div className="hidden lg:block bg-[#f4f4f4] px-5 py-3 border-b border-[#c7c7c7]">
						<strong className="text-sm tracking-tighter text-[#222]">
							BROWSE CATEGORIES
						</strong>
					</div>

					<ul className="m-0 p-0">
						{/* Home */}
						<li className="bg-[#0088cc] group/navitem">
							<a
								className="px-5 py-2.5 flex items-center text-white font-bold text-sm"
								href="#">
								<i className="fa-solid fa-house mr-3 w-5 text-center"></i>Home
							</a>
						</li>

						{/* Categories with Mobile Dropdown */}
						<li className="group/navitem relative">
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									toggleDropdown("categories");
								}}
								className="px-5 py-2.5 flex items-center text-[#777] font-semibold text-sm border-b border-[#eee] hover:bg-[#0088cc] hover:text-white transition-colors">
								<i className="fa-sharp fa-solid fa-award mr-3 w-5 text-center"></i>
								Categories
								<i
									className={`fa-solid fa-angle-right ml-auto text-[10px] transition-transform lg:group-hover/navitem:rotate-0 ${activeDropdown === "categories" ? "rotate-90" : ""}`}></i>
							</a>

							{/* Mobile Dropdown */}
							<div
								className={`lg:hidden ${activeDropdown === "categories" ? "block" : "hidden"} bg-gray-50 border-b border-[#eee]`}>
								<div className="p-4 space-y-4">
									<div>
										<h4 className="font-bold text-xs text-[#222] mb-3 uppercase">
											Variation 1
										</h4>
										<ul className="space-y-2 pl-2">
											{[1, 2, 3, 4, 5, 6].map((num) => (
												<li key={num}>
													<a
														href="#"
														className="text-xs text-[#777] hover:text-[#0088cc] hover:underline block py-1">
														option-{num}
													</a>
												</li>
											))}
										</ul>
									</div>
									<div>
										<h4 className="font-bold text-xs text-[#222] mb-3 uppercase">
											Variation 2
										</h4>
										<ul className="space-y-2 pl-2">
											{[1, 2, 3, 4, 5, 6].map((num) => (
												<li key={num}>
													<a
														href="#"
														className="text-xs text-[#777] hover:text-[#0088cc] hover:underline block py-1">
														option-{num}
													</a>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>

							{/* Desktop Mega Menu */}
							<div className="hidden lg:flex absolute top-0 left-full bg-white z-50 opacity-0 invisible translate-x-5 transition-all duration-300 shadow-xl border border-gray-100 group-hover/navitem:opacity-100 group-hover/navitem:visible group-hover/navitem:translate-x-0 w-[500px]">
								<div className="flex-1 p-5 border-r border-gray-50">
									<h4 className="font-bold text-xs text-[#222] mb-4 uppercase">
										VARIATION 1
									</h4>
									<ul className="space-y-2">
										{[1, 2, 3, 4, 5, 6].map((num) => (
											<li key={num}>
												<a
													href="#"
													className="text-xs text-[#777] hover:text-[#0088cc] hover:underline">
													option-{num}
												</a>
											</li>
										))}
									</ul>
								</div>
								<div className="flex-1 p-5">
									<h4 className="font-bold text-xs text-[#222] mb-4 uppercase">
										VARIATION 2
									</h4>
									<ul className="space-y-2">
										{[1, 2, 3, 4, 5, 6].map((num) => (
											<li key={num}>
												<a
													href="#"
													className="text-xs text-[#777] hover:text-[#0088cc] hover:underline">
													option-{num}
												</a>
											</li>
										))}
									</ul>
								</div>
								<div className="flex-1 p-5 bg-[#f9f9f9]">
									<Image
										className="w-full h-auto object-cover rounded-sm"
										src="/image/menu-banner.jpg"
										alt="Menu banner"
										width={200}
										height={280}
									/>
								</div>
							</div>
						</li>

						{/* Products */}
						<li className="bg-white border-b border-[#e7e7e7]">
							<a
								href="#"
								className="flex items-center justify-between px-5 py-3 text-[#666] font-bold text-sm hover:text-[#0088cc] transition-colors">
								<div className="flex items-center">
									<i className="fa-solid fa-cart-shopping mr-3"></i> Products
								</div>
								<i className="fa-solid fa-angle-right text-[10px]"></i>
							</a>
						</li>

						{/* Pages */}
						<li className="bg-white border-b border-[#e7e7e7]">
							<a
								href="#"
								className="flex items-center justify-between px-5 py-3 text-[#666] font-bold text-sm hover:text-[#0088cc] transition-colors">
								<div className="flex items-center">
									<i className="fa-solid fa-file-lines mr-3"></i> Pages
								</div>
								<i className="fa-solid fa-angle-right text-[10px]"></i>
							</a>
						</li>

						{/* Blog */}
						<li className="bg-white border-b border-[#e7e7e7]">
							<a
								href="#"
								className="flex items-center px-5 py-3 text-[#666] font-bold text-sm hover:text-[#0088cc] transition-colors">
								<i className="fa-solid fa-newspaper mr-3"></i> Blog
							</a>
						</li>

						{/* About Us */}
						<li className="bg-white border-b border-[#e7e7e7]">
							<a
								href="#"
								className="flex items-center px-5 py-3 text-[#666] font-bold text-sm hover:text-[#0088cc] transition-colors">
								<i className="fa-solid fa-user mr-3"></i> About Us
							</a>
						</li>

						{/* Special Offer */}
						<li className="bg-white border-b border-[#e7e7e7]">
							<a
								href="#"
								className="flex items-center px-5 py-3 text-[#666] font-bold text-sm hover:text-[#0088cc] transition-colors">
								<i className="fa-solid fa-gift mr-3"></i> Special Offer!
							</a>
						</li>

						{/* Buy Porto */}
						<li className="bg-white border-b border-[#e7e7e7]">
							<a
								href="#"
								className="flex items-center px-5 py-3 text-[#666] font-bold text-sm hover:text-[#0088cc] transition-colors">
								<i className="fa-solid fa-star mr-3"></i> Buy Porto!{" "}
								<span className="bg-[#eb2771] text-white text-[9px] px-1.5 py-0.5 rounded-sm ml-2 font-bold uppercase">
									HOT
								</span>
							</a>
						</li>
					</ul>
				</div>

				{/* Sale Banner */}
				<div className="border border-[#c7c7c7] mt-5 relative group overflow-hidden rounded-sm h-[450px]">
					<Image
						className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500"
						src="/image/Screenshot kkkk2022-09-06 213814.png"
						alt="Sale banner"
						width={250}
						height={400}
					/>
					<div className="absolute inset-0 top-[60%] flex flex-col justify-center items-center p-5 text-center text-white">
						<p className="font-bold text-sm uppercase mb-4 leading-tight text-[#111]">
							Bags, Clothing T-Shirts, Shoes, Watches and much more..
						</p>
						<a
							href="#"
							className="bg-[#111] hover:bg-black text-white px-6 py-2.5 text-xs font-black tracking-widest transition-colors">
							VIEW SALE
						</a>
						<div className="flex gap-1.5 mt-4">
							<div className="w-2 h-2 rounded-full bg-white"></div>
							<div className="w-2 h-2 rounded-full bg-white/50 border border-white/30"></div>
							<div className="w-2 h-2 rounded-full bg-white/50 border border-white/30"></div>
						</div>
					</div>
				</div>

				{/* Newsletter */}
				<div className="bg-[#f4f4f4] mt-5 p-6 text-center border border-[#eee] rounded-sm">
					<h3 className="text-sm font-black text-[#222] mb-2 uppercase tracking-tight">
						SUBSCRIBE NEWSLETTER
					</h3>
					<p className="text-xs text-gray-500 mb-5 leading-relaxed">
						Get all the latest information on Events, Sales and Offers.
					</p>
					<div className="bg-white rounded-full p-1.5 flex items-center border border-gray-200 mb-4 focus-within:border-[#0088cc] transition-colors">
						<i className="fa-regular fa-envelope text-gray-400 px-3"></i>
						<input
							className="bg-transparent border-none outline-none text-xs grow py-2 w-full"
							type="email"
							placeholder="Email Address"
						/>
					</div>
					<button className="w-full bg-[#0088cc] hover:bg-[#0077b3] text-white font-black text-xs py-3 rounded-full tracking-widest transition-colors uppercase">
						SUBSCRIBE
					</button>
				</div>

				{/* Testimonial */}
				<div className="border-[3px] border-[#0088cc] mt-5 p-6 text-center rounded-sm bg-white shadow-sm">
					<div className="flex items-center justify-center gap-4 mb-5">
						<Image
							className="rounded-full w-14 h-14 object-cover border-2 border-white shadow-md"
							src="/image/client-1.jpg"
							alt="John Smith"
							width={60}
							height={60}
						/>
						<div className="text-left">
							<h3 className="text-sm font-black text-[#222] leading-none">
								John Smith
							</h3>
							<p className="text-[10px] text-gray-400 font-bold uppercase mt-1 tracking-wider">
								CEO &amp; Founder
							</p>
						</div>
					</div>
					<div className="relative pt-2">
						<i className="fa-solid fa-quote-left text-gray-200 text-3xl absolute -top-1 -left-2 z-0"></i>
						<p className="text-xs italic text-gray-500 relative z-10 leading-relaxed">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
							distinctio sapiente!
						</p>
					</div>
					<div className="flex gap-1.5 justify-center mt-5">
						<div className="w-1.5 h-1.5 rounded-full bg-[#0088cc]"></div>
						<div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
						<div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
					</div>
				</div>

				{/* Post Card */}
				<div className="border border-[#eee] mt-5 overflow-hidden rounded-sm bg-white group">
					<div className="overflow-hidden h-48 lg:h-60">
						<Image
							className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
							src="/image/post-1.jpg"
							alt="Post"
							width={220}
							height={160}
						/>
					</div>
					<div className="p-5">
						<h3 className="text-sm font-black text-[#222] mb-2 group-hover:text-[#0088cc] transition-colors cursor-pointer">
							Post Format Standard
						</h3>
						<p className="text-[11px] leading-relaxed text-gray-400 mb-4">
							Leap into electronic typesetting remaining essentially unchanged
							it was popularised i Need Assistanc the 1960s with
						</p>
						<div className="flex gap-1.5">
							<div className="w-1.5 h-1.5 rounded-full bg-[#0088cc]"></div>
							<div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
							<div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
