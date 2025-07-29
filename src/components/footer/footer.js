import * as React from "react"
import logo from "../../images/rr7-logo-footer.png"


const Footer = () => {



    return (
        <div className="w-full flex flex-col justify-center items-center relative z-45 py-10 md:px-6 xl:px-40 px-6">
            <div className="w-full py-4 flex flex-row gap-4 justify-between items-center border-t-[1px] border-slate-500">
                <img className="w-[153px] h-[153px] left-[155px] top-[167px]" alt="RR7 logo" src={logo} />
                <div className="flex flex-row gap-20 justify-around ">
                    <span className="text-white text-right text-[20px] lg:text-[38px] lg:leading-[38px] font-bold font-['Nexa-Bold']">Le RISK n'a jamais<br />été aussi safe.</span>

                </div>
            </div>

            <div className="w-full py-4 flex flex-row justify-between items-center border-t-[1px] border-slate-500">
                <div className=" text-white text-sm font-bold font-['Nexa-Light']">Designed by KAIZIX</div>
                <div className=" text-white text-sm font-bold font-['Nexa-Light']">2025 RR7 - Tous droits réservés</div>
            </div>
        </div>
    )
}

export default Footer