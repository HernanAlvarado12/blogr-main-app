/**
 * @typedef {Object} buttonProps
 * @property {String} classList
 * @property {String} text
 * @property {String} color
 * @param {buttonProps} param
 * @returns 
 */
const Button = ({ classList = '', text, color  }) => {
    const colorVariants = {
        red: 'text-red border-transparent bg-white hover:text-white hover:bg-red-100',
        white: 'text-white border-white bg-transparent hover:text-red hover:bg-white',
    }
    const colorStyle = colorVariants[color] ?? 'text-blue border-transparent bg-transparent'
    return (
        <button className={`px-2 h-4 flex items-center justify-center text-sm font-bold border rounded-full ${classList} ${colorStyle}`}>
            {text}
        </button>
    )
}

export { Button }