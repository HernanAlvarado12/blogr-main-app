/**
 * @typedef {Object} pictureProps
 * @property {String} mobile
 * @property {String} desktop
 * @param {pictureProps} params 
 * @returns {JSX.Element}
 */
const Picture = ({ mobile, desktop }) => {
    return (
        <picture>
            <source media="(min-width: 768px)" srcSet={desktop} />
            <img src={mobile} alt="picture" />
        </picture>
    )
}

export { Picture }