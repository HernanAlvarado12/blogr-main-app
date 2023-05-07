

const Comment = ({ classList = '', content = {}, isGray = true }) => {
    const { title, text} = content
    return (
        <article className={`text-center ${classList}`}>
            <h3 className={`mt-4 mb-2 ${isGray? 'text-blue' : 'text-white'} text-med font-semibold font-ubuntu`}>{title}</h3>
            <p className={`${isGray? 'text-gray' : 'text-white'} text-sm leading-loose`}>{text}</p>
        </article>
    )
}

export { Comment }