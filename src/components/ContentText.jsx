import React from 'react'
import { HowToUseContent } from './HowToUseContent'

export const ContentText = (props) => {
    return (
        <>
            <div className="col-md-6 px-4">
                <h5 className='pb-4'> {props.text1} </h5>
                <h1 className='pb-5'> {props.text2} </h1>
                <HowToUseContent />
                <button>Learn More</button>
            </div>
        </>
    )
}
