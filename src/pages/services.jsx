import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Footer, PageTitle } from "@/widgets/layout";
import {
  WrenchScrewdriverIcon,
  SparklesIcon,
  ShieldCheckIcon,
  PaintBrushIcon,
  CogIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";
import bg from '/img/slider/1.jpg'

const services = [
  {
    title: "Car Detailing",
    description: "Professional interior and exterior detailing service using premium products for a showroom-worthy finish.",
    icon: SparklesIcon,
    price: "From $199",
    features: ["Deep cleaning", "Paint correction", "Interior sanitization", "Trim restoration"],
    image: "/img/gallery/l1.webp"
  },
  {
    title: "Ceramic Coating",
    description: "Long-lasting ceramic protection that enhances your vehicle's paint and provides superior vehicle protection.",
    icon: ShieldCheckIcon,
    price: "From $899",
    features: ["9H hardness coating", "Hydrophobic effect", "UV protection", "5-year warranty"],
    image: "/img/gallery/l2.webp"
  },
  {
    title: "Paint Protection Film",
    description: "Premium PPF installation to protect your vehicle from rock chips, scratches, and environmental damage.",
    icon: PaintBrushIcon,
    price: "From $1499",
    features: ["Self-healing film", "Impact protection", "Custom patterns", "10-year warranty"],
    image: "/img/gallery/l3.webp"
  },
  {
    title: "Wheel Restoration",
    description: "Complete wheel restoration service including straightening, refinishing, and custom coating.",
    icon: CogIcon,
    price: "From $299/wheel",
    features: ["Crack repair", "Custom finishes", "Diamond cutting", "Protective coating"],
    image: "/img/gallery/l4.webp"
  },
  {
    title: "Maintenance Service",
    description: "Regular maintenance packages to keep your vehicle in pristine condition year-round.",
    icon: WrenchScrewdriverIcon,
    price: "From $149/month",
    features: ["Weekly washing", "Monthly detailing", "Quarterly coating maintenance", "Paint touch-ups"],
    image: "/img/gallery/l5.webp"
  },
  {
    title: "Vinyl Wraps",
    description: "Custom vinyl wrap installations for color changes, commercial branding, or protection.",
    icon: SwatchIcon,
    price: "From $2999",
    features: ["Premium materials", "Custom designs", "Color changes", "Commercial wraps"],
    image: "/img/gallery/l6.webp"
  }
];

export function Services() {
  const [hoveredService, setHoveredService] = React.useState(null);

  return (
        
    <>
      <div className="relative flex h-[80vh] content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/slider/1.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/70 to-black/50" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 py-8 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                Our Services
              </Typography>
              <Typography variant="lead" color="white" className="opacity-90">
                Experience premium automotive care with our comprehensive range of professional services.
                From detailed cleaning to long-lasting protection, we've got your vehicle covered.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-gray-500 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      transform: hoveredService === index ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
                  <div className="absolute top-4 right-4 p-4 primary-bg rounded-full">
                    {React.createElement(service.icon, {
                      className: "w-6 h-6 text-black",
                    })}
                  </div>
                </div>
                <CardBody className="relative p-6">
                  <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                    {service.title}
                  </Typography>
                  <Typography className="mb-6 font-normal text-blue-gray-500">
                    {service.description}
                  </Typography>
                  <div className="mb-6">
                    <ul className="list-disc list-inside space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <Typography variant="h6" color="blue-gray" className="font-bold">
                      {service.price}
                    </Typography>
                    <Button 
                      size="sm" 
                      variant="outlined-"
                      className="flex items-center gap-2"
                    >
                      Book Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <Typography variant="h2" className="text-3xl font-bold mb-4">
                Why Choose Our Services?
              </Typography>
              <Typography className="text-lg font-normal text-blue-gray-500">
                We combine expertise, premium products, and attention to detail to deliver exceptional results.
              </Typography>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-4/12 px-4 text-center mb-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full primary-bg text-white mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-black" />
              </div>
              <Typography variant="h3" className="text-2xl font-bold mb-3">
                Quality Guaranteed
              </Typography>
              <Typography className="text-blue-gray-500">
                We stand behind our work with comprehensive warranties and satisfaction guarantees.
              </Typography>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center mb-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full primary-bg text-white mb-6">
                <WrenchScrewdriverIcon className="w-8 h-8 text-black" />
              </div>
              <Typography variant="h3" className="text-2xl font-bold mb-3">
                Expert Technicians
              </Typography>
              <Typography className="text-blue-gray-500">
                Our certified professionals have years of experience and continuous training.
              </Typography>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center mb-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full primary-bg text-white mb-6">
                <SparklesIcon className="w-8 h-8 text-black" />
              </div>
              <Typography variant="h3" className="text-2xl font-bold mb-3">
                Premium Products
              </Typography>
              <Typography className="text-blue-gray-500">
                We use only the highest quality products and materials for lasting results.
              </Typography>
            </div>
          </div>
        </div>
      </section>

            <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Services;
