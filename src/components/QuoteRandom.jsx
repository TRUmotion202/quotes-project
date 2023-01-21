import React from 'react'
import NextQuoteButtom from './NextQuoteButtom'

const QuoteRandom = ({quote, refreshQuoteBox, color}) => {
    return (
        <div className='quotebox'>
            <p className='quotebox__quote' style={{color: color}}>{quote.quote}</p>
            <h3 className='quotebox__author' style={{color: color}} >{quote.author}</h3>
            <i style={{color: color}} className='quotebox__quote-type bx bxs-quote-left'></i>
            <NextQuoteButtom refreshQuoteBox={refreshQuoteBox} color={color}/>
        </div>
    )
}

export default QuoteRandom