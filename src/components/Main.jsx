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
            <section className="w-90 mx-auto mt-8 ts:grid ts:grid-cols-2 ts:gap-x-2">
                <h2 className="mb-3 text-blue text-base font-ubuntu font-medium text-center ts:col-span-2">Desinged for the future</h2>
                <Picture classList="ts:m-auto ts:col-start-2 ts:row-start-2 ts:row-end-5" mobile={editorMobile} desktop={editorDesktop} />
                <Comment classTitle="ts:mt-2 ts:mb-1 ts:text-base" content={data[0]} />
                <Comment classList="mb-52 ts:mb-0" classTitle="ts:mt-2 ts:mb-1 ts:text-base" content={data[1]} />
            </section>
            <section className="mt-[30rem] mb-8 pt-52 pb-8 relative rounded-tr-4xl rounded-bl-4xl bg-body bg-no-repeat md:mt-10 md:pt-6 md:pb-2 md:grid md:items-center md:grid-cols-2">
                <img className="max-w-[38rem] mx-auto absolute inset-x-0 z-10 bottom-[60%] md:relative md:inset-auto" src={phones} alt="phones image" />
                <Comment classList="w-90 mx-auto relative z-10 md:w-full" classTitle="md:mt-0" content={data[2]} isGray={false} />
            </section>
            <section className="w-90 mx-auto ts:grid ts:grid-cols-2 ts:gap-x-2 ts:items-center">
                <Picture classList="ts:row-span-2" mobile={laptopMobile} desktop={laptopDesktop} />
                <Comment content={data[3]} />
                <Comment content={data[4]} />
            </section>
        </main>
    )
}

export { Main }