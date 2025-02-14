
import HomeBanner from "@/components/homebanner/banner";
import About from "@/components/about/about";
import Services from "@/components/expertise/services-skill";
import BlogHomePage from "@/components/blogHome/blogHome";
import aboutImg from '../../../public/images/about-layer.png'
import aboutImg2 from '../../public/images/endless-constellation.png'

export default function Home() {
  
  return (

    <section style={{backgroundImage: `url(${aboutImg2.src})`, backgroundSize:'contain', backgroundRepeat:'repeatY'}}>
      <HomeBanner  />

      <About />
      
      <Services />
        
      <BlogHomePage />
      
    </section>


  );
}
