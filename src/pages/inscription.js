import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import FormBronze from "../components/inscription/form-bronze"
import FormSilver from "../components/inscription/form-silver"
import FormGold from "../components/inscription/form-gold"
import { useEffect } from "react"


const InscriptionPage = ({ location }) => {
    const [urlParams, setUrlParams] = React.useState("")
    useEffect(() => {
        const url = new URLSearchParams(location?.search);
        const urlP = url.get("formule");
        setUrlParams(urlP)
    }, [])

    return (
        <Layout>
            <div className="flex flex-col items-left align-middle py-6">
                <Link to="/"><h3 className="text-white text-[1rem] font-['Nexa-Bold'] hover:underline">Retour à l'accueil</h3></Link>
            </div>
            <Seo title="Inscription" />
            {urlParams === "bronze" && <FormBronze />}
            {urlParams === "silver" && <FormSilver />}
            {urlParams === "gold" && <FormGold />}
        </Layout>
    )
}

export default InscriptionPage

export const Head = () => <title>Inscription</title>
