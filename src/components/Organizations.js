import React from 'react';
export const Organizations=()=>{
    return(
        <div className='organizations'>
            <div className='organizations__content'>
                <h2 className="organizations__title">Komu pomagamy?</h2>
                <div className='decoration'/>
                <div className='organizations__types'>
                    <div className='organizations__type'>Fundacjom</div>
                    <div className='organizations__type'>Organizacjom pozarządowym</div>
                    <div className='organizations__type'>Lokalnym zbiórkom</div>
                </div>
                <p className="organizations__description">
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                    współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
                    czego potrzebują.
                </p>
            </div>
            <div className='organizations__list'>

            </div>

        </div>
    )
}