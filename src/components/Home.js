import React from 'react';
import {HomeHeader} from './HomeHeader';
import {ThreeColumns} from './ThreeColumns';
import {SimpleSteps} from './SimpleSteps';
import {AboutUs} from './AboutUs';
import {Organizations} from './Organizations';
import {Contact} from './Contact';


export const Home = () => {
    return (
        <>
            <HomeHeader/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <Organizations/>
            <Contact/>
        </>
    );
};