import React from 'react'
import { colors } from '../constants/colors'

export default ({ type, placeholder, onChange, className }) =>
  <div>
    <input type={type} placeholder={placeholder} onChange={onChange} className={className}/>
    <style jsx>{`
      div {
        display: inline-block;
        width: 100%;
        max-width: 35.2rem;
      }
      input {
        width: 100%;
        max-width: 35.2rem;
        background-color: ${colors.greyLight};
        padding: 1.4rem 2.6rem;
        line-height: 2.8rem;
      }
    `}</style>
  </div>