import Image from "next/image";

const customerServiceLinks = [
	"Help & FAQs",
	"Order Tracking",
	"Shipping & Delivery",
	"Orders History",
	"Advanced Search",
	"My Account",
	"Careers",
	"About Us",
	"Privacy",
];

const popularTags = [
	"Bag",
	"Blue",
	"Black",
	"Clothes",
	"Fashion",
	"Hub",
	"Jean",
	"Shirt",
	"Sports",
	"Sweater",
	"Winter",
];

const socialLinks = [
	{ icon: "fa-brands fa-facebook-f", href: "#" },
	{ icon: "fa-brands fa-twitter", href: "#" },
	{ icon: "fa-brands fa-instagram", href: "#" },
];

export default function Footer() {
	return (
		<footer className="bg-[rgb(34,37,41)] pt-10 sm:pt-12 md:pt-[60px] mt-4 pb-0 relative">
			<div className="wrapper px-4 lg:px-0">
				{/* Main Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-10 md:pb-[50px]">
					{/* Brand Column */}
					<div className="sm:col-span-2 lg:col-span-1 pr-0 lg:pr-5">
						<Image
							src="/image/logooooo-09-07 115836.png"
							alt="Porto Logo"
							width={150}
							height={50}
							className="w-auto h-auto max-w-[120px] sm:max-w-[150px]"
						/>
						<div className="mt-3 sm:mt-[10px] text-[rgb(182,184,186)] mb-6 sm:mb-[30px] text-sm sm:text-[0.9rem] leading-relaxed sm:leading-[1.8]">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
								nec vestibulum magna, et dapibus lacus. Duis nec vestibulum
								magna, et dapibus lacus.
							</p>
						</div>
						<a
							href="#"
							className="font-bold text-gray-300/80 hover:text-[#0088cc] transition-colors text-sm">
							Read more
						</a>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-[rgb(237,235,235)] text-sm sm:text-[1rem] mb-3 sm:mb-[10px] uppercase font-bold tracking-wider">
							CONTACT INFO
						</h3>
						<div className="space-y-3 sm:space-y-2">
							{[
								{ label: "ADDRESS:", value: "123 Street Name, City, England" },
								{ label: "PHONE:", value: "(123) 456-7890" },
								{ label: "EMAIL:", value: "mail@example.com" },
								{
									label: "WORKING DAYS/HOURS:",
									value: "Mon - Sun / 9:00 AM - 8:00 PM",
								},
							].map((item) => (
								<div key={item.label}>
									<strong className="text-[rgb(223,222,222)] text-xs sm:text-[0.9rem] mb-1 sm:mb-[5px] block">
										{item.label}
									</strong>
									<p className="text-[rgb(182,184,186)] text-xs sm:text-[0.8rem]">
										{item.value}
									</p>
								</div>
							))}
						</div>

						{/* Social Icons */}
						<div className="flex gap-2 mt-4 sm:mt-6">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									className="w-8 h-8 sm:w-[30px] sm:h-[30px] rounded-full flex items-center justify-center text-white hover:bg-[#0088cc] bg-transparent border border-[rgb(52,56,62)] transition-colors">
									<i className={`${social.icon} text-xs sm:text-sm`}></i>
								</a>
							))}
						</div>
					</div>

					{/* Customer Service */}
					<div>
						<h3 className="text-[rgb(237,235,235)] text-sm sm:text-[1rem] mb-3 sm:mb-4 uppercase font-bold tracking-wider">
							CUSTOMER SERVICE
						</h3>
						<div className="flex flex-col space-y-2 sm:space-y-2">
							{customerServiceLinks.map((link) => (
								<a
									key={link}
									href="#"
									className="text-[rgb(182,184,186)] text-xs sm:text-[0.8rem] hover:underline hover:text-white transition-colors py-1 sm:py-0">
									{link}
								</a>
							))}
						</div>
					</div>

					{/* Popular Tags */}
					<div>
						<h3 className="text-[rgb(237,235,235)] text-sm sm:text-[1rem] mb-3 sm:mb-4 uppercase font-bold tracking-wider">
							POPULAR TAGS
						</h3>
						<div className="flex flex-wrap gap-2">
							{popularTags.map((tag) => (
								<a
									key={tag}
									href="#"
									className="py-1 px-2.5 bg-[#2e3237] border border-[#444] rounded-sm text-[10px] text-white hover:bg-[#0088cc] hover:border-[#0088cc] transition-all duration-300 uppercase font-bold">
									{tag}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Divider */}
				<hr className="border-[rgba(235,232,232,0.1)] my-2" />

				{/* Bottom Bar */}
				<div className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-5 gap-3 sm:gap-0">
					<p className="text-xs sm:text-[0.8rem] text-[#807d7d] text-center sm:text-left">
						© Porto eCommerce. 2021. All Rights Reserved
					</p>
					<div className="shrink-0">
						<Image
							src="/image/Screenshot pay2022-09-07 131840.png"
							alt="Payment Options"
							width={200}
							height={30}
							className="w-auto h-auto max-w-[180px] sm:max-w-[200px]"
						/>
					</div>
				</div>

				{/* Get In Touch Badge - Hidden on mobile, adjusted for tablet */}
				<div className="hidden lg:block bg-[#0088cc] w-[150px] absolute top-[-20px] left-[350px] text-center z-10 rounded-tr-[5px] before:content-[''] before:absolute before:top-0 before:-left-[10px] before:border-t-[20px] before:border-t-transparent before:border-r-[10px] before:border-r-[#005580]">
					<span className="text-[1.4rem] font-['Shadows_Into_Light',sans-serif] text-white py-1 px-4 block">
						Get In Touch
					</span>
				</div>
			</div>
		</footer>
	);
}
