import React from 'react'

export const Footer = ({result,color}) => {
  console.log(color);

  return (
    <footer>
        <span
          style={{color: color}}
        >{result}</span>
    </footer>
  )
}
