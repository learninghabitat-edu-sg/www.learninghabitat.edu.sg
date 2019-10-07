import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export const config = { amp: true }

export default () => {
    return (
        <>
            <Header />
            <Footer />
        </>
    )
}