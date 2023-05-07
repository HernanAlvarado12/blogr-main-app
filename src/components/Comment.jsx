

const Comment = ({ classList = '', classTitle = '', content = {}, isGray = true }) => {
    const { title, text} = content
    return (
        <article className={`text-center ts:text-start  ${classList}`}>
            <h3 className={`mt-4 mb-2 ${isGray? 'text-blue' : 'text-white'} text-med font-semibold font-ubuntu sm:mt-5.5 mb-3 ${classTitle}`}>{title}</h3>
            <p className={`${isGray? 'text-gray' : 'text-white'} text-sm leading-loose sm:leading-relaxed`}>{text}</p>
        </article>
    )
}

export { Comment }