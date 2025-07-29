import * as React from "react"
import MasonryTemoignages from "./temoignages/mansonryTemoignages"

const TemoignageSecondSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            {/* Titre principal */}
            <h2 className="font-['Nexa-Bold'] font-styling text-white font-display text-center text-[2rem] md:text-4xl leading-[2.5rem] md:leading-[3rem] tracking-tight">
                Guider ceux qui refusent la médiocrité
            </h2>
            <MasonryTemoignages />
        </div>
    )
}
export default TemoignageSecondSection