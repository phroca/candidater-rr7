import * as React from "react"
import pricing from "../../constant/pricing-steph.json"
import CardPricing from "./card-pricing"


const PricingSectionSteph = () => {

    return (

        <div className="border-t border-slate-6 outline-none border-none">
            <h2 className="font-['Nexa-Bold'] mb-8 font-styling text-white font-display font-effect-hero text-center text-[2rem] md:text-4xl leading-[2.5rem] md:leading-[3rem] tracking-tight font-gradient">
                Tu es prêt à changer ta trajectoire ?<br />
                Quel que soit ton niveau, il y a une formule pour toi.
            </h2>
            <div className="flex w-full flex-col gap-6 md:flex-row">
                {pricing.pricings.map((pricing, index) => (
                    <CardPricing key={index} {...pricing} />
                ))}
            </div>

        </div>

    )
}

export default PricingSectionSteph

