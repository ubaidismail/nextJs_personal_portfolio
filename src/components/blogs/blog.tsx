import fs from 'fs'
import React from "react";
import matter from "gray-matter";
import { FaCalendar } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const dirContent = fs.readdirSync("all-blogs", "utf-8");
const blogs = dirContent.map(file => {
  const fileContent = fs.readFileSync(`all-blogs/${file}`, "utf-8");
  const data = matter(fileContent);
  return data;
});


function Blog() {
  return (
    <div className="container mx-auto px-4 mb-[100px]">
      <h2 className="pt-[10px] text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-dark dark:text-white font-sans tracking-tight">Storie
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">s</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">s</span>
          </div>
        </div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="transform transition duration-500 hover:-translate-y-2"

          >
            <div className="rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
              <div className="relative overflow-hidden">
                <img
                  src={blog.data.image || "default-image-path.jpg"}
                  alt={blog.data.title}
                  className="w-full h-48 object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center mr-4">
                  <FaCalendar />  <span className='ml-2'>{blog.data.date}</span>
                  </span>
                  <span className="flex items-center">
                  <FaPencil /> <span className='ml-2'>{blog.data.author}</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-gray-300">
                  {blog.data.title}
                </h3>
                <p className="mb-4 dark:text-gray-300">
                  {blog.data.excerpt || blog.data.description.slice(0, 150) + '...'}

                </p>
                <a
                  href={`/blog/${blog.data.slug}`}
                  className="inline-flex items-center dark:text-gray-300 hover:text-purple-700 transition duration-300"
                >
                  Read More <FaArrowRightLong className='ml-2' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;