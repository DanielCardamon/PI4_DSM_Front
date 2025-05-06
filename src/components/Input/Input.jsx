import React from 'react'
import "./Input.css"
export default function Input({img, func, placeholder, type,alt, style, focus, nome}) {
  return (
   
    <label>
    <span className='login'>{func}</span>
    <div className='Dinput' style={style} >
    <img src={img} alt={alt} className='img_log' />
    <input type={type} name={nome} className='log' placeholder={placeholder} onBlur={focus} 
        />
        </div>
</label>
  )
}
