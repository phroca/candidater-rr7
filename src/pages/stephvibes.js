import * as React from "react"
import Layout from "../components/layout/layout"
import HeroSection from "../components/hero-section/hero-section"
import Seo from "../components/seo"
import MediaSectionSteph from "../components/media-section/media-section-steph"
import PricingSectionSteph from "../components/pricing-section/pricing-section-steph"



const IndexPage = () => {

    return (
        <Layout>
            <Seo title="Candidater chez RR7" />
            <HeroSection />
            <MediaSectionSteph />
            <PricingSectionSteph />
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Candidater chez RR7</title>
