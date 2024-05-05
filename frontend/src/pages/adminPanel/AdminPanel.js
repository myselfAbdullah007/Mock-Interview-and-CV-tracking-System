/* Frontend/src\app/components/adminPanel.js */

import VerticalNavbar from '../../app/components/VerticalNavbar';
import Heading from "../../app/components/Heading";
import Navbar from '../../app/components/Navbar';
import UserTable from '../UserData/UserTable';

export default function AdminPanel() {
    return (
        <>
            <Navbar />

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
