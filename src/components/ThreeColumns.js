import React from 'react';

export const ThreeColumns = () => {
    return (
        <div className='three-columns'>
            <article className='three-columns__item'>
                <h2 className='three-columns__number'>10</h2>
                <h5 className='three-columns__name'>ODDANYCH WORKOW</h5>
                <p className='three-columns__description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim
                    a elit viverra elementuma. Aliquam erat volutpat.</p>
            </article>
            <article className='three-columns__item'>
                <h2 className='three-columns__number'>5</h2>
                <h5 className='three-columns__name'>WSPARTYCH ORGANIZACJI</h5>
                <p className='three-columns__description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim
                    a elit viverra elementuma. Aliquam erat volutpat.</p>
            </article>
            <article className='three-columns__item'>
                <h2 className='three-columns__number'>7</h2>
                <h5 className='three-columns__name'>ZORGANIZOWANYCH ZBIÓREK</h5>
                <p className='three-columns__description'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim
                    a elit viverra elementuma. Aliquam erat volutpat.</p>
            </article>
        </div>
    );
};