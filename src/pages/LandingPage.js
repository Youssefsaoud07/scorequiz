import React from 'react'
import Champs from '../components/champs'
import Contrib from '../components/contributors'
import Footer from '../components/footer'
import Gardians from '../components/gardians'
import Header from '../components/header'
import Heros from '../components/heros'
import Landing from '../components/landing'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Landing />
            <Heros />
            <Champs />
            <Gardians />
            <Contrib />
            <Footer />
        </div>
    )
}

export default LandingPage
