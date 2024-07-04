import React from 'react'

export const Instructions = (props) => {
    
    const { key, logo, title, info } = props;

    return (
        <>
            <div className="col-md-3 pb-3">
                <i className={ logo }></i>
                <h2 className='py-3'> { title } </h2>
                <p> { info } </p>
            </div>
        </>
    )
}
