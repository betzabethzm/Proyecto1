import AppLayout from "@/layouts/app-layout"; 
import { Head } from "@inertiajs/react";
import { useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

interface BreadCrumbItem {
    title: string;
    href: string;
}

export default function Index() {

    const [data, setData] = useState({
        nombre: "",
        email: "",
    });

    const breadcrumbs: BreadCrumbItem[] = [
        { title: "USUARIOS", href: "/users" }
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />

            {/* Encabezado */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Listado de usuarios
                </h1>
            </div>

            <div className='overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow'>
                <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                    <thead className='bg-gray-100 dark:bg-gary'>
                        <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>ID</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Nombre</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>

                </table>
            </div>

        </AppLayout>
    );
}
