import { useEffect, useState } from "react"

const Item = ({ classList = '', text, icon, color, subItems = [], handleClick }) => {

    const colorVariants = {
        gray: 'text-gray-100',
        blue: 'text-blue',
        white: 'text-white'
    }

    return (
        <ul className={`text-md font-semibold ${colorVariants[color] ?? ''} ${classList}`} onClick={handleClick}>
            <span className="flex items-center justify-center gap-x-1">
                {text}
                {icon? <img src={icon} /> : null}
            </span>
            {
            subItems.length !== 0 && 
            <ul className={`hidden flex-col gap-y-1`}>
                { subItems.map((item, key) => <Item key={key} text={item} classList="text-sm first-of-type:mt-3" />) }
            </ul>
            }
        </ul>
    )
}

Item.defaultProps = {
    handle: () => {}
}

export { Item }