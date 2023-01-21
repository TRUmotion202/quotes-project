import React from 'react'

const NextQuoteButtom = ({refreshQuoteBox, color}) => {
    return (
        <div>
        <button className='quotebox__button' style={{backgroundColor: color}} onClick={refreshQuoteBox}>
            <i className='bx bxs-chevron-right'></i>
        </button>
        </div>
    )
}

export default NextQuoteButtom