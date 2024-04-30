/* Frontend/src\app/components/adminPanel.js */

import Layout from "./Layout";
import VerticalNavbar from './VerticalNavbar';
import Heading from "./Heading";

export default function AdminPanel({ children }) {
    return (
        <Layout>
            <div className="mt-32">
                <div className="flex">
                    <VerticalNavbar />
                    <main className="flex-grow">
                        <Heading />
                        {children}
                    </main>
                </div>
            </div>
        </Layout>
    );
}
