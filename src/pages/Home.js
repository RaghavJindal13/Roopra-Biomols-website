import React from 'react'

import Services from '../components/Services'
import FeaturedRooms from "../components/FeaturedRooms"


import Footer from "../components/Footer"
import MaterialGrid from "../components/Skills"

export default function Home() {
    return (
        <>
        
        <br></br>
        <br></br>
        <br></br>
        <h2>About Us</h2>
        <p>Roopra Biomols is a bioinformation company that specializes in addressing the complex challenges and growing needs of the Biotech industry. Advanced scientific research in the arena of biosciences is creating a data overflow that needs to be deciphered by transferring data into technology. Our goal is to provide complete bioinformatics solutions to Biotech and Pharma companies and academia all over the world.</p>
        <br></br>
        <h2>Focus</h2>
        <p>Our company focuses mainly on providing contract bioinformatics research solutions, customized knowledge-base platform design, development of personalized software algorithms and applications for bioinformatics data analysis and also offers bioinformatics cloud design, infrastructure, implementation and support.</p>
        <br /><br />
        
            
        <Services></Services>
        <FeaturedRooms></FeaturedRooms>
        
        <MaterialGrid></MaterialGrid>
        <Footer></Footer>
        </>
    )
}
