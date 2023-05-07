/**
 * @typedef {Object} pictureProps
 * @property {String} classList
 * @property {String} mobile
 * @property {String} desktop
 * @param {pictureProps} params 
 * @returns {JSX.Element}
 */
const Picture = ({ classList,  mobile, desktop }) => {
    return (
        <picture className={classList}>
            <source media="(min-width: 900px)" srcSet={desktop} />
            <img className="mx-auto" src={mobile} alt="picture" />
        </picture>
    )
}

export { Picture }