import * as React from "react"
import iclosedCandidater from "../../images/iclosed-candidater.png"

const ReservationSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <h2 className="font-['Nexa-Bold'] mb-16 font-styling text-white font-display text-center text-[2rem] md:text-4xl leading-[2.5rem] md:leading-[3rem] tracking-tight">

                Changer de vie, ça commence rarement par un coup de chance.
                Ça commence par une décision.

            </h2>
            <div className="flex flex-col-reverse md:flex-row gap-8">
                <div className="flex flex-col gap-8 items-start justify-between">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-['Nexa-Bold'] text-white text-xl md:text-2xl text-left">
                            Réserve ton appel (gratuit)
                        </h3>
                        <p className="font-['Nexa-Light'] text-white text-base md:text-lg leading-relaxed space-y-4 text-left">
                            Ce n’est pas un appel commercial.<br />
                            C’est un vrai moment d’échange pour :
                            <br />
                            - Te poser les bonnes questions
                            <br />
                            - Comprendre comment tu peux progresser concrètement
                        </p>
                    </div>
                    <p className="font-['Nexa-Light'] text-white text-xs md:text-xs leading-relaxed space-y-4 text-left">
                        ⚠️ On ne travaille qu’avec des personnes motivées, prêtes à s’investir et à avancer avec sérieux.<br />
                        Si c’est ton cas, tu es au bon endroit.
                    </p>
                </div>
                <div className="flex flex-col gap-4 justify-center">
                    <img src={iclosedCandidater} alt="RR7 candidater" width={600} height={200} />
                </div>
            </div>


        </div>
    )
}
export default ReservationSection