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
    const [interests, setinterets] = useState([]);


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
        setState(value);
    }

    const handleSave = async () => {
        //=========================================
        const works = [];
        for (items.works in work) {
            works.push(items.work);
        }
        if (document.getElementById('work1').value) {
            works.push(document.getElementById('work1').value);
        }
        if (document.getElementById('work2').value) {
            works.push(document.getElementById('work2').value);
        }
        if (document.getElementById('work3').value) {
            works.push(document.getElementById('work3').value);
        }
        console.log(works);
        handleInputChange({ target: { name: 'work', value: works } }, setwork);
        //=========================================

        //=========================================
        const educations = [];
        const edu = '';
        for (items.education in edu) {
            educations.push(items.edu);
        }
        if (document.getElementById('education1').value) {
            educations.push(document.getElementById('education1').value);
        }
        if (document.getElementById('education2').value) {
            educations.push(document.getElementById('education2').value);
        }
        if (document.getElementById('education3').value) {
            educations.push(document.getElementById('education3').value);
        }
        console.log(educations);
        handleInputChange({ target: { name: 'education', value: educations } }, seteducation);
        //=========================================

        //=========================================
        const interests = [];
        const interest = '';
        for (items.interests in interest) {
            interests.push(items.interest);
        }
        if (document.getElementById('interest1').value) {
            interests.push(document.getElementById('interest1').value);
        }
        if (document.getElementById('interest2').value) {
            interests.push(document.getElementById('interest2').value);
        }
        if (document.getElementById('interest3').value) {
            interests.push(document.getElementById('interest3').value);
        }
        if (document.getElementById('interest4').value) {
            interests.push(document.getElementById('interest4').value);
        }
        if (document.getElementById('interest5').value) {
            interests.push(document.getElementById('interest5').value);
        }
        if (document.getElementById('interest6').value) {
            interests.push(document.getElementById('interest6').value);
        }
        console.log(interests);
        handleInputChange({ target: { name: 'interests', value: interests } }, setinterets);
        //=========================================

        //=========================================
        const skills = [];
        const skill = '';
        for (items.skills in skill) {
            skills.push(items.skill);
        }
        if (document.getElementById('skill1').value) {
            skills.push(document.getElementById('interest1').value);
        }
        if (document.getElementById('skill2').value) {
            skills.push(document.getElementById('interest2').value);
        }
        if (document.getElementById('skill3').value) {
            skills.push(document.getElementById('interest3').value);
        }
        if (document.getElementById('skill4').value) {
            skills.push(document.getElementById('interest4').value);
        }
        if (document.getElementById('skill5').value) {
            skills.push(document.getElementById('interest5').value);
        }
        if (document.getElementById('skill6').value) {
            skills.push(document.getElementById('interest6').value);
        }
        console.log(interests);
        handleInputChange({ target: { name: 'skills', value: skills } }, setskills);
        //=========================================

        //=========================================
        const projects = [];
        const project = '';
        for (items.project in project) {
            projects.push(items.project);
        }
        if (document.getElementById('project1').value) {
            projects.push(document.getElementById('project1').value);
        }
        if (document.getElementById('project2').value) {
            projects.push(document.getElementById('project2').value);
        }
        if (document.getElementById('project3').value) {
            projects.push(document.getElementById('project3').value);
        }

        console.log(projects);
        handleInputChange({ target: { name: 'projects', value: projects } }, setprojects);
        //=========================================

        //=========================================
        const achievements = [];
        const achievement = '';
        for (items.achievements in achievement) {
            achievements.push(items.achievement);
        }
        if (document.getElementById('ack1').value) {
            achievements.push(document.getElementById('ack1').value);
        }
        if (document.getElementById('ack2').value) {
            achievements.push(document.getElementById('ack2').value);
        }
        if (document.getElementById('ack3').value) {
            achievements.push(document.getElementById('ack3').value);
        }

        console.log(projects);
        handleInputChange({ target: { name: 'achievements', value: achievements } }, setachievements);
        //=========================================

        //=========================================
        const languages = [];
        const language = '';
        for (items.languages in language) {
            languages.push(items.language);
        }
        if (document.getElementById('lang1').value) {
            languages.push(document.getElementById('lang1').value);
        }
        if (document.getElementById('lang2').value) {
            languages.push(document.getElementById('lang2').value);
        }
        if (document.getElementById('lang3').value) {
            languages.push(document.getElementById('lang3').value);
        }

        console.log(languages);
        handleInputChange({ target: { name: 'languages', value: languages } }, setlanguages);
        //=========================================

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
                interests
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
            <Navbar home={"Home"} location1={"/clientPanel/userPanel"} meeting={"Interviews"} location2={"#"} menu4={"Edit profile(change krna he)"} location4={`/clientPanel/editProfile?user=${user}`} />
            <div className='mt-28 mb-10'>
                <Heading name={"Edit your resume"} />
            </div>
            <section className='w-3/5 mx-auto border border-gray-400 container px-5 rounded-lg py-5 mb-8'>
                <div className='grid grid-cols-3 w-3/4 mb-4'><Image className='rounded-full w-full' src='/myself.png' alt='Profile pic' width={500} height={500} />
                    <div className='my-auto col-span-2 ps-5'>
                        <div className='font-bold text-4xl'>{items.f_name}</div>
                        <input type='text' className='w-full' placeholder='Your discription (A passionate Software Engineer)' onChange={handleDisInputChange} />
                    </div>
                </div>
                <hr />
                <div className='grid grid-cols-4'>
                    <div className='font-light'>{items.email}</div>
                    <input type='tel' className='w-full' placeholder='Contact number' onBlur={handleContactInputChange} />
                    <input type='text' className='w-full' placeholder='Linkedin profile Name' onBlur={handleLinkedinInputChange} />
                    <input type='text' className='w-full' placeholder='Github profile Name' onBlur={handleGithubInputChange} />
                </div>
                <hr />
                <div className='grid grid-cols-2 mt-10'>
                    <div>
                        <section>
                            <div className='text-2xl font-extrabold mb-5'>Work Experience</div>
                            <div className='space-y-2'>
                                <input type='text' className='w-full' id='work1' placeholder={!items.work ? 'Work Experience 1' : items.work[0]} />
                                <input type='text' className='w-full' id='work2' placeholder={!items.work ? 'Work Experience 2' : items.work[1]} />
                                <input type='text' className='w-full' id='work3' placeholder={!items.work ? 'Work Experience 3' : items.work[2]} />
                            </div>
                        </section>
                        <section>
                            <div className='text-2xl font-extrabold mb-5 mt-8'>Education</div>
                            <div className='space-y-2'>
                                <input type='text' className='w-full' id='education1' placeholder={!items.education ? 'A levels' : items.education[0]} />
                                <input type='text' className='w-full' id='education2' placeholder={!items.education ? 'Bachelors' : items.education[1]} />
                                <input type='text' className='w-full' id='education3' placeholder={!items.education ? 'Masters' : items.education[2]} />
                            </div>
                        </section>
                        <section>
                            <div className='text-2xl font-extrabold mb-5'>Interests</div>
                            <div className='space-y-2'>
                                <input type='text' className='' id='interest1' placeholder={!items.interests ? 'Inerest 1' : items.interests[0]} />
                                <input type='text' className='' id='interest2' placeholder={!items.interests ? 'Inerest 2' : items.interests[1]} />
                                <input type='text' className='' id='interest3' placeholder={!items.interests ? 'Inerest 3' : items.interests[2]} />
                                <input type='text' className='' id='interest4' placeholder={!items.interests ? 'Inerest 4' : items.interests[3]} />
                                <input type='text' className='' id='interest5' placeholder={!items.interests ? 'Inerest 5' : items.interests[4]} />
                                <input type='text' className='' id='interest6' placeholder={!items.interests ? 'Inerest 6' : items.interests[5]} />
                            </div>
                        </section>
                    </div>
                    <div>
                        <section>
                            <div className='text-2xl font-extrabold mb-5'>Skills</div>
                            <div className='space-y-2'>
                                <input type='text' className='' id='skill1' placeholder={!items.skills ? 'Skill 1' : items.skills[0]} />
                                <input type='text' className='' id='skill2' placeholder={!items.skills ? 'Skill 2' : items.skills[1]} />
                                <input type='text' className='' id='skill3' placeholder={!items.skills ? 'Skill 3' : items.skills[2]} />
                                <input type='text' className='' id='skill4' placeholder={!items.skills ? 'Skill 4' : items.skills[3]} />
                                <input type='text' className='' id='skill5' placeholder={!items.skills ? 'Skill 5' : items.skills[4]} />
                                <input type='text' className='' id='skill6' placeholder={!items.skills ? 'Skill 6' : items.skills[5]} />
                            </div>
                        </section>
                        <section>
                            <div className='text-2xl font-extrabold mb-5 mt-8'>Personal Projects</div>
                            <div className='space-y-2'>
                                <input type='text' className='w-full' id='project1' placeholder={!items.projects ? 'Project 1' : items.projects[0]} />
                                <input type='text' className='w-full' id='project2' placeholder={!items.projects ? 'Project 2' : items.projects[1]} />
                                <input type='text' className='w-full' id='project3' placeholder={!items.projects ? 'Project 3' : items.projects[2]} />
                            </div>
                        </section>
                        <section>
                            <div className='text-2xl font-extrabold mb-5 mt-8'>Achievements</div>
                            <div className='space-y-2'>
                                <input type='text' className='w-full' id='ack1' placeholder={!items.achievements ? 'Achievement 1' : items.achievements[0]} />
                                <input type='text' className='w-full' id='ack2' placeholder={!items.achievements ? 'Achievement 2' : items.achievements[1]} />
                                <input type='text' className='w-full' id='ack3' placeholder={!items.achievements ? 'Achievement 3' : items.achievements[2]} />
                            </div>
                        </section>
                        <section>
                            <div className='text-2xl font-extrabold mb-5'>Languages</div>
                            <div className='space-y-2'>
                                <input type='text' className='w-full' id='lang1' placeholder={!items.languages ? 'Language 1' : items.languages[0]} />
                                <input type='text' className='w-full' id='lang2' placeholder={!items.languages ? 'Language 2' : items.languages[1]} />
                                <input type='text' className='w-full' id='lang3' placeholder={!items.languages ? 'Language 3' : items.languages[2]} />
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
