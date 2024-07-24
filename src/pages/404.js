import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page non trouvé</h1>
      <p style={paragraphStyles}>
        Désolé 😔, nos ne pouvons pas trouvé ce que vous recherchez.
        <br />
        <br />
        <Link to="/">Retour à l'accueil</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Page non trouvé</title>
