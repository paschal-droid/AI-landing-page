import React from 'react'

import  {Cta, Brand, Navbar} from './components'
import  {Footer, Blog, Possibility, Features, GPT, Header} from './containers'

import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient_bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <GPT />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
