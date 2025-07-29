import * as React from "react"
import { motion } from "framer-motion"
import temoignages from "../../../constant/temoignages.json"
import discord from "../../../images/discord-logo.png"
const MasonryTemoignages = () => {


    // Animation variants pour le fade in
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="py-16 px-4 md:px-8 lg:px-16">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                <div className="columns-1 lg:columns-3 gap-8 space-y-8">
                    {temoignages.map((temoignage) => (
                        <motion.div
                            key={`${temoignage.title}-${temoignage.name}`}
                            variants={itemVariants}
                            className="break-inside-avoid flex flex-row gap-4 bg-slate-600 bg-opacity-40 rounded-[10px] border-2 border-blue-900 z-10 overflow-hidden p-4"
                        >

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-4 items-center justify-between">
                                    <h2 className="text-2xl font-bold text-white">{temoignage.name}</h2>
                                    <img src={discord} alt="logo Discord" width={32} height={20} />
                                </div>
                                <p className="text-xs text-white">{temoignage.title}</p>
                                <p className="text-xs text-white">"{temoignage.quote}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default MasonryTemoignages 