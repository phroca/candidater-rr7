import * as React from "react"
import Layout from "../components/layout/layout"
import HeroP7Section from "../components/hero-section/hero-p7-section"
import Seo from "../components/seo"
import MediaSection from "../components/media-section/media-section"
import NumbersSection from "../components/professeur7-sections/numbers-sections"
import TemoignageSection from "../components/professeur7-sections/temoignage-section"
import FeaturesSection from "../components/professeur7-sections/features-section"
import ReservationSection from "../components/professeur7-sections/reservation-section"
import TemoignageSecondSection from "../components/professeur7-sections/temoignage-second-section"
import Faq from "../components/professeur7-sections/faq"
import CtaSection from "../components/professeur7-sections/cta-section"



const IndexPage = () => {

    return (
        <Layout>
            <Seo title="Candidater chez RR7" />
            <HeroP7Section />
            <MediaSection />
            <NumbersSection />
            <TemoignageSection />
            <FeaturesSection />
            <ReservationSection />
            <TemoignageSecondSection />
            <Faq />
            <CtaSection />
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Candidater chez RR7</title>
