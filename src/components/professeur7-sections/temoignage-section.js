import * as React from "react"
import MasonryTemoignages from "./temoignages/mansonryTemoignages"

const TemoignageSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            {/* Titre principal */}
            <h2 className="font-['Nexa-Bold'] font-styling text-white font-display text-center text-[2rem] md:text-4xl leading-[2.5rem] md:leading-[3rem] tracking-tight">
                Ils en parlent mieux que nous
            </h2>
            <MasonryTemoignages />
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-4">
                    <p className="font-['Nexa-Bold'] text-white text-xl md:text-2xl">
                        Ce n’est pas juste une formation. <br />
                        C’est un endroit où tu reprends le contrôle sur ta vie.
                    </p>
                    <a href="cal.com/ibrahima-t-a/30min" target="_blank" rel="noreferrer" className="z-20 font-['Nexa-Bold'] xl:text-left text-center text-xl h-16 pl-4 pr-4 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-xl disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 mt-6">
                        Je rejoins
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TemoignageSection