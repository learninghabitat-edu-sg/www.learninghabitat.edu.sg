import Head from 'next/head'
import Header from '../components/header'

export const config = { amp: true }

const SEOHeader = () => {
    return (
        <>
            <Head>
                <meta property="og:title" content="Learning Habitat" />
                <meta property="og:site_name" content="Learning Habitat" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en-GB" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(
                    {
                        "@id": "https://www.learninghabitat.edu.sg/#JSONLD-School",
                        "@context": "https://schema.org/",
                        "@type": "School",
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "SG",
                            "postalCode": "530684",
                            "streetAddress": "684 Hougang Ave 8 #04-967, Hougang Village"
                        },
                        "email": "admin@learninghabitat.edu.sg",
                        "legalName": "Learning Habitat Pte. Ltd.",
                        "name": "Learning Habitat",
                        "taxID": "200603601G",
                        "telephone": ["+65 63437857", "+65 68585184"],
                        "language": {
                            "@type": "Language",
                            "name": "English",
                            "alternateName": "en"
                        },
                        "description": "Quality tuition backed by a pool of competent tutors with years of experience. Learning Habitat is a professional Primary and Secondary tuition centre in Singapore, registered with the Ministry of Education since 2006."
                    }
                )}} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(
                    {
                        "@id": "https://www.learninghabitat.edu.sg/#JSONLD-WebSite",
                        "@context": "https://schema.org/",
                        "@type": "WebSite",
                        "accessMode": ["textual", "visual"],
                        "accessModeSufficient": {
                            "@type": "ItemList",
                            "itemListOrder": "https://schema.org/ItemListUnordered",
                            "itemListElement": [
                                "textual",
                                "visual"
                            ]
                        },
                        "accessibilityAPI": "ARIA",
                        "accessibilityControl": [
                            "fullKeyboardControl",
                            "fullMouseControl",
                            "fullTouchControl"
                        ],
                        "accesssibilityFeature": [
                            "alternativeText",
                            "structuralNavigation",
                            "unlocked"
                        ],
                        "accessibilityHazard": "none"
                    }
                )}} />
            </Head>
        </>
    )
}

export default () => {
    return (
        <>
            <SEOHeader />
            <Header />
        </>
    )
}