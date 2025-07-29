import * as React from "react"
import { useState } from "react"

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-700 last:border-b-0">
            <button
                className="w-full py-6 px-0 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className="font-['Nexa-Bold'] text-white text-lg md:text-xl pr-4">
                    → {question}
                </span>
                <svg
                    className={`w-5 h-5 text-white transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                }`}>
                <div className="font-['Nexa-Light'] text-white text-base md:text-lg leading-relaxed space-y-4">
                    {answer.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Faq = () => {
    const [openItem, setOpenItem] = useState(null)

    const faqData = [
        {
            question: "Est-ce que RR7 est adapté aux débutants ?",
            answer: [
                "Oui. Peu importe d'où tu pars, ce qui compte c'est ta détermination à évoluer. Tu n'as pas besoin de savoir, juste d'être prêt à apprendre, pas à pas, avec constance. Ce qu'on attend de toi, ce n'est pas du savoir — c'est de l'engagement."
            ]
        },
        {
            question: "En quoi ce programme est-il différent ?",
            answer: [
                "Ce qui nous distingue, c'est l'accompagnement.",
                "Tu n'intègres pas une formation figée ou une méthode générique.",
                "On prend le temps de te connaître, de comprendre comment tu apprends. Et surtout, on t'aide à construire ta propre méthode, avec un cadre qui s'adapte à toi — pas l'inverse."
            ]
        },
        {
            question: "Est-ce que le programme impose des horaires fixes ?",
            answer: [
                "Non. Tu avances à ton rythme, selon tes disponibilités.",
                "La formation est 100% flexible, et notre équipe pédagogique s'adapte à ton évolution. Que tu sois disponible en journée, en soirée ou le week-end, tu trouveras toujours ta place dans le rythme RR7. Ce n'est pas toi qui dois t'adapter à la formation, c'est la formation qui s'adapte à toi."
            ]
        }
    ]

    const handleToggle = (index) => {
        setOpenItem(openItem === index ? null : index)
    }

    return (
        <div className="flex flex-col items-center justify-center py-16 px-6">
            <h2 className="font-['Nexa-Bold'] font-styling text-white font-display text-center text-[2rem] md:text-4xl leading-[2.5rem] md:leading-[3rem] tracking-tight">
                FAQ
            </h2>
            <div className="max-w-4xl mx-auto">
                <div className="space-y-0">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openItem === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq