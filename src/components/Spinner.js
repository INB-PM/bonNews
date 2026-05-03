import React, { Component } from 'react';
import loading from './loading.gif';

const Spinner = () => {
    
        return (
            // <div class="d-flex justify-content-center">
            //     <div class="spinner-grow" role="status">
            //         {/* <span class="sr-only">Loading...</span> */}
            //     </div>
            // </div>
            <div className='text-center'>
                <img className="my-3"src={loading} alt='loading' />
                <p>Loading...</p>
            </div>
        );
}

export default Spinner;


