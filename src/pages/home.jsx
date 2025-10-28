import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FaCar, FaLaptopCode } from 'react-icons/fa6'
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard, TestimonialCard } from "@/widgets/cards";
import { featuresData, teamData, contactData, testimonialsData } from "@/data";

const imagesBG = [
  "/img/slider/1.jpg",
  "/img/slider/2.jpg",
  "/img/slider/3.jpg",
  "/img/slider/4.jpg",
];
const imagesAbout = [
  "img/gallery/l1.webp",
  "img/gallery/l2.webp",
  "img/gallery/l3.webp",
  "img/gallery/l4.webp",
  "img/gallery/l5.webp",
  "img/gallery/l6.webp",
  "img/gallery/l7.webp",
  "img/gallery/l8.webp",
  "img/gallery/l9.webp",
]

// Helper: pick a random index (used to initialize)
function randomIndex(max) {
  return Math.floor(Math.random() * Math.max(1, max));
}
// Helper: pick a random index (used in interval)
function randomAboutIndex(max) {
  return Math.floor(Math.random() * Math.max(1, max));
}

export function Home() {
  const [bgIndex, setBgIndex] = useState(() => randomIndex(imagesBG.length));
  const [bgAboutIndex, setBgAboutIndex] = useState(() => randomAboutIndex(imagesAbout.length));

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((prev) => {
        if (imagesBG.length <= 1) return 0;
        let next = Math.floor(Math.random() * imagesBG.length);
        // ensure next is different from prev when possible
        let attempts = 0;
        while (next === prev && attempts < 5) {
          next = Math.floor(Math.random() * imagesBG.length);
          attempts += 1;
        }
        return next;
      });
    }, 2000); // 2 seconds

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setBgAboutIndex((prev) => {
        if (imagesAbout.length <= 1) return 0;
        let next = Math.floor(Math.random() * imagesAbout.length);
        // ensure next is different from prev when possible
        let attempts = 0;
        while (next === prev && attempts < 10) {
          next = Math.floor(Math.random() * imagesAbout.length);
          attempts += 1;
        }
        return next;
      });
    }, 1000); // 2 seconds

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div
          className="absolute top-0 h-full w-full bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${imagesBG[bgIndex]})` }}
        />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Where Passion meets <span className="primary-color">Perfection</span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {/* This features */}
      <section className="-mt-32 bg-black px-4 pb-20 pt-4 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-black",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-24 flex flex-wrap items-center  ">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full primary-bg p-2 text-center shadow-lg">
                <FaCar className="h-8 w-8 text-black " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold primary-color"
              >
                We Detail your Vehicle with Excellence
              </Typography>
              <Typography className="mb-8 font-normal text-white">
                At CarzSpa, we are passionate about keeping your car looking its absolute best. With years of experience in professional car detailing, we combine expert knowledge, high-quality products, and meticulous attention to detail to bring out the true shine in every vehicle.
                <br />
                <br />
                Our mission is simple: to provide exceptional care for your car, inside and out. From thorough interior cleaning to exterior polishing and protective coatings, we treat every car as if it were our own.
                <br />
                At CarzSpa, it’s more than just cleaning—it’s a complete detailing experience. Let us help you maintain your car’s beauty and performance, one detail at a time.
              </Typography>
              <Button variant="filled" className="primary-bg text-black">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src={imagesAbout[bgAboutIndex]}
                    className="h-full w-full hover:scale-110 transition-transform object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">CarzSpa Detailing</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Detailing, Cleaning, Polishing, Protection
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="px-4 pt-12 pb-12 bg-gray-900">
        <div className="container mx-auto primary-color">
          <PageTitle section="Our Services" heading="Make Your car detail today!!!">
            Experience the ultimate in car care with our comprehensive detailing services. From meticulous interior cleaning to expert exterior polishing, we bring out the best in your vehicle.
          </PageTitle>
          <div className="mt-16 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4 primary-color">
            {teamData.map(({ img, name}) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
              />
            ))}
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className="relative bg-black py-10 px-4">
        <div className="container mx-auto primary-color">
          <PageTitle section="Testimonials" heading="What our clients say">
            
          </PageTitle>
          <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.slice(2,5).map(({ id, content, name, position, image}) => (
              <TestimonialCard
                key={id}
                content={content}
                name={name}
                position={position}
                image={image}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Co Working section here */}
      <section className="relative bg-gray-900 py-12 px-4">
        <div className="container mx-auto primary-color">
          <PageTitle section="Lets Modify Your Vehicle" heading="Let's Build Something Great Together">
            Whether you're looking to enhance your car's performance, upgrade its aesthetics, or add custom features, our expert team is here to bring your vision to life. Let's collaborate to create a vehicle that truly reflects your style and meets your needs.
          </PageTitle>
          <div className="mx-auto mt-20  grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full primary-bg shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-black",
                  })}
                </div>
                <Typography variant="h5" color="yellow" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-white">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-black container-fluid px-4 py-12">
        <PageTitle section="Contact Us" heading="Want to work with us?">
          Complete this form and we will get back to you in 24 hours.
        </PageTitle>
        <form className="mx-auto w-full mt-12 lg:w-5/12">
          <div className="mb-8 flex gap-8">
            <Input variant="outlined" size="lg" label="Full Name" />
            <Input variant="outlined" size="lg" label="Email Address" />
          </div>
          <Textarea variant="outlined" size="lg" label="Message" rows={8} />
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button variant="gradient" size="lg" className="mt-8" fullWidth>
            Send Message
          </Button>
        </form>
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
