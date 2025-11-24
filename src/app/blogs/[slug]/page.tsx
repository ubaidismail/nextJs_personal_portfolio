import ShareButton from '@/components/blogShareButton/btn';
import matter from "gray-matter";
import { notFound } from 'next/navigation';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { FaClock } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";

export default async function Page({
    params,
}: {
    params: { slug: string; };
}) {
    const { slug } = params;
    const fileUrl = `https://ubaidismail.com/all-blogs/${slug}.md`; // Replace with your actual URL

    const response = await fetch(fileUrl);
    if (!response.ok) {
        notFound();
    }

    const fileContent = await response.text();
    const { content, data } = matter(fileContent);
    
    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify);

    const htmlContent = (await processor.process(content)).toString();

    return (
        <article className="max-w-3xl mx-auto px-4 py-8 pt-[150px]">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-white-100 mb-4">
                    {data.title}
                </h1>
                <div className="flex items-center text-gray-400 text-sm">
                    <time className="mr-4 flex items-center"> <FaClock /> <span className='ml-2'>{data.date}</span></time>
                    <span className="mr-4">-</span>
                    <span className='flex items-center'><FaBookOpen /> <span className='ml-2'>{data.reading_time}</span></span>
                </div>
            </header>

            <div className="dakr:prose dark:prose-lg max-w-none">
                <img
                    src={data.image}
                    alt="Blog cover"
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                />

                <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='dark:text-white text-black'></div>
            </div>

            <footer className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div>
                            <h3 className="font-medium dark:text-gray-300">Author: {data.author}</h3>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <ShareButton />
                    </div>
                </div>
            </footer>
        </article>
    );
}
