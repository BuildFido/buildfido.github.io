import React, { useState, useEffect } from 'react';

const LoadingComponent = () => {
    const [dots, setDots] = useState('.');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : '.'));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return <div id="loading" className='text-primary'>De-identifying{dots}</div>;
}

export default LoadingComponent;