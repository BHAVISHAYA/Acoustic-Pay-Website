import React from 'react';

export const ContentImage = (props) => {
    return (
        <>
            <div className="col-md-4 text-center pt-5 pb-5">
                <img className='img-fluid' src={props.imgSrc} alt="" />
            </div>
        </>
    )
}
