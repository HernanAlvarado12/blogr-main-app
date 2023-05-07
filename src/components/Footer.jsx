import { List } from "./List"
import logo from "../assets/logo.svg"

const company = ['Company', 'About', 'Team', 'Blog', 'Careers']
const connect = ['Connecat', 'Contact', 'Newsletter', 'LinkedIn']
const product = ['Product', 'Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']


const Footer = () => {
    return (
        <footer className="w-full flex justify-center py-6 rounded-tr-4xl bg-gray-200">
            <section className="w-90 mx-auto">
                <img className="mx-auto mb-6" src={logo} alt="logo icon" />
                <section className="grid gap-y-6">
                    <ul className="flex flex-col gap-y-1">
                        <List classList="first:mb-2" listItems={product} color="gray" />
                    </ul>
                    <ul className="flex flex-col gap-y-1">
                        <List classList="first:mb-2" listItems={company} color="gray" />
                    </ul>
                    <ul className="flex flex-col gap-y-1">
                        <List classList="first:mb-2" listItems={connect} color="gray" />
                    </ul>
                </section>
            </section>
        </footer>
    )
}

export { Footer }