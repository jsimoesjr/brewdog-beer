import React from 'react';
import img from './resources/loading.gif'

function Loading(props) {
    return (
        <div className='loading' >
            <img src={img} alt='Loading...' />
        </div>
    )
}

export default Loading;