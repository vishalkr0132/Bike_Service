import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Card from '../Services/Card';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='container mb-5'>
            <h1 className='heading text-center  mt-5'>Our Services</h1>
            <div className='row'>
            {/* {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
            } */}
            <Card/>
            </div>
            
        </div>
    );
};

export default Services;