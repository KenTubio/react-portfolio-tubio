import { Fragment } from "react"
import { FaRegEnvelope } from "react-icons/fa";


export default function FirstSection(){
    return (
        <Fragment>
            <header className=" flex justify-between items-center fixed left-0 right-0 top-0 px-10">
                <img className="w-32" src="/new-logoni-bro.png" alt="" />

                <button className="text-white text-4xl">
                    <FaRegEnvelope/>
                </button>
            </header>

            <section className="text-white h-screen flex flex-col justify-end">
                <div className="flex gap-2 font-handjet">
                    <h1>Hi, I'm</h1>
                    <div>
                        <span>K</span>
                        <span>E</span>
                        <span>N</span>
                        <span>N</span>
                        <span>E</span>
                        <span>T</span>
                        <span>H</span>
                    </div>
                </div>

                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, est sit ullam explicabo iure fuga totam voluptas, ratione dolores praesentium neque ad ducimus nam dolorum impedit sint aperiam rem. Quaerat!
                </div>
            </section>
        </Fragment>
    )
}