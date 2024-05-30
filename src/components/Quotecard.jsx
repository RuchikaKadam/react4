import React from 'react';

export const Quotecard = (props) => {
  return (
    <div className='quote-container'>
        <p>{props.content}</p>
        <h6 className='author-text'>{props.author}</h6>
        <h5 className='author-pos'>{props.position}</h5>
    </div>
  )
}