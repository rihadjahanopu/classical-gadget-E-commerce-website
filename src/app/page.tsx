import BrandLogos from "@/components/BrandLogos";
import CustomerSupport from "@/components/CustomerSupport";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SearchNav from "@/components/SearchNav";
import ShippingBanner from "@/components/ShippingBanner";
import Sidebar from "@/components/Sidebar";
import TopHeader from "@/components/TopHeader";
import TopRatedProducts from "@/components/TopRatedProducts";

export default function Home() {
	return (
		<main className="min-h-screen">
			<TopHeader />

			<div className="wrapper px-4 lg:px-0">
				<SearchNav />
				<ShippingBanner />

				{/* Main Content Layout */}
				<div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
					{/* Sidebar - Full width on mobile, fixed width on desktop */}
					<aside className="shrink-0 w-full lg:w-[280px] xl:w-[300px] order-2 lg:order-1">
						<Sidebar />
					</aside>

					{/* Main Content Area */}
					<div className="flex-1 min-w-0 order-1 lg:order-2">
						<HeroSection />
						<FeaturedProducts />

						<hr className="border-[#ebe8e870] my-6 sm:my-8" />

						<BrandLogos />
						<TopRatedProducts />
						<CustomerSupport />
					</div>
				</div>
			</div>

			<Footer />
		</main>
	);
}
