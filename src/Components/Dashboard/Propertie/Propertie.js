import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi';
import { FaBath } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';

const Propertie = ({propertie}) => {
    const {title, price, location, beds, batsh, area, img} = propertie;
    return (
        <div className='col-md-4 mb-4 rounded'>
            <div className="card border-0 shadow">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title text-primary">${price}/Per Month</h4>
                    <h6 className="card-title">{title}</h6>
                    <div style={{lineHeight: '30px'}}>
                        <span className='d-inline-block fs-5 p-1 text-white bg-info rounded-circle' 
                        style={{lineHeight: '13px', height: '30px', width: '30px', margin: '0px', padding: '0px'}}>
                            <AiTwotoneHome />
                        </span>
                        <span className='ms-2'>{location}</span>
                    </div>
                </div>
                <div className="card-footer bg-white">
                    <div className='d-flex align-items-center py-2'>
                        <span className='mx-2'><BiBed/> Beds: {beds} </span>
                        <span className='mx-2'><FaBath/> Baths: {batsh} </span>
                        <span className='mx-2'><BiArea/> Area: {area} </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Propertie;