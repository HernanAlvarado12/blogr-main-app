import { useState } from "react"
import { Button } from "./Button"
import { List } from "./List"
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"

const headerList = ['Product', 'Company', 'Connect']
const headerSubItems = [ ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'], ['About', 'Team', 'Blog', 'Careers'], ['Contact', 'Newsletter', 'LinkedIn'] ]


const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false)

    return (
        <header className="pb-8 text-white rounded-bl-4xl bg-test bg-no-repeat">
            <nav className="w-90 h-10 mx-auto flex items-center justify-between relative">
                <img className="h-3" src={logo} alt="logo icon" />
                <img src={menu} alt="menu icon" />
                <aside className="w-full py-3 px-2 absolute top-9 rounded-sm shadow-xl bg-white">
                    <menu className="flex items-center flex-col gap-y-3">
                        <List listItems={headerList} color="blue" hasIcon={true} subItems={headerSubItems}/>
                        <Button classList="-mb-2" text="Login" color="blue" />
                        <Button text="Sign Up" color="red" />
                    </menu>
                </aside>
            </nav>
            <section className="w-90 mx-auto mt-4flex items-center justify-center flex-col text-center">
                <div>
                    <h1 className="text-lg font-bold">A modern publishing platform</h1>
                    <p className="mt-2 mb-5 text-md font-semibold">Grow your audience and build your online brand</p>
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