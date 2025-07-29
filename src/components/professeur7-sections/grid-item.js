
import * as React from "react"
import { GlowingEffect } from "../ui/glowing-effect"

const GridItem = ({ icon, title, description }) => {
    return (
        <div className={`min-h-[14rem] w-full list-none`}>
            <div className="relative h-full min-h-[20rem] rounded-3xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 md:p-6">
                    <div className="relative flex flex-1 flex-col justify-start gap-3">
                        <div className="w-fit rounded-[10px] border border-gray-600 p-2 ">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                                {title}
                            </h3>
                            <h2
                                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
            md:text-base/[1.375rem]  text-neutral-400"
                            >
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridItem