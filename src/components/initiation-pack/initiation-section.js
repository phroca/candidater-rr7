import * as React from "react"
import pricing from "../../constant/pricing.json"

const InitiationSection = () => {
    return (
        <div className="rainbowBorderCta z-10 flex w-full flex-col my-6 ">
            <div className="flex flex-col xl:flex-row gap-8 justify-between p-10">
                <div className="flex flex-col xl:max-w-[700px] gap-4">
                    <h2 className="font-['Nexa-Bold'] text-white text-5xl xl:text-left text-center">Pack d’initiation</h2>
                    <p className="font-['Nexa-Bold'] text-white xl:text-left text-center">
                        Le Pack d’Initiation est ta porte d’entrée vers l’univers exclusif de RR7.
                        Avec notre technologie d’apprentissage avancée et nos sessions live, maîtrise les bases indispensables du trading.
                        Démarre dès aujourd’hui un parcours structuré qui maximise tes chances de réussite, même si tu pars de zéro.
                    </p>
                </div>
                <a href={pricing.packInitiationLink} target="_blank" rel="noreferrer" className="z-20 font-['Nexa-Bold'] xl:text-left text-center text-xl h-16 pl-4 pr-4 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-xl disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 mt-6">
                    Je prends un nouveau départ
                </a>
            </div>
        </div>

    )
}

export default InitiationSection