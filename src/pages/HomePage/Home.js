import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import InfoSection from '../../components/InfoSection/InfoSection';
import Pricing from '../../components/Pricing/Pricing';

const Home = () => {
    return (
        <>
         <InfoSection {...homeObjOne} />
         <InfoSection {...homeObjTwo} />  
         <Pricing /> 
         <InfoSection {...homeObjThree} />   
         <InfoSection {...homeObjFour} />   

        </>
    )
}

export default Home
