/* Frontend/src\app/components/adminPanel.js */
import { useRouter } from 'next/router';
import VerticalNavbar from '../../app/components/VerticalNavbar';
import Heading from "../../app/components/Heading";
import Navbar from '../../app/components/Navbar';
import CompanyTable from '../UserData/CompanyTable';

export default function AdminPanel() {
    const router = useRouter();
    const { user, status } = router.query;
    return (
        <>
      <Navbar home={"Home"} location1={"/adminPanel/adminPanel"}  meeting={"Interviews"} location2={"#"} menu4={"Edit profile(change krna he)"} location4={`/clientPanel/editProfile?user=${user}`}/>

            <div className="mt-24">
                <div className="flex">
                <VerticalNavbar location1={`/adminPanel/DashBoard?user=${user}&status=${status}`} location2={`/adminPanel/AdminPanel?user=${user}&status=${status}`} location3={`/adminPanel/CompanyPanel?user=${user}&status=${status}`}/>
                    <main className="container flex-grow min-h-screen">
                        <Heading />
                        <div className='w-4/5 ms-auto mt-5'>
                        <CompanyTable name={"NAME"} username={"industry"} email={"location"}/>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
