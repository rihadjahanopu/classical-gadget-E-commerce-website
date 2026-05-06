"use client";

import Image from "next/image";
import { useState } from "react";

export default function TopHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLangOpen, setIsLangOpen] = useState(false);
	const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

	return (
		<header className="bg-[#0088cc] relative z-50">
			<div className="wrapper px-4 lg:px-0">
				<div className="flex items-center justify-between py-3">
					{/* Left: Language & Currency */}
					<div className="flex items-center gap-4 lg:gap-6">
						{/* Language Dropdown */}
						<div className="relative">
							<button
								onClick={() => {
									setIsLangOpen(!isLangOpen);
									setIsCurrencyOpen(false);
								}}
								className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
								<Image
									className="w-4 h-3 object-contain"
									src="/image/american-flag-on-the-white-background-isolated-flat-layout-for-your-designs-free-vector.webp"
									alt="English"
									width={20}
									height={15}
								/>
								<span className="text-white font-bold text-[11px] uppercase">
									ENG
								</span>
								<i
									className={`fa-solid fa-angle-down text-white text-[10px] transition-transform ${isLangOpen ? "rotate-180" : ""}`}></i>
							</button>

							{/* Language Dropdown Menu */}
							{isLangOpen && (
								<div className="absolute top-full left-0 mt-2 bg-white rounded-sm shadow-lg border border-gray-100 py-2 min-w-[120px]">
									<a
										href="#"
										className="flex items-center gap-2 px-4 py-2 text-xs text-[#777] hover:bg-gray-50 hover:text-[#0088cc]">
										<Image
											className="w-4 h-3 object-contain"
											src="/image/american-flag.webp"
											alt="English"
											width={20}
											height={15}
										/>
										English
									</a>
									<a
										href="#"
										className="flex items-center gap-2 px-4 py-2 text-xs text-[#777] hover:bg-gray-50 hover:text-[#0088cc]">
										<Image
											className="w-4 h-3 object-contain"
											src="/image/spanish-flag.webp"
											alt="Spanish"
											width={20}
											height={15}
										/>
										Spanish
									</a>
									<a
										href="#"
										className="flex items-center gap-2 px-4 py-2 text-xs text-[#777] hover:bg-gray-50 hover:text-[#0088cc]">
										<Image
											className="w-4 h-3 object-contain"
											src="/image/french-flag.webp"
											alt="French"
											width={20}
											height={15}
										/>
										French
									</a>
								</div>
							)}
						</div>

						{/* Currency Dropdown */}
						<div className="relative">
							<button
								onClick={() => {
									setIsCurrencyOpen(!isCurrencyOpen);
									setIsLangOpen(false);
								}}
								className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
								<span className="text-white font-bold text-[11px] uppercase">
									USD
								</span>
								<i
									className={`fa-solid fa-angle-down text-white text-[10px] transition-transform ${isCurrencyOpen ? "rotate-180" : ""}`}></i>
							</button>

							{/* Currency Dropdown Menu */}
							{isCurrencyOpen && (
								<div className="absolute top-full left-0 mt-2 bg-white rounded-sm shadow-lg border border-gray-100 py-2 min-w-[80px]">
									<a
										href="#"
										className="block px-4 py-2 text-xs text-[#777] hover:bg-gray-50 hover:text-[#0088cc]">
										USD
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-xs text-[#777] hover:bg-gray-50 hover:text-[#0088cc]">
										EUR
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-xs text-[#777] hover:bg-gray-50 hover:text-[#0088cc]">
										GBP
									</a>
								</div>
							)}
						</div>
					</div>

					{/* Right: Mobile Menu Toggle + Desktop Nav */}
					<div className="flex items-center">
						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="lg:hidden text-white p-2 hover:bg-white/10 rounded-sm transition-colors mr-2"
							aria-label="Toggle menu">
							<i
								className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} text-lg`}></i>
						</button>

						{/* Desktop Navigation */}
						<ul className="hidden lg:flex items-center gap-6">
							<li>
								<a
									href="#"
									className="text-gray-300 font-bold text-[14px] uppercase hover:text-gray-200 transition-colors">
									WELCOME TO PROTO!
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 font-bold text-[14px] uppercase hover:text-gray-200 transition-colors">
									MY ACCOUNT
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 font-bold text-[14px] uppercase hover:text-gray-200 transition-colors">
									CONTACT US
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 font-bold text-[14px] uppercase hover:text-gray-200 transition-colors">
									MY WISHLIST
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 font-bold text-[14px] uppercase hover:text-gray-200 transition-colors">
									SITE MAP
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 font-bold text-[14px] uppercase hover:text-gray-200 transition-colors">
									CART
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-300 font-bold text-[14px] uppercase hover:text-gray-200 transition-colors border-r border-white/30 pr-6">
									LOG IN
								</a>
							</li>
						</ul>

						{/* Social Icons - Always visible on sm+, hidden on xs */}
						<div className="hidden sm:flex items-center gap-4 ml-6">
							<a
								href="#"
								className="text-gray-300 hover:text-gray-200 transition-colors">
								<i className="fa-brands fa-facebook-f text-sm"></i>
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-gray-200 transition-colors">
								<i className="fa-brands fa-twitter text-sm"></i>
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-gray-200 transition-colors">
								<i className="fa-brands fa-instagram text-sm"></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{isMenuOpen && (
				<div className="lg:hidden bg-[#0077b3] border-t border-white/20">
					<div className="wrapper px-4 py-4">
						<ul className="space-y-1">
							{[
								"WELCOME TO PROTO!",
								"MY ACCOUNT",
								"CONTACT US",
								"MY WISHLIST",
								"SITE MAP",
								"CART",
								"LOG IN",
							].map((item) => (
								<li key={item}>
									<a
										href="#"
										className="block text-gray-300 font-bold text-[13px] uppercase hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-sm transition-colors">
										{item}
									</a>
								</li>
							))}
						</ul>

						{/* Mobile Social Icons (xs only) */}
						<div className="flex sm:hidden items-center gap-6 mt-4 pt-4 border-t border-white/20 px-3">
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors">
								<i className="fa-brands fa-facebook-f text-lg"></i>
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors">
								<i className="fa-brands fa-twitter text-lg"></i>
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors">
								<i className="fa-brands fa-instagram text-lg"></i>
							</a>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
