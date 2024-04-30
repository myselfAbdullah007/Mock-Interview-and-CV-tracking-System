/* Frontend/src\app/components/adminPanel.js */

import VerticalNavbar from './VerticalNavbar';
import Heading from "./Heading";
import UserTable from './UserTable';

export default function AdminPanel() {
    return (
        <div className="mt-24">
            <div className="flex">
                <VerticalNavbar />
                <main className="container flex-grow min-h-screen">
                    <Heading />
                    <div className='w-4/5 ms-auto mt-5'>
                        <UserTable/>
                    </div>
                </main>
            </div>
        </div>

    );
}
