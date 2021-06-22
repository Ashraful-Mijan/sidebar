import React from 'react';
import Propertie from '../Propertie/Propertie';

const properties = [
    {
        id: 1,
        title: 'House in Kent Street',
        location: '124 kent Street, Sydny, NEW 2000',
        beds: 3,
        baths: 2,
        price: 555,
        area: '587 sq ft',
        img: 'https://askbootstrap.com/preview/osahan-property/img/list/5.png'
    },
    {
        id: 2,
        title: 'House in Kent Street',
        location: '124 kent Street, Sydny, NEW 2000',
        beds: 3,
        baths: 2,
        price: 214,
        area: '587 sq ft',
        img: 'https://askbootstrap.com/preview/osahan-property/img/list/5.png'
    },
    {
        id: 3,
        title: 'House in Kent Street',
        location: '124 kent Street, Sydny, NEW 2000',
        beds: 3,
        baths: 2,
        price: 140,
        area: '587 sq ft',
        img: 'https://askbootstrap.com/preview/osahan-property/img/list/5.png'
    },
    {
        id: 4,
        title: 'House in Kent Street',
        location: '124 kent Street, Sydny, NEW 2000',
        beds: 3,
        baths: 2,
        price: 451,
        area: '587 sq ft',
        img: 'https://askbootstrap.com/preview/osahan-property/img/list/5.png'
    },
    {
        id: 5,
        title: 'House in Kent Street',
        location: '124 kent Street, Sydny, NEW 2000',
        beds: 3,
        baths: 2,
        price: 210,
        area: '587 sq ft',
        img: 'https://askbootstrap.com/preview/osahan-property/img/list/5.png'
    },
    {
        id: 6,
        title: 'House in Kent Street',
        location: '124 kent Street, Sydny, NEW 2000',
        beds: 3,
        baths: 2,
        price: 210,
        area: '587 sq ft',
        img: 'https://askbootstrap.com/preview/osahan-property/img/list/5.png'
    }
]

const Properties = () => {
    return (
        <section className='properties py-5' id='properties' style={{backgroundColor: '#ECEFF1'}}>
            <div className="container">
                <div className="sectionHeader w-75 mx-auto text-center mb-5">
                    <h3 className='fw-bold'>Latest Properties</h3>
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. 12For Sale</p>
                </div>
                <div className="row">
                    {
                        properties.map(propertie => <Propertie key={propertie.id} propertie={propertie} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Properties;