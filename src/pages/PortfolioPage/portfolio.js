import React from 'react'
import Portfolio from '../../components/HeroSectPortfolio';
import bgimage from './images/Banner.JPEG'
import gold2 from './images/goldb.png'


function PortfolioPage() {
    return (
        <Portfolio banner={bgimage} balloons={gold2}/>
    )
}

export default PortfolioPage
