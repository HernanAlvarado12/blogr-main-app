import { List } from "./List"
import logo from "../assets/logo.svg"

const company = ['Company', 'About', 'Team', 'Blog', 'Careers']
const connect = ['Connecat', 'Contact', 'Newsletter', 'LinkedIn']
const product = ['Product', 'Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']
const classHover = "relative after:content-[''] after:w-full after:h-0.2 after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-all after:duration-500 after:bg-white hover:after:scale-x-100"


const Footer = () => {
    return (
        <footer className="w-full flex justify-center py-6 rounded-tr-4xl bg-gray-200 ts:pt-8 ts:pb-7">
            <section className="w-90 mx-auto ts:flex ts:items-start ts:gap-x-3">
                <img className="mx-auto mb-6 ts:m-0" src={logo} alt="logo icon" />
                <section className="grid gap-y-6 grid-cols-footer ts:flex-1 ts:justify-items-center">
                    <ul className="flex flex-col gap-y-1">
                        <List classList={`first:mb-2 first:font-semibold ${classHover}`} listItems={product} color="gray" />
                    </ul>
                    <ul className="flex flex-col gap-y-1">
                        <List classList={`first:mb-2 first:font-semibold ${classHover}`} listItems={company} color="gray" />
                    </ul>
                    <ul className="flex flex-col gap-y-1">
                        <List classList={`first:mb-2 first:font-semibold ${classHover}`} listItems={connect} color="gray" />
                    </ul>
                </section>
            </section>
        </footer>
    )
}

export { Footer }