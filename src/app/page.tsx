
import HomeBanner from "@/components/homebanner/banner";
import About from "@/components/about/about";
import Services from "@/components/expertise/services-skill";
import Blog from "@/components/blogs/blog";


export default function Home() {
  
  return (

    <section>
      <HomeBanner  />

      <About />
      
      <Services />
      <Blog />
      
    </section>


  );
}
