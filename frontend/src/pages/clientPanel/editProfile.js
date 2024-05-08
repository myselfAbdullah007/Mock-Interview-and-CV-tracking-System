'use client'
import React from 'react'
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../../app/components/Navbar';
import Heading from '../../app/components/Heading';

export default function editProfile() {
    const router = useRouter();
    const { user } = router.query;

    const [items, setitems] = useState([]);

    const [dis, setdis] = useState("");
    const [contact, setcontact] = useState("");
    const [linkedin, setlinkedin] = useState("");
    const [github, setgithub] = useState("");


    const [work, setwork] = useState([]);
    const [skills, setskills] = useState([]);
    const [education, seteducation] = useState([]);
    const [projects, setprojects] = useState([]);
    const [achievements, setachievements] = useState([]);
    const [languages, setlanguages] = useState([]);
    const [interets, setinterets] = useState([]);


    useEffect(() => {
        console.log(user);
        GetTodos();
    }, [user]);
    const GetTodos = async () => {
        try {
            const response = await fetch(`http://localhost:8080/${user}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setitems(data);
            console.log(data);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const handleDisInputChange = (e) => {
        setdis(e);
    }
    const handleContactInputChange = (e) => {
        setcontact(e);
    }
    const handleLinkedinInputChange = (e) => {
        setlinkedin(e);
    }
    const handleGithubInputChange = (e) => {
        setgithub(e);
    }


    const handleInputChange = (e, setState) => {
        const { name, value } = e.target;
        setState((prevData) => [...prevData, { [name]: value }]);
    };

    const handleSave = async () => {
        try {
            console.log("Inside handlesave");
            const data = {
                user,
                work,
                skills,
                education,
                projects,
                achievements,
                languages,
                interets
            };

            const response = await fetch('http://localhost:8080/saveProfile', {
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
            console.log(result); // Handle success message or response as needed
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
      <Navbar home={"Home"} location1={"/clientPanel/userPanel"} meeting={"Interviews"} location2={"#"} menu4={"Edit profile(change krna he)"} location4={`/clientPanel/editProfile?user=${user}`}/>
            <div className='mt-28 mb-10'>
                <Heading name={"Edit your resume"} />
            </div>
            <section className='w-3/5 mx-auto border border-gray-400 container px-5 rounded-lg py-5 mb-8'>
                <div className='grid grid-cols-3 w-3/4 mb-4'><Image className='rounded-full w-full' src='/myself.png' alt='Profile pic' width={500} height={500} />
                    <div className='my-auto col-span-2 ps-5'>
                        <div className='font-bold text-4xl'>{items.f_name}</div>
                        <input type='text' className='w-full' placeholder='Your discription (A passionate Software Engineer)' onChange={handleDisInputChange}/>
                    </div>
                </div>
                <hr />
                <div className='grid grid-cols-4'>
                    <div className='font-light'>{items.email}</div>
                    <input type='tel' className='w-full' placeholder='Contact number' onBlur={handleContactInputChange}/>
                    <input type='text' className='w-full' placeholder='Linkedin profile Name' onBlur={handleLinkedinInputChange}/>
                    <input type='text' className='w-full' placeholder='Github profile Name' onBlur={handleGithubInputChange}/>
                </div>
                <hr />
                <div className='grid grid-cols-2 mt-10'>
                    <div>
                        <section>
                            <div className='text-2xl font-extrabold mb-5'>Work Experience</div>
                            <div className='space-y-2'>
                                <input type='text' className='w-full' placeholder={items.work?'Work Experience 1':items.work} onChange={(e) => handleInputChange(e, setwork)}/>
                                <input type='text' className='w-full' placeholder='Work Experience 2' onChange={(e) => handleInputChange(e, setwork)}/>
                                <input type='text' className='w-full' placeholder='Work Experience 3' onChange={(e) => handleInputChange(e, setwork)}/>
                            </div>
                        </section>
                        <section>
                            <div className='text-2xl font-extrabold mb-5 mt-8'>Education</div>
                            <div className='space-y-2'>
                                <input type='text' className='w-full' placeholder='O/A lvls' onChange={(e) => handleInputChange(e, seteducation)}/>
                                <input type='text' className='w-full' placeholder='Bachelors' onChange={(e) => handleInputChange(e, seteducation )}/>
                                <input type='text' className='w-full' placeholder='Masters' onChange={(e) => handleInputChange(e, seteducation)}/>
                            </div>
                        </section>
                        <section>
                            <div className='text-2xl font-extrabold mb-5'>Interests</div>
                            <div className='space-y-2'>
                                <input type='text' className='' placeholder='Interests 1' onChange={(e) => handleInputChange(e, setinterets)} />
                                <input type='text' className='' placeholder='Interests 2' onChange={(e) => handleInputChange(e, setinterets)} />
                                <input type='text' className='' placeholder='Interests 3' onChange={(e) => handleInputChange(e, setinterets)} />
                                <input type='text' className='' placeholder='Interests 4' onChange={(e) => handleInputChange(e, setinterets)}/>
                                <input type='text' className='' placeholder='Interests 5' onChange={(e) => handleInputChange(e, setinterets)}/>
                                <input type='text' className='' placeholder='Interests 6' onChange={(e) => handleInputChange(e, setinterets)}/>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section>
                            <div className='text-2xl font-extrabold mb-5'>Skills</div>
                            <div className='space-y-2'>
                                <input type='text' className='' placeholder='Skill 1' onChange={(e) => handleInputChange(e, setskills)}/>
                                <input type='text' className='' placeholder='Skill 2' onChange={(e) => handleInputChange(e, setskills)}/>
                                <input type='text' className='' placeholder='Skill 3' onChange={(e) => handleInputChange(e, setskills)}/>
                                <input type='text' className='' placeholder='Skill 4' onChange={(e) => handleInputChange(e, setskills)}/>
                                <input type='text' className='' placeholder='Skill 5' onChange={(e) => handleInputChange(e, setskills)}/>
                                <input type='text' className='' placeholder='Skill 6' onChange={(e) => handleInputChange(e, setskills)}/>
                            </div>
                        </section>
                        <section>
                            <div className='text-2xl font-extrabold mb-5 mt-8'>Personal Projects</div>
                            <div className='space-y-2'>
                                <input type='text' className='w-full' placeholder='Project 1' onChange={(e) => handleInputChange(e, setprojects)}/>
                                <input type='text' className='w-full' placeholder='Project 2' onChange={(e) => handleInputChange(e, setprojects)}/>
                                <input type='text' className='w-full' placeholder='Project 3' onChange={(e) => handleInputChange(e, setprojects)}/>
                            </div>
                        </section>
                        <section>
                            <div className='text-2xl font-extrabold mb-5 mt-8'>Achievements</div>
                            <div className='space-y-2'>
                                <input type='text' className='w-full' placeholder='Achievements 1' onChange={(e) => handleInputChange(e, setachievements)}/>
                                <input type='text' className='w-full' placeholder='Achievements 2' onChange={(e) => handleInputChange(e, setachievements)}/>
                                <input type='text' className='w-full' placeholder='Achievements 3' onChange={(e) => handleInputChange(e, setachievements)}/>
                            </div>
                        </section>
                        <section>
                            <div className='text-2xl font-extrabold mb-5'>Languages</div>
                            <div className='space-y-2'>
                                <input type='text' className='' placeholder='Lang 1' onChange={(e) => handleInputChange(e, setlanguages)} />
                                <input type='text' className='' placeholder='Lang 2' onChange={(e) => handleInputChange(e, setlanguages)}/>
                                <input type='text' className='' placeholder='Lang 3' onChange={(e) => handleInputChange(e, setlanguages)}/>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <button className='bg-blue-400 px-4 py-3 font-light' onClick={handleSave}>Save</button>
            <button className='bg-red-400 px-4 py-3 font-light'>Delete</button>

        </>
    )
}
