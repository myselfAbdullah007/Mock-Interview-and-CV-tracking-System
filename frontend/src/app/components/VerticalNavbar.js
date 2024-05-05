import Link from 'next/link';

export default function verticalNavbar() {
    return (
        <nav className="bg-gray-800 w-48 h-screen fixed left-0 top-0">
            <ul className="flex flex-col items-center justify-center h-full">
                <li className="mb-4">
                    <Link href="/adminPanel/DashBoard" className="text-white">DashBoard</Link>
                </li>
                <li className="mb-4">
                    <Link href="/adminPanel/AdminPanel" className="text-white">User Table</Link>
                </li>
                <li className="mb-4">
                    <Link href="/adminPanel/Companies" className="text-white">Companies</Link>
                </li>
                <li className="mb-4">
                    <Link href="/contact" className="text-white">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}