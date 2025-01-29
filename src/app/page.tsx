
import HomeBanner from "@/components/homebanner/banner";
import About from "@/components/about/about";
import Services from "@/components/expertise/services-skill";
import BlogHomePage from "@/components/blogHome/blogHome";


export default function Home() {
  
  return (

    <section>
      <HomeBanner  />

      <About />
      
      <Services />
        
      <BlogHomePage />
      
    </section>


  );
}
