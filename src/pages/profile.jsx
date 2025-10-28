import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import bg from '/img/slider/2.webp';
const galleryImages = [
  "/img/gallery/l1.webp",
  "/img/gallery/l2.webp",
  "/img/gallery/l3.webp",
  "/img/gallery/l4.webp",
  "/img/gallery/l5.webp",
  "/img/gallery/l6.webp",
]

export function Profile() {
  return (
    <>
      <section className="relative block h-[80vh] overflow-hidden">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/slider/1.webp')] bg-cover bg-center scale-105 transform hover:scale-110 transition-transform duration-3000" />
        <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/70 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 text-center text-white pb-20">
          <Typography variant="h1" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to CarzSpa
          </Typography>
          <Typography variant="lead" className="text-gray-200 pb-16">
            Your Premium Automotive Care Destination
          </Typography>
        </div>
      </section>
      <section className="relative bg-gray-600 py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words">
          <div className="container mx-auto">
            <div className="rounded-xl bg-gray-300 p-6 shadow-lg ring-1 ring-yellow-800">
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="relative flex gap-8 items-start">
                  <div className="-mt-20 w-44">
                    <Avatar
                      src="/img/itachi.jpeg"
                      alt="Profile picture"
                      variant="circular"
                      className="h-44 w-44 ring-4 ring-yellow-800 shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <Typography variant="h3" className="text-gray-900 font-bold">
                      CarzSpa
                    </Typography>
                    <Typography variant="lead" className="text-black">carzspa@mail.com</Typography>
                    <div className="flex gap-4 mt-4">
                      <Button variant="outlined" size="sm" className="rounded-full flex items-center gap-2">
                        <i className="fas fa-envelope text-sm"></i>
                        Contact
                      </Button>
                      <Button variant="gradient" size="sm" className="rounded-full flex items-center gap-2">
                        <i className="fas fa-calendar text-sm"></i>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>

              <div className="lg:ml-auto flex flex-col items-end justify-center gap-6">
                <div className="grid grid-cols-3 gap-8 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center transform hover:scale-105 transition-transform">
                    <Typography
                      variant="h4"
                      className="font-bold primary-color"
                    >
                      2M+
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-medium text-gray-600"
                    >
                      Happy Customers
                    </Typography>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-transform">
                    <Typography
                      variant="h4"
                      className="font-bold primary-color"
                    >
                      10+
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-medium text-gray-600"
                    >
                      Franchises
                    </Typography>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-transform">
                    <Typography
                      variant="h4"
                      className="font-bold primary-color"
                    >
                      20+
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-medium text-gray-600"
                    >
                      Trusted Brands
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-500/20 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 primary-bg rounded-lg">
                    <MapPinIcon className="h-6 w-6 text-black" />
                  </div>
                  <Typography variant="h6" className="font-semibold text-gray-900">
                    Location
                  </Typography>
                </div>
                <Typography className="text-gray-600">
                  123 Street, City, Country
                </Typography>
              </div>
              <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-500/20 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 primary-bg rounded-lg">
                    <BriefcaseIcon className="h-6 w-6 text-black" />
                  </div>
                  <Typography variant="h6" className="font-semibold text-gray-900">
                    Services
                  </Typography>
                </div>
                <Typography className="text-gray-600">
                  Automotive Care Services Provider
                </Typography>
              </div>
              <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-500/20 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 primary-bg rounded-lg">
                    <BuildingLibraryIcon className="h-6 w-6 text-black" />
                  </div>
                  <Typography variant="h6" className="font-semibold text-gray-900">
                    Experience
                  </Typography>
                </div>
                <Typography className="text-gray-600">
                  Established 2010
                </Typography>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Typography variant="h4" color="blue-gray" className="font-bold mb-4">
                  About CarzSpa
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  CarzSpa is a premier automotive care service provider dedicated to delivering top-notch car detailing, ceramic coating, and maintenance services. With over a decade of experience, we pride ourselves on our commitment to quality, customer satisfaction, and environmental responsibility.
                </Typography>
                <Typography className="text-gray-700 leading-relaxed">
                  Our team of skilled professionals utilizes the latest techniques and eco-friendly products to ensure your vehicle looks its best while minimizing our ecological footprint. Whether you're looking to protect your car's paint with our advanced ceramic coatings or seeking a thorough interior and exterior detailing, CarzSpa is your trusted partner in automotive care.
                </Typography>
                <div className="pt-4">
                  <Button variant="gradient" className="flex items-center gap-2">
                    Learn More <i className="fas fa-arrow-right text-sm"></i>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform rotate-6 rounded-2xl opacity-20"></div>
                <img 
                  src={bg} 
                  alt="CarzSpa Service"
                  className="relative rounded-2xl w-full h-[400px] object-cover shadow-xl hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
            <div className="mt-20">
              <Typography variant="h4" color="blue-gray" className="font-bold mb-8 text-center">
                Our Recent Work
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((item, i) => (
                  <div key={item} className="group relative overflow-hidden rounded-xl">
                    <img
                      src={`${item}`}
                      alt={`Gallery item ${item}`}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <Typography variant="h6" className="text-white font-bold">
                          Work {i+1}
                        </Typography>
                        <Typography className="text-gray-200 text-sm font-semibold">
                          CarzSpa Vehicle Detailing
                        </Typography>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button variant="outlined" size="lg" className="rounded-full">
                  View All Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default Profile;
