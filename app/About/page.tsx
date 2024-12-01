'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from next/image
import { BsArrowUpRight } from 'react-icons/bs';

type Props = {};

const Projects = (props: Props) => {
    const [selectedId, setSelectedId] = useState<boolean>(false);

    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold'>About</h1>
            <p className='pt-6 text-neutral-300'>
                Over the time, I have gained experience in designing and developing a variety of websites, ranging from simple one-page landing pages to complex multi-page applications. Here are the projects that I would like to present to you, showcasing my work and achievements in the field of web design and development.
            </p>
            
            <div className='mt-20 md:w-9/12 mx-auto'>
                <Image className='rounded-xl opacity-90' src="/Capture.JPG" alt="WebDoor Website" width={600} height={400} /> {/* Add width and height props */}
                <div className='my-10 sm:w-10/12 mx-auto'>
                    <h1 className='text-2xl font-bold mb-4'>React: WebDoor Website</h1>
                    <div className='text-neutral-300'>
                        A news website using the React framework, which continuously provides the services that have been offered on the website.
                        <div className='mt-6 inline-block'>
                            <a href="https://webdoor-websitetcss-hihw.vercel.app/" className='flex items-center px-4 py-1 border-[0.5px] border-slate-500 rounded-3xl bg-neutral-800 hover:bg-neutral-700'>
                                Explore <BsArrowUpRight size={14} className='ml-2' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;