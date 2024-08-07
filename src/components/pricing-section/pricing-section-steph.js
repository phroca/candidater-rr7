import * as React from "react"
import pricing from "../../constant/pricing-steph.json"
import CardPricing from "./card-pricing"


const PricingSectionSteph = () => {

    return (

        <div className="border-t border-slate-6 outline-none border-none">
            <div className="flex w-full flex-col gap-6 md:flex-row">
                {pricing.pricings.map((pricing, index) => (
                    <CardPricing key={index} {...pricing} />
                ))}
            </div>

        </div>

    )
}

export default PricingSectionSteph

