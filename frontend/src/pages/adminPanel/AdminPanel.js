/* Frontend/src\app/components/adminPanel.js */

import VerticalNavbar from '../../app/components/VerticalNavbar';
import { useRouter } from 'next/router';
import Heading from "../../app/components/Heading";
import Navbar from '../../app/components/Navbar';
import UserTable from '../UserData/UserTable';

export default function AdminPanel() {
    const router = useRouter();
    const { user, status } = router.query;
    return (
        <>
      <Navbar home={"Home"} location1={"/adminPanel/AdminPanel"} meeting={"Interviews"} location2={"#"} menu4={"Edit profile(change krna he)"} location4={`/clientPanel/editProfile?user=${user}`}/>

            <div className="mt-24">
                <div className="flex">
                    <VerticalNavbar location2={`/adminPanel/AdminPanel?user=${user}&status=${status}`}/>
                    <main className="container flex-grow min-h-screen">
                        <Heading />
                        <div className='w-4/5 ms-auto mt-5'>
                            <UserTable name={"NAME"} username={"USERNAME"} email={"EMAIL"} option1={"Approve"} option2={"Reject"}/>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
