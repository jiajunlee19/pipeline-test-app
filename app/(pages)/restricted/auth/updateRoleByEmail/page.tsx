import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/_libs/nextAuth_options";
import { readUserByEmail } from "@/app/_actions/auth";
import UpdateRoleComponent from '@/app/(pages)/restricted/auth/updateRoleByEmail/component';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Update Role',
    description: 'Developed by jiajunlee',
};

export default async function UpdateRolePage({searchParams}: {searchParams?: {email?: string}} ) {

    const session = await getServerSession(options);

    if (!session || session.user.role !== 'boss') {
        redirect("/denied");
    }

    const email = searchParams?.email?.toString() || session.user.email; 
    let user;

    try {
        user = await readUserByEmail(email);
    } catch (err) {
        user = null;
    }

    return (
       <UpdateRoleComponent user={user}/>
    );
};