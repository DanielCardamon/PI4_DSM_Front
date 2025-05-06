import React from 'react'
import { Link } from 'react-router-dom'
import "./TextLink.css"
export const TextLink = ({link, span, texto}) => {
  return (
   <>
    <span className='spanM'>{span}<Link to={link}><span className='spanL'>{texto}</span></Link></span>
   </>
  )
}
