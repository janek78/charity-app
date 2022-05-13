export const HomeHeader=()=>{
    return(
        <div className="home">
        <div className='home__hero__image' />
        <div className='home__header'>

            <div className='user'>
                <button className='user__account'>Zaloguj</button>
                <button className='user__create__account'>Załóż konto</button>
            </div>
            <nav className='navigation'>
                <ul>
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
            <div className='home__section'>
                <p>Zacznij pomagać!</p>
                <br/>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                <div className='decoration'/>
                <div className='buttons'>
                    <button className='give__things'>ODDAJ RZECZY</button>
                    <button className='organize__collection'>ZORGANIZUJ ZBIÓRKĘ</button>
                </div>
            </div>
        </div>
        </div>
    )
}