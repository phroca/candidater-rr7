import React from "react"
import HeroAstronauteSection from "../components/hero-section/hero-astronaute-section"
import MediaSectionAstronaute from "../components/media-section/media-section-astronaute"
import PricingSectionAstronaute from "../components/pricing-section/pricing-section-astronaute"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"


const Astronaute = () => {

    return (
        <Layout noises={true}>
            <Seo title="Web3.0 - Astronaute" />
            <HeroAstronauteSection />
            <MediaSectionAstronaute />
            <PricingSectionAstronaute />
        </Layout>
    )

}

export default Astronaute

export const Head = () => <title>Web3.0 - Astronaute</title>