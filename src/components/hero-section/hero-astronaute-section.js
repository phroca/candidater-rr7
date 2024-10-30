
import * as React from "react"
import LogoCanvas from "../canvas/logo"

const HeroAstronauteSection = (props) => {

    return (
        <div className="flex z-20 pt-[20px] md:pt-0">
            <section className="mx-auto px-1 pb-8">
                <div className="flex h-full flex-col items-center justify-between xl:flex-col ">
                    <div className="relative transform-gpu items-center justify-center xl:flex lg:animate-[open-scale-up-fade_1.5s_ease-in-out] before:from-green-5/5 before:to-yellow-6/25 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:rounded-full before:bg-gradient-to-br before:blur-[100px] before:content-['']">
                        <div className="xl:w-[500px] w-[200px] h-[200px] xl:h-[400px]">
                            <LogoCanvas />
                        </div>
                    </div>
                    <div className="flex flex-col max-w-7xl animate-hero-text-slide-up-fade sm:shrink-0 xl:pl-16">
                        <div className=" flex items-center justify-center xl:inline-flex">
                            <h3 className="rainbowBorder mb-10 inline-flex items-center justify-center text-[14px]">
                                <span className="font-['Nexa-Light'] text-white inline-flex items-center gap-1 whitespace-nowrap px-3 py-1">Risk Reward 7</span>
                            </h3>
                        </div>
                        <h1 className="font-['Nexa-Bold'] mb-8 font-styling text-white font-display font-effect-hero text-center xl:text-left text-[2rem] md:text-6xl leading-[3rem] md:leading-[4rem] tracking-tight font-gradient">
                            L’univers du Web3.0 est vaste… mais avez-vous la carte pour explorer ses trésors cachés ?
                        </h1>
                        <p className="font-['Nexa-Light'] text-white sans my-4 text-center leading-7 xl:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
                            Tel un astronaute qui trace sa route vers les étoiles, votre formation en Web3.0 doit correspondre à vos objectifs et aspirations uniques. Ici, c’est vous qui êtes aux commandes : avec une flexibilité cosmique, nous vous offrons l’opportunité d’adapter votre parcours selon vos besoins. Grâce à des formules renouvelables et modifiables sous 30 jours. Naviguez librement vers les points lumineux de votre potentiel, tout en gardant le cap sur vos propres ambitions.
                        </p>
                        <p className="font-['Nexa-Light'] text-white sans my-4 text-center leading-7 xl:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
                            Rejoignez une constellation de passionnés, engagés et bienveillants, où chaque étoile brille par l’échange de connaissances et la découverte des secrets du Web3.0. Ensemble, nous découvrons les nouvelles frontières du système financier et traçons une route vers une indépendance de temps, d’espace et de finances.
                        </p>
                        <p className="font-['Nexa-Light'] text-white sans my-4 text-center leading-7 xl:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
                            Lancez-vous dans cette exploration et atteignez les sommets de votre potentiel dans le Web3.0 !
                        </p>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default HeroAstronauteSection