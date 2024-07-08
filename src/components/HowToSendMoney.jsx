import React from 'react';
import "../styles/HowToSendMoney.css";
import { MoneySendProcess } from './MoneySendProcess';

export const HowToSendMoney = () => {
    return (
        <>
            <div className="container-fluid moneySendInst" style={{backgroundColor : "#FFFFFF"}}>
                <div className="row text-left justify-content-center justify-content-md-evenly">
                    <h1 className='text-center my-5'>How To Send Money</h1>
                    <MoneySendProcess />
                </div>
            </div>
        </>
    )
}
