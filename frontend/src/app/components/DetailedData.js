import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import './../globals.css';

const DetailedData = (props) => {
    const router = useRouter();
    const { user, status } = router.query;

    const [displayFlag, setDisplayFlag] = useState(false);
    const [singleItem, setsingleItem] = useState(null);
    const [singlejob, setSinglejob] = useState(null);
    const [option1, setoption1] = useState("");
    const [option2, setoption2] = useState("");

    useEffect(() => {
        setDisplayFlag(props.display);
        setsingleItem(props.singleItem);
        setoption1(props.option1);
        setoption2(props.option2);
        setSinglejob(props.singlejob);
    }, [props.display, props.singleItem, props.option1, props.option2, props.singlejob]);

    const saveInterview = async () => {
        const job = null;
        const interviews = [];
        for (singleItem.interviews in job) {
            interviews.push(job);
        }
        interviews.push(singlejob);
        const user = singleItem._id;


        try {
            console.log("Inside saveInterview");
            const data = {
                user,
                interviews
            };

            const response = await fetch('http://localhost:8080/saveInterview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to save data');
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const deleteInterview = async () => {
        if (status === "CSO") {

            try {
                console.log("Inside try of delete Interview");

                const response = await fetch('http://localhost:8080/deleteUser', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(singleItem),
                });

                if (!response.ok) {
                    throw new Error('Failed to delete data');
                }
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error('Error:', error);
            }

            setDisplayFlag(false);
        } else {
            console.log("Application removes");
        }
    }
    return (
        <>
            {/* <div id="alert-1" className="flex w-2/4 items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 absolute al-Data" style={{ display: displayFlag ? 'block' : 'none' }}  role="alert">
                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div className="ms-3 text-sm font-medium">
                    User Deleted
                </div>
                <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div> */}


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
                    <button className="bg-blue-500 text-white border-rounded px-8 py-2 text-sm float-start" onClick={saveInterview}>{option1}</button>
                    <button className="bg-red-600 text-white border-rounded px-8 py-2 text-sm float-end" onClick={deleteInterview}>{option2}</button>
                </div>
            </div>
        </>
    );
};

export default DetailedData;

