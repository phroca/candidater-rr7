
import * as React from "react"
import LogoCanvas from "../canvas/logo"

const HeroP7Section = (props) => {

    return (
        <div className="flex flex-col items-center justify-center py-2 md:py-16 px-6">
            <section className="mx-auto xl:h-[70vh] xl:max-h-[950px]">
                <div className="flex h-full flex-col items-center justify-between xl:flex-row ">
                    <div className="order-2 xl:order-1 max-w-3xl animate-hero-text-slide-up-fade sm:shrink-0 xl:pl-16">
                        <div className=" flex items-center justify-center xl:inline-flex">
                            <h3 className="rainbowBorder mb-10 inline-flex items-center justify-center text-[14px]">
                                <span className="font-['Nexa-Light'] text-white inline-flex items-center gap-1 whitespace-nowrap px-3 py-1">Risk Reward 7</span>
                            </h3>
                        </div>
                        <h1 className="font-['Nexa-Bold'] font-styling text-white font-display font-effect-hero text-center xl:text-left text-[2rem] md:text-5xl leading-[2rem] md:leading-[3rem] tracking-tight font-gradient">
                            Et si tu pouvais (enfin) comprendre les marchés, construire un capital solide…
                            <br />
                            <span className="text-white font-['Nexa-Light'] text-[2rem] md:text-4xl ">… et avancer avec confiance grâce à un cadre qui a fait ses preuves ?</span>
                        </h1>
                        <p className="font-['Nexa-Light'] text-white sans mb-8 mt-4 text-center leading-7 xl:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
                            <b>Tu t'es déjà formé.</b><br />
                            Tu as déjà essayé. <br />
                            Tu as peut-être même cru que c'était <b>TOI</b> le problème.<br />
                            Mais la vérité, c'est que <b>tu n'as jamais eu un cadre sérieux.</b><br />
                            Pas une vraie méthode. <br />
                            Pas un vrai soutien. <br />
                            Et surtout, <b>pas un écosystème qui t'élève.</b>
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

export default HeroP7Section