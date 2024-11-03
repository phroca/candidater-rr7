
import * as React from "react"
import LogoCanvas from "../canvas/logo"

const HeroSection = (props) => {

    return (
        <div className="relative z-20 pt-[20px] xl:h-[70vh] xl:max-h-[950px] md:pt-0">
            <section className="mx-auto px-6 pb-8 xl:h-[70vh] xl:max-h-[950px]">
                <div className="flex h-full flex-col items-center justify-between xl:flex-row ">
                    <div className="order-2 xl:order-1 max-w-3xl animate-hero-text-slide-up-fade sm:shrink-0 xl:pl-16">
                        <div className=" flex items-center justify-center xl:inline-flex">
                            <h3 className="rainbowBorder mb-10 inline-flex items-center justify-center text-[14px]">
                                <span className="font-['Nexa-Light'] text-white inline-flex items-center gap-1 whitespace-nowrap px-3 py-1">Risk Reward 7</span>
                            </h3>
                        </div>
                        <h1 className="font-['Nexa-Bold'] font-styling text-white font-display font-effect-hero text-center xl:text-left text-[3rem] md:text-6xl leading-[3rem] md:leading-[4rem] tracking-tight font-gradient">
                            Ne candidate pas si tu n’es pas prêt à t’investir dans ta propre réussite.
                        </h1>
                        <p className="font-['Nexa-Light'] text-white sans mb-8 mt-4 text-center leading-7 xl:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
                            Le choix de ta formation en trading est crucial et doit être parfaitement adapté à ton profil et à tes objectifs. Nous t’offrons la flexibilité de personnaliser ton parcours avec des formules renouvelables et modifiables sous 30 jours, te permettant ainsi d'optimiser ton apprentissage à tout moment.
                        </p>
                    </div>
                    <div className="relative order-1 transform-gpu xl:order-2 xl:w-[650px] items-center justify-center xl:flex lg:animate-[open-scale-up-fade_1.5s_ease-in-out] before:from-green-5/5 before:to-yellow-6/25 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:rounded-full before:bg-gradient-to-br before:blur-[100px] before:content-['']">
                        <div className="xl:w-[500px] xl:h-[650px] w-[200px] h-[200px]">
                            <LogoCanvas />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HeroSection