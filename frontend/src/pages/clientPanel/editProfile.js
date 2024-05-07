import React from 'react'
import Navbar from '../../app/components/Navbar';
import Heading from '../../app/components/Heading';

export default function editProfile() {
    return (
        <>
            <Navbar meeting={"Schecule Interview"} location2={"/mentorPanel/scheduleInterview"} />
            <div className='mt-28 mb-10'>
                <Heading name={"Edit Profile"} />
            </div>
        </>
    )
}
