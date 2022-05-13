import { HomeHeader } from './HomeHeader';
import { HomeThreeColumns } from './HomeThreeColumns';
import { SimpleSteps } from './SimpleSteps';
import { AboutUs } from './AboutUs';
import { Organizations } from './Organizations';
import { ContactForm } from './ContactForm';


export const Home=()=>{
    return(
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <SimpleSteps />
            <AboutUs />
            <Organizations />
            <ContactForm />
        </>
    )
}