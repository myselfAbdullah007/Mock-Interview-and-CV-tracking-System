/* Frontend/src\app/components/adminPanel.js */

import VerticalNavbar from '../../app/components/VerticalNavbar';
import { useRouter } from 'next/router';
import Heading from "../../app/components/Heading";
import Navbar from '../../app/components/Navbar';
import UserTable from '../UserData/UserTable';

export default function AdminPanel() {
    const router = useRouter();
    const { user } = router.query;
    return (
        <>
      <Navbar meeting={"Interviews"} location2={"#"} menu4={"Edit profile(change krna he)"} location4={`/clientPanel/editProfile?user=${user}`}/>

            <div className="mt-24">
                <div className="flex">
                    <VerticalNavbar />
                    <main className="container flex-grow min-h-screen">
                        <Heading />
                        <div className='w-4/5 ms-auto mt-5'>
                            <UserTable name={"NAME"} username={"USERNAME"} email={"EMAIL"}/>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
