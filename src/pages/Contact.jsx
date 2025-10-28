import React from "react";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { Footer, PageTitle } from "@/widgets/layout";
import { contactData } from "@/data";
import Api from "./Api";

export function Contact() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    message: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'agreeToTerms' ? checked : value
    }));
  };

  return (
    <>
      <div className="relative flex h-[480px] content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/slider/1.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="pt-60 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                Contact Us
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Get in touch with us and let us know how we can help.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-800 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-white px-6 py-8 rounded-lg shadow-lg border border-blue-gray-50"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full primary-bg shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-black",
                  })}
                </div>
                <Typography variant="h5" color="white" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-200">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center">
            <div className="mx-auto w-full px-4 lg:w-8/12">
              <PageTitle heading="Send us a message">
                Complete this form and we will get back to you within 24 hours.
              </PageTitle>
              <form className="mx-auto mt-12 max-w-3xl" onSubmit={handleSubmit}>
                <div className="mb-8 flex flex-col gap-8 lg:flex-row">
                  <Input
                    variant="outlined"
                    size="lg"
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="lg:w-2/2"
                  />
                  <Input
                    variant="outlined"
                    size="lg"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="lg:w-2/2"
                  />
                </div>
                <Textarea
                  variant="outlined"
                  size="lg"
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  required
                />
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      I agree to the
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900 ml-1"
                      >
                        Terms and Conditions
                      </a>
                    </Typography>
                  }
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  containerProps={{ className: "mt-6 -ml-2.5" }}
                  required
                />
                <Button variant="gradient" size="lg" className="mt-8" type="submit" fullWidth>
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
