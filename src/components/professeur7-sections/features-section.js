import * as React from "react"
import GridItem from "./grid-item"

const FeaturesSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <h2 className="font-['Nexa-Bold'] mb-16 font-styling text-white font-display text-center text-[2rem] md:text-4xl leading-[2.5rem] md:leading-[3rem] tracking-tight">
                Ce que vous n'aviez jamais trouvé ailleurs
            </h2>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex flex-row items-center justify-center gap-4">
                    <GridItem
                        icon={<>📚</>}
                        title="1. Une méthode"
                        description="Chaque concept est expliqué en profondeur à travers des vidéos, des graphiques, et des textes pédagogiques. Tu passes ensuite à la pratique avec des exercices concrets et des corrections personnalisées."
                    />

                    <GridItem
                        icon={<>🎥</>}
                        title="2. Des lives thématiques"
                        description="Chaque semaine, des lives pour des points de marché et l'analyse d'opportunités."
                    />

                    <GridItem
                        icon={<>🤝</>}
                        title="3. Un accompagnement personnalisé"
                        description="Tu n'es jamais laissé seul. L'équipe pédagogique suit ta progression, t'apporte des feedbacks précis, et t'oriente avec clarté. Tu es encadré, soutenu, et challengé avec bienveillance."
                    />
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <GridItem
                        icon={<>🛠️</>}
                        title="4. Des outils pour aller plus vite"
                        description="Playbooks, journaux de trades, systèmes de notation… Tu avances avec des outils puissants, pensés pour t'aider à structurer ton apprentissage, prendre de meilleures décisions, et progresser plus rapidement."
                    />

                    <GridItem
                        icon={<>🌐</>}
                        title="5. Une communauté active et engagée"
                        description="Tu intègres un écosystème vivant où l'entraide, les échanges et la progression collective sont au cœur de l'expérience. Tu ne te sens plus isolé : tu évolues avec des personnes qui partagent tes ambitions."
                    />

                    <GridItem
                        icon={<>🌌</>}
                        title="6. Et bien plus encore..."
                        description="Des surprises, des bonus, des ressources cachées et des expériences uniques que tu découvriras une fois à l'intérieur. RR7 ne se raconte pas : ça se vit."
                    />
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection