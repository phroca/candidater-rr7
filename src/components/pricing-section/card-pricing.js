import * as React from "react"
import { TickValid } from "../../icons/tick-valid"
import "./card-pricing.css"

import { cn } from "../../utils/cn"
const CardPricing = (props) => {

    return (
        <div className="relative overflow-hidden flex flex-1 rounded-2xl border border-slate-800 p-[1.5px]">
            {/* space-y-6 p-6 */}
            <div className="relative z-10 flex w-full flex-col ">
                <div className={cn("absolute inset-0 h-full w-full animate-rotate rounded-full ", props.bgAnimateRadius)}></div>
                <div className="flex flex-col min-h-full z-20 text-center rounded-2xl bg-slate-950 p-6">
                    <h3 className="font-['Nexa-Light'] font-styling h-[40px] font-display mb-6 flex justify-center gap-2 text-base tracking-tight">
                        <span className="text-white">{props.title}</span>
                    </h3>
                    <span className="text-white font-['Nexa-Bold'] mb-6 text-[2.25rem] leading-[1.1] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem] tracking-tight min-h-[100px] max-h-[200px] text-slate-12 font-normal">{props.subtitle}</span>
                    <hr className="border-slate-6" />

                    <span className="font-['Nexa-Light'] text-white text-opacity-50 min-h-auto md:min-h-[120px] max-h-[200px] my-4 md:text-[12px] lg:text-[14px] xl:text-[16px]">{props.leadText}</span>
                    <hr className="mb-6 border-slate-6" />
                    <div className="flex flex-col justify-between h-full">
                        <ul className="flex flex-col gap-3">
                            {props.listFeatures && props.listFeatures.map((value, index) => (

                                <li key={index} className="flex items-center gap-2 text-left h-10">
                                    <TickValid />
                                    <span className="text-sm md:text-xs lg:text-sm leading-[1.5] w-[100%] font-normal text-white font-['Nexa-Bold']" dangerouslySetInnerHTML={{ __html: value }}></span>
                                </li>
                            ))}
                        </ul>

                        <a href={props.link} target="_blank" rel="noreferrer" className="font-['Nexa-Bold'] text-sm h-10 pl-4 pr-4 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 mt-6">
                            Choisir cette formule
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPricing;