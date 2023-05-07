import { useEffect, useState } from "react"
import { Picture } from "./Picture"
import iconMobile from "../assets/dark.svg"
import iconDesktop from "../assets/light.svg"


const Item = ({ classList = '', text, icon, color, subItems = [], handleClick }) => {

    const colorVariants = {
        gray: 'text-gray-100 font-light',
        blue: 'text-blue',
        white: 'text-white'
    }

    const mapping = () => {
        return (
            <ul className={`hidden flex-col gap-y-1 ts:pt-2.5 ts:pb-1 ts:px-2.5 ts:text-blue ts:absolute ts:top-5 ts:-translate-x-1 ts:rounded-sm ts:bg-white`}>
                {subItems.map((item, key) => <Item key={key} text={item} classList="text-sm first-of-type:mt-3 ts:first-of-type:mt-0"/>)}
            </ul>
        )
    }

    return (
        <ul className={`text-md font-semibold ${colorVariants[color] ?? ''} cursor-pointer ${classList} relative`} onClick={handleClick}>
            <span className="flex items-center justify-center gap-x-1 ts:justify-start">
                {text}
                {icon && <Picture mobile={iconMobile} desktop={iconDesktop} />}
            </span>
            {subItems.length !== 0 && mapping()}
        </ul>
    )
}

Item.defaultProps = {
    handle: () => {}
}

export { Item }