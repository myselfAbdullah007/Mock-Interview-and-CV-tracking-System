export default function UserTable() {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-cyan-500">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">User Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    {/* Add more table headers as needed */}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">john.doe@example.com</td>
                    {/* Add more table data rows as needed */}
                </tr>
                <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">john.doe@example.com</td>
                    {/* Add more table data rows as needed */}
                </tr>                                <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">john.doe@example.com</td>
                    {/* Add more table data rows as needed */}
                </tr>                                <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">john.doe@example.com</td>
                    {/* Add more table data rows as needed */}
                </tr>

            </tbody>
        </table>
    );
}