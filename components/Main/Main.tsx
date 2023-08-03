"use client"
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";
import Login from "@/components/Login/Login"
import Dashboard from "../../app/dashboard/page"

import { useSession } from "next-auth/react";

export default function Home() {

    const { data: session } = useSession()

    const styles = {
        main: "max-w-[85rem] m-auto p-2 md:p-0"
    }

    return (
        <main className={styles.main}>
            <Header />
            {session && (
                <>
                    <SideMenu />
                    <Dashboard />
                </>
            )}
            <Login />
        </main>
    )
}
