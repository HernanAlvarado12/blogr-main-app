import { Comment } from "./Comment"
import { Picture } from "./Picture"
import editorMobile from "../assets/editor-mobile.svg"
import editorDesktop from "../assets/editor-desktop.svg"
import laptopMobile from "../assets/laptop-mobile.svg"
import laptopDesktop from "../assets/laptop-desktop.svg"
import phones from "../assets/phones.svg"
import circle from "../assets/circles.svg"
import data from "../helpers/data"


const Main = () => {
    return (
        <main className="mb-52">
            <section className="w-90 mx-auto mt-8">
                <h2 className="mb-3 text-blue text-base font-ubuntu font-medium text-center">Desinged for the future</h2>
                <Picture mobile={editorMobile} desktop={editorDesktop} />
                <Comment content={data[0]} />
                <Comment classList="mb-52" content={data[1]} />
            </section>
            <section className="mt-[30rem] mb-8 relative">
                <img className="absolute z-10 -top-1/3" src={phones} alt="phones image" />
                <article className="w-full pt-72 pb-8 relative overflow-hidden rounded-bl-4xl rounded-tr-4xl bg-body">
                    <img className="w-full absolute -top-1/4" src={circle} alt="circle image" />
                    <Comment classList="w-90 mx-auto relative z-10" content={data[2]} isGray={false} />
                </article>
            </section>
            <section className="w-90 mx-auto">
                <Picture mobile={laptopMobile} desktop={laptopDesktop} />
                <Comment content={data[3]} />
                <Comment content={data[4]} />
            </section>
        </main>
    )
}

export { Main }