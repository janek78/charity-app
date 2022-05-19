import React, { useEffect, useState } from 'react';
import { foundations, collections, organizations,btnList } from "./data";

export const Organizations=()=>{
const [selected, setSelected] = useState("foundations")
const [data, setData] = useState([]);
const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage] = useState(3)

    useEffect(() => {
        switch (selected) {
            case "foundations":
                setData(foundations);
                break;
            case "collections":
                setData(collections);
                break;
            case "organizations":
                setData(organizations);
                break;
            default:
                setData(foundations)
        }
    }, [selected]);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }
        return (
            <section className="organizations" >
                <div className='organizations__content'>
                    <h2 className="organizations__title">Komu pomagamy?</h2>
                    <div className='decoration'/>
                    <div className='organizations__types'>
                        <div className="organizations__type ">
                            {btnList.map(el => {
                                return (
                                    <button key={el.id}
                                            className={selected === el.id ? "organizations__type__btn active" : "organizations__type__btn"}
                                            onClick={() => {
                                                setSelected(el.id);
                                                setCurrentPage(1)
                                            }}>{el.name}</button>
                                )
                            })}
                        </div>
                    </div>

                    {btnList.map(el => {
                        return(
                    <p key={el.id} className="organizations__description">{(selected===el.id?el.description:'')}</p>
                        )
                    })}
                </div>
                    {currentPosts.map(el => {
                        return (
                            <div key={el.id} className="organizations__content__all">
                                <div className="organizations__content__list">
                                    <div className="organizations__content__item">
                                        <div className="organizations__content__title">{el.title}</div>
                                        <div className="organizations__content__description">{el.description}</div>
                                    </div>
                                    <div
                                        className="organizations__content__stuff">{el.stuff}</div>
                                </div>
                            </div>
                        )
                    })}

                {pageNumbers.length>1&&<div className="pagination">
                        {pageNumbers.map(pageNumber => (
                            <button
                                key={pageNumber}
                                className={currentPage===pageNumber ? "pagination__btn active" : "pagination__btn"}
                                onClick={() => paginate(pageNumber)}
                            >{pageNumber}
                            </button>
                        ))}
                    </div>}
            </section>
        );

};
