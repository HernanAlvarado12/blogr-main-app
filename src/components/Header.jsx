import { useEffect, useState } from "react"
import { Button } from "./Button"
import { List } from "./List"
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"

const headerList = ['Product', 'Company', 'Connect']
const headerSubItems = [ ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'], ['About', 'Team', 'Blog', 'Careers'], ['Contact', 'Newsletter', 'LinkedIn'] ]
const classHover = "relative after:content-[''] after:w-full after:h-0.2 after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-all after:duration-500 after:bg-white hover:after:scale-x-100"


const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false)
    const [classList, setClassList] = useState('hidden')

    useEffect(() => {
        setClassList(menuIcon? 'block' : 'hidden')
    }, [menuIcon])

    return (
        <header className="pb-8 text-white rounded-bl-4xl bg-intro bg-no-repeat sm:pb-9.5">
            <nav className="w-90 h-10 mx-auto flex items-center justify-between relative">
                <img className="h-3" src={logo} alt="logo icon" />
                <img className="cursor-pointer ts:hidden" src={menu} alt="menu icon" onClick={() => setMenuIcon(!menuIcon)} />
                <aside className={`w-full py-3 px-2 ${classList} absolute top-9 rounded-sm shadow-xl bg-white ts:flex-1 ts:ml-3 ts:p-0 ts:block ts:relative ts:top-0 ts:shadow-none ts:bg-transparent`}>
                    <menu className="flex items-center flex-col gap-y-3 ts:flex-row ts:justify-between ts:gap-x-2">
                        <List classList={`ts:text-white ts:font-normal ${classHover}`} listItems={headerList} color="blue" hasIcon={true} subItems={headerSubItems}/>
                        <Button classList="-mb-2 ts:mb-0 ts:ml-auto ts:mr-2 ts:text-white" text="Login" color="blue" />
                        <Button text="Sign Up" color="red" />
                    </menu>
                </aside>
            </nav>
            <section className="w-90 mx-auto mt-4flex items-center justify-center flex-col text-center">
                <div>
                    <h1 className="text-lg font-bold sm:text-lg2">A modern publishing platform</h1>
                    <p className="mt-2 mb-5 text-md font-normal">Grow your audience and build your online brand</p>
                </div>
                <div className="flex items-center justify-center gap-x-1">
                    <Button text="Start for Free" color="red" />
                    <Button text="Learn more" color="white" />
                </div>
            </section>
        </header>
    )
}

export { Header }