import * as React from "react"


const NumbersSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            {/* Titre principal */}
            <h2 className="font-['Nexa-Bold'] mb-16 font-styling text-white font-display text-center text-[2rem] md:text-4xl leading-[2.5rem] md:leading-[3rem] tracking-tight">
                RR7, c'est ce qu'on aurait voulu avoir au début.
            </h2>

            {/* Grille des statistiques */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {/* +350h de vidéos explicatives */}
                <div className="flex flex-col items-center space-y-4">
                    <span className="text-4xl">🎓</span>
                    <h3 className="font-['Nexa-Bold'] text-white text-xl md:text-2xl">
                        +350h de vidéos explicatives
                    </h3>
                </div>

                {/* +7h de lives hebdomadaires */}
                <div className="flex flex-col items-center space-y-4">
                    <span className="text-4xl">🖥️</span>
                    <h3 className="font-['Nexa-Bold'] text-white text-xl md:text-2xl">
                        +7h de lives hebdomadaires
                    </h3>
                </div>

                {/* +2M€ de comptes financés */}
                <div className="flex flex-col items-center space-y-4">
                    <span className="text-4xl">💰</span>
                    <h3 className="font-['Nexa-Bold'] text-white text-xl md:text-2xl">
                        +2M€ de comptes financés obtenus par nos élèves
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default NumbersSection