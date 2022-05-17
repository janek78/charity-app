import React from 'react';
export const ThreeColumns=()=>{
    return(
        <div className='three__columns'>
            <article className='three__column__item'>
                <h2 className='three__column__number'>10</h2>
                <h5 className='three__column__name'>ODDANYCH WORKOW</h5>
                <p className='three__column__description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
                    a elit viverra elementuma. Aliquam erat volutpat.</p>
            </article>
            <article className='three__column__item'>
                <h2 className='three__column__number'>5</h2>
                <h5 className='three__column__name'>WSPARTYCH ORGANIZACJI</h5>
                <p className='three__column__description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
                    a elit viverra elementuma. Aliquam erat volutpat.</p>
            </article>
            <article className='three__column__item'>
                <h2 className='three__column__number'>7</h2>
                <h5 className='three__column__name'>ZORGANIZOWANYCH ZBIÓREK</h5>
                <p className='three__column__description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
                    a elit viverra elementuma. Aliquam erat volutpat.</p>
            </article>
        </div>
    )
}