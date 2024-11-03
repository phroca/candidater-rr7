import * as React from "react"
import pricing from "../../constant/pricing.json"

const InitiationSection = () => {
    return (
        <div className="flex flex-col w-full justify-center  ">

            <a href={pricing.packInitiationLink} target="_blank" rel="noreferrer" className="z-20 font-['Nexa-Bold'] text-xl h-16 pl-4 pr-4 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-xl disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 mt-6">
                Prendre le Pack d’Initiation
            </a>

        </div >
    )
}

export default InitiationSection