import { section } from "framer-motion/client";
import HomeBanner from "@/components/homebanner/banner";
import About from "@/components/about/about";


export default function Home() {
  return (

    <section>
      <HomeBanner />


      <div className="about-section text-center">
        <div className="container mx-auto">
          <About />
        </div>
      </div>

    </section>


  );
}
