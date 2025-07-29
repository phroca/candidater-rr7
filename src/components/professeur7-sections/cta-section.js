import * as React from "react"

const CtaSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            {/* Titre principal */}
            <h2 className="font-['Nexa-Bold'] mb-16 font-styling text-white font-display text-center text-[2rem] md:text-4xl leading-[2.5rem] md:leading-[3rem] tracking-tight">
                Maîtriser les règles ou subir le système ?

            </h2>
            <p className="font-['Nexa-Light'] text-white text-base md:text-lg leading-relaxed space-y-4">
                C’est le moment de prendre ta décision.
                RR7 est un écosystème qui transformera ta manière d’aborder les marchés.
            </p>
            <p className="font-['Nexa-Light'] text-white text-base md:text-lg leading-relaxed space-y-4">
                Alors :
                Combien es-tu prêt à investir pour briser tes chaines de pauvreté ?
            </p>
            <a href="cal.com/ibrahima-t-a/30min" target="_blank" rel="noreferrer" className="z-20 font-['Nexa-Bold'] xl:text-left text-center text-xl h-16 pl-4 pr-4 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-xl disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 my-6">
                Je prends un nouveau départ
            </a>
            <p className="font-['Nexa-Light'] text-white text-base md:text-lg leading-relaxed space-y-4">
                S’il te reste la moindre question, envoies un mail à rr7management@gmail.com

            </p>
        </div>
    )
}
export default CtaSection