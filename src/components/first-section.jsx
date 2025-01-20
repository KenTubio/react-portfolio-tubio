import { Fragment } from "react"
import { FaRegEnvelope } from "react-icons/fa";


export default function FirstSection(){
    return (
        <Fragment>
            <header className=" flex justify-between items-center fixed left-0 right-0 top-0 px-10">
                <img className="w-32" src="/new-logoni-bro.png" alt="" />

                <button className="text-white text-4xl"><FaRegEnvelope/></button>
            </header>
        </Fragment>
    )
}