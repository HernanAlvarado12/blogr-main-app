/**
 * @typedef {Object} buttonProps
 * @property {String} text
 * @property {String} color
 * @param {buttonProps} param
 * @returns 
 */
const Button = ({ text, color  }) => {
    const colorVariants = {
        red: 'text-red border-transparent bg-white',
        white: 'text-white border-white bg-transparent',
    }
    const colorStyle = colorVariants[color] ?? ''
    return (
        <button className={`px-2 h-4 flex items-center justify-center text-sm font-bold border rounded-full ${colorStyle}`}>
            {text}
        </button>
    )
}

export { Button }