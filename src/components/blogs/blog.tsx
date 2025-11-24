import { getBlogs } from "@/lib/strapi";
import Image from "next/image";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default async function BlogsPage() {
  const blogs = await getBlogs();


const getPlainText = (richText:any ) => {
  if (!richText) return '';
  return richText
    .flatMap((block:any) => block.children || [])
    .map((child:any) => child.text || '')
    .join(' ')
    .substring(0, 150) + '...';
};
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Latest Blogs</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {console.log(blogs)}
        {
          blogs.map(
            (blog: any) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
               
                <div className="p-4">
                  
                  <h2 className="text-xl font-bold mb-2">{blog.blog_title}</h2>
                  <p>{getPlainText(blog.blog_content)}</p>
                  </div>
              </div>
            )
          )
        }

      </div>
    </div>
  );
}
