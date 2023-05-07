import { useState } from "react"
import { Item } from "./Item"
import icon from "../assets/dark.svg"

const List = ({ classList = '', listItems = [], color, hasIcon = false, subItems = [] }) => {

    const [lastActive, setLastActive] = useState(null)

    const handleClick = (event) => {
        const next = event.target.nextElementSibling
        if(next) {
            const search = document.querySelector('header nav aside menu ul.active')
            if(search) {
                if(search == next)
                    search.classList.remove('active')
                search.classList.toggle('active')
            }
            next.classList.toggle('active')
        }
    }


    return (
        <>
            { listItems.map((item, key) => <Item key={key} classList={classList} text={item} color={color} icon={hasIcon? icon : null } subItems={subItems[key]} handleClick={handleClick} />) }
        </>
    )
}

export { List }