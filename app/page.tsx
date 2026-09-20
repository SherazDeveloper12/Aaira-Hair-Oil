import { Banknote, Sprout, Star, Truck } from "lucide-react";
import Image from "next/image";
import ProductShowCase from "./components/ProductShowCase/ProductShowCase";
import HeroSection from "./components/HeroSection/HeroSection";
import Benefits from "./components/Benefits/Benefits";
import About from "./components/About/About";



export default function Home() {

  return (
    <div>
      <HeroSection />
      <InfoBoxes />
      <Benefits />
      <ProductShowCase />
      <About />
    </div>
  );
}






function InfoBoxes() {
  const Data = [
    {
      icon: <Banknote strokeWidth={0.75} className="text-primary/90 size-20 onhover:translate-y-4 transition-all duration-300 ease-in-out cursor-pointer" />,
      title: "Cash on Delivery",
      description: "Easy & Safe",
    },
    {
      icon: <Truck strokeWidth={0.75} className="text-primary/90 size-20  " />,
      title: "Free Shipping",
      description: "All over Pakistan",
    },
    {
      icon: <Star strokeWidth={0.75} className="text-primary/90 size-20  " />,
      title: "100K+ Satisfied Customers",
      description: "4.9/5 Average Rating",
    },
    {
      icon: <Sprout strokeWidth={0.75} className="text-primary/90 size-20  " />,
      title: "100% Natural",
      description: "No Harmful Chemicals",
    }
  ]
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x-8 divide-black  py-10 px-4 md:px-20 bg-secondary/40 ">
      {Data.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center border-r border-secondary/50 ">
       <span className="onhover:translate-x-4 transition-all duration-300 ease-in-out cursor-pointer"> {item.icon}</span>
          <h3 className="font-bold tracking-wider">{item.title}</h3>
          <p className=" text-textColor text-sm font-light">{item.description}</p>
        </div>
      ))}
    
    </section>
  )
}