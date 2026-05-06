"use client";

import { useState } from "react";

export default function SearchNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	return (
		<nav className="bg-white border-b border-gray-100 relative z-40">
			<div className="wrapper px-4 lg:px-0">
				<div className="py-4 lg:py-5">
					{/* Main Row */}
					<div className="flex items-center justify-between gap-4">
						{/* Logo */}
						<div className="shrink-0">
							<strong className="text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-none text-[#0088cc] tracking-tighter block">
								Porto
							</strong>
						</div>

						{/* Desktop Search + Actions */}
						<div className="hidden md:flex flex-row flex-grow items-center gap-5 ml-14 w-auto">
							{/* Search Bar */}
							<div className="flex items-center flex-grow bg-[#f4f4f4] rounded-[50px] h-[42px] overflow-hidden border border-[#eee] max-w-[600px]">
								<input
									className="border-none outline-none flex-grow bg-transparent px-5 text-sm text-gray-600 placeholder:text-gray-400 min-w-0"
									type="search"
									placeholder="Search..."
									required
								/>
								<div className="hidden sm:flex h-full items-center px-4 border-l border-gray-300/50 relative shrink-0">
									<select
										className="bg-transparent border-none outline-none text-[11px] font-semibold text-gray-500 appearance-none pr-5 cursor-pointer z-10"
										name="category"
										id="category">
										<option>All Categories</option>
										<option>Electronics</option>
										<option>Fashion</option>
										<option>Home</option>
									</select>
									<i className="fa-solid fa-angle-down absolute right-3 text-[10px] text-gray-400 pointer-events-none"></i>
								</div>
								<button className="px-5 text-[#333] h-full flex items-center cursor-pointer hover:text-[#0088cc] transition-colors border-l border-gray-300/50 bg-transparent shrink-0">
									<i className="fa-solid fa-magnifying-glass text-sm"></i>
								</button>
							</div>

							{/* Phone + Icons */}
							<div className="flex shrink-0 items-center gap-6">
								<div className="hidden lg:flex items-center gap-3 border-r border-gray-200 pr-6 h-8">
									<i className="fa-solid fa-phone text-[1.4rem] xl:text-[1.6rem] text-[#22254b]"></i>
									<div>
										<p className="text-[9px] leading-none text-gray-400 font-bold uppercase mb-1">
											CALL US NOW
										</p>
										<strong className="text-[1rem] xl:text-[1.1rem] leading-none text-[#22254b] tracking-tighter">
											+8801798117281
										</strong>
									</div>
								</div>
								<div className="flex items-center gap-4 xl:gap-5 text-[1.3rem] xl:text-[1.5rem] text-[#22254b]">
									<a
										href="#"
										className="hover:text-[#0088cc] transition-colors p-1">
										<i className="fa-regular fa-user"></i>
									</a>
									<a
										href="#"
										className="hover:text-[#0088cc] transition-colors p-1">
										<i className="fa-regular fa-heart"></i>
									</a>
									<a
										href="#"
										className="relative hover:text-[#0088cc] transition-colors p-1">
										<i className="fa-solid fa-bag-shopping"></i>
										<span className="absolute -top-1 -right-1 bg-[#eb2771] text-white text-[9px] w-[16px] h-[16px] flex items-center justify-center rounded-full font-bold shadow-sm">
											20
										</span>
									</a>
									<a
										href="#"
										className="hidden lg:inline-block text-[#22254b]/30 hover:text-[#22254b] transition-colors ml-1">
										<i className="fa-solid fa-angle-left text-sm"></i>
									</a>
								</div>
							</div>
						</div>

						{/* Mobile Actions */}
						<div className="flex md:hidden items-center gap-3">
							<button
								onClick={() => setIsSearchOpen(!isSearchOpen)}
								className="p-2 text-[#22254b] hover:text-[#0088cc] transition-colors"
								aria-label="Search">
								<i className="fa-solid fa-magnifying-glass text-lg"></i>
							</button>
							<a
								href="#"
								className="relative p-2 text-[#22254b] hover:text-[#0088cc] transition-colors">
								<i className="fa-solid fa-bag-shopping text-lg"></i>
								<span className="absolute top-0 right-0 bg-[#eb2771] text-white text-[8px] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold">
									20
								</span>
							</a>
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="p-2 text-[#22254b] hover:text-[#0088cc] transition-colors"
								aria-label="Menu">
								<i
									className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
							</button>
						</div>
					</div>

					{/* Mobile Search Expand */}
					{isSearchOpen && (
						<div className="md:hidden mt-4 pb-2">
							<div className="flex items-center bg-[#f4f4f4] rounded-[50px] h-[44px] overflow-hidden border border-[#eee]">
								<input
									className="border-none outline-none flex-grow bg-transparent px-4 text-sm text-gray-600 placeholder:text-gray-400"
									type="search"
									placeholder="Search products..."
									autoFocus
								/>
								<button className="px-4 text-[#333] h-full flex items-center cursor-pointer hover:text-[#0088cc] transition-colors border-l border-gray-300/50 bg-transparent">
									<i className="fa-solid fa-magnifying-glass"></i>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{isMenuOpen && (
				<div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute top-full left-0 right-0">
					<div className="wrapper px-4 py-4">
						{/* Mobile Phone */}
						<div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-100">
							<i className="fa-solid fa-phone text-xl text-[#22254b]"></i>
							<div>
								<p className="text-[10px] text-gray-400 font-bold uppercase">
									CALL US NOW
								</p>
								<strong className="text-lg text-[#22254b] tracking-tighter">
									+8801798117281
								</strong>
							</div>
						</div>

						{/* Mobile Nav Links */}
						<ul className="space-y-1">
							{[
								{ icon: "fa-regular fa-user", label: "My Account" },
								{ icon: "fa-regular fa-heart", label: "My Wishlist" },
								{ icon: "fa-solid fa-phone", label: "Contact Us" },
								{ icon: "fa-solid fa-map", label: "Site Map" },
								{ icon: "fa-solid fa-cart-shopping", label: "Cart" },
								{ icon: "fa-solid fa-right-to-bracket", label: "Log In" },
							].map((item) => (
								<li key={item.label}>
									<a
										href="#"
										className="flex items-center gap-3 text-[#22254b] font-semibold text-sm hover:text-[#0088cc] hover:bg-gray-50 px-3 py-3 rounded-sm transition-colors">
										<i className={`${item.icon} w-5 text-center`}></i>
										{item.label}
									</a>
								</li>
							))}
						</ul>

						{/* Mobile Categories */}
						<div className="mt-4 pt-4 border-t border-gray-100">
							<h4 className="text-xs font-bold text-gray-400 uppercase mb-3 px-3">
								Categories
							</h4>
							<ul className="space-y-1">
								{[
									"All Categories",
									"Electronics",
									"Fashion",
									"Home & Garden",
									"Sports",
								].map((cat) => (
									<li key={cat}>
										<a
											href="#"
											className="block text-sm text-gray-600 hover:text-[#0088cc] px-3 py-2 rounded-sm hover:bg-gray-50 transition-colors">
											{cat}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
