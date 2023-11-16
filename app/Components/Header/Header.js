"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
    let pathname = usePathname()
    console.log(pathname)
    return (
        <div className='flex justify-between bg-blue-700'>
            <img

                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK3UgbGOKjh9CCq9KGXDcTjMrA-jkKdtq6aQ&usqp=CAU" />


            <nav className='space-x-5'>
                <Link href={"/"} style={{ color: pathname == "/" ? "red" : "white" }} >Home</Link>
                <Link href={"/Components/About"} style={{ color: pathname == "/Components/About" ? "red" : "white" }} >About</Link>
                <Link href={"/Components/Production"} style={{ color: pathname == "/Components/Production" ? "red" : "white" }} >production</Link>
                <Link href={"/Components/QA"} style={{ color: pathname == "/Components/QA" ? "red" : "white" }} >QA</Link>
                <Link href={"/Components/fa"} style={{ color: pathname == "/Components/fa" ? "red" : "white" }} >fa</Link>
                <Link href={"/Components/hr"} style={{ color: pathname == "/Components/hr" ? "red" : "white" }} >hr</Link>
                <Link href={"/Components/id"} style={{ color: pathname == "/Components/1" ? "red" : "white" }} > DynmaicRouting</Link>


            </nav>
        </div>
    )
}
export default Header