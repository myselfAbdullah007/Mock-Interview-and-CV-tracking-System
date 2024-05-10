import Image from 'next/image';
import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import './../globals.css';

const DetailedData = (props) => {
    const [displayFlag, setDisplayFlag] = useState(false);
    const [singleItem, setsingleItem] = useState(null);


    useEffect(() => {
        setDisplayFlag(props.display);
        setsingleItem(props.singleItem)
    }, [props.display, props.singleItem]);

    return (
        <div className="w-1/2 mx-auto bg-white px-10 py-5 border border-slate-300 rounded-md shadow-[0px_0px_60px_-15px_rgba(0,0,0,0.3)] absolute de-Data space-y-4 text-sm" style={{ display: displayFlag ? 'block' : 'none' }}>
            <div className="text-center text-2xl">User Resume</div>
            <div className='grid grid-cols-4 w-3/4 mb-4'>
                <Image className='rounded-full w-full' src='/myself.png' alt='Profile pic' width={500} height={500} />
                <div className='my-auto col-span-3 ps-5'>
                    <div className='font-bold text-4xl'>{singleItem ? singleItem.f_name : 'No data'}</div>
                    <div className='w-full'>Your discription (A passionate Software Engineer)</div>
                </div>
            </div>

            <hr />
            <div className='grid grid-cols-4 px-auto'>
                <div className='font-light text-center'>{singleItem ? singleItem.email : 'No data'}</div>
                {/* <div className='font-light text-center'>{singleItem ? singleItem.contact : 'No data' }</div>
                    <div className='font-light text-center'>{singleItem ? singleItem.linkedin : 'No data' }</div>
                    <div className='font-light text-center'>{singleItem ? singleItem.github : 'No data' }</div> */}
            </div>
            <hr />

            <div className='grid grid-cols-2 mt-10'>
                <div>
                    <section>
                        <div className='text-2xl font-bold mb-5'>Work Experience</div>
                        <div className='space-y-2'>
                            <div>{singleItem ? singleItem.work[0] : ''}</div>
                            <div>{singleItem ? singleItem.work[1] : ''}</div>
                            <div>{singleItem ? singleItem.work[2] : ''}</div>
                        </div>
                    </section>

                    <section>
                        <div className='text-2xl font-bold mb-5 mt-8'>Education</div>
                        <div className='space-y-2'>
                            <div>{singleItem ? singleItem.education[0] : ''}</div>
                            <div>{singleItem ? singleItem.education[1] : ''}</div>
                            <div>{singleItem ? singleItem.education[2] : ''}</div>
                        </div>
                    </section>

                    <section>
                        <div className='text-2xl font-bold mb-5'>Interests</div>
                        <div className='space-y-2'>
                            <div>{singleItem ? singleItem.interests[0] : ''}</div>
                            <div>{singleItem ? singleItem.interests[1] : ''}</div>
                            <div>{singleItem ? singleItem.interests[2] : ''}</div>
                            <div>{singleItem ? singleItem.interests[3] : ''}</div>
                            <div>{singleItem ? singleItem.interests[4] : ''}</div>
                            <div>{singleItem ? singleItem.interests[6] : ''}</div>
                        </div>
                    </section>
                </div>
                <div>
                    <section>
                        <div className='text-2xl font-bold mb-5'>Skills</div>
                        <div className='space-y-2'>
                            <div>{singleItem ? singleItem.skills[0] : ''}</div>
                            <div>{singleItem ? singleItem.skills[1] : ''}</div>
                            <div>{singleItem ? singleItem.skills[2] : ''}</div>
                            <div>{singleItem ? singleItem.skills[3] : ''}</div>
                            <div>{singleItem ? singleItem.skills[4] : ''}</div>
                            <div>{singleItem ? singleItem.skills[6] : ''}</div>
                        </div>
                    </section>
                    <section>
                        <div className='text-2xl font-bold mb-5 mt-8'>Personal Projects</div>
                        <div className='space-y-2'>
                            <div>{singleItem ? singleItem.projects[0] : ''}</div>
                            <div>{singleItem ? singleItem.projects[1] : ''}</div>
                            <div>{singleItem ? singleItem.projects[2] : ''}</div>
                        </div>
                    </section>
                    <section>
                        <div className='text-2xl font-bold mb-5 mt-8'>Achievements</div>
                        <div className='space-y-2'>
                            <div>{singleItem ? singleItem.projects[0] : ''}</div>
                            <div>{singleItem ? singleItem.projects[1] : ''}</div>
                            <div>{singleItem ? singleItem.projects[2] : ''}</div>
                        </div>
                    </section>
                    <section>
                        <div className='text-2xl font-bold mb-5'>Languages</div>
                        <div className='space-y-2'>
                            <div>{singleItem ? singleItem.languages[0] : ''}</div>
                            <div>{singleItem ? singleItem.languages[1] : ''}</div>
                            <div>{singleItem ? singleItem.languages[2] : ''}</div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="pt-3">
                <button className="bg-blue-500 text-white border-rounded px-8 py-2 text-sm float-start">Schedule Interview</button>
                <button className="bg-red-600 text-white border-rounded px-8 py-2 text-sm float-end">Decline</button>
            </div>
        </div>
    );
};

export default DetailedData;
