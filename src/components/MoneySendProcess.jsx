import React from 'react';
import moneyServices from '../API/moneyServices';
import "../styles/HowToSendMoney.css";

export const MoneySendProcess = () => {
    return (
        <>
            {
                moneyServices.map((currItem) => {
                    return <>
                        <div className='col-md-3 col-9 moneyService' key={currItem.id}>
                            <i className={currItem.logo}></i>
                            <h2 className='mb-3'> {currItem.title} </h2>
                            <p> {currItem.info} </p>
                        </div>
                    </>
                })
            }
        </>
    )
}
