import React from 'react'

function Button({widthh="411px",heightt="42px",typee="button",buttonText,borderRadius="10px",fontFamily="poppins" ,fontSize="14px",backgroundColor="#1e1f25" ,color="#E0E2E9"}) {
  return (
    <>
        <div style={{width:widthh,height:heightt}}>
            <button type={typee} style={{
                width: widthh,
                height: heightt,
                cursor: "pointer",
                fontFamily: fontFamily,
                fontSize: fontSize,
                fontWeight: "600",
                backgroundColor: backgroundColor,
                borderRadius : borderRadius,
                color: color,
            }}
            
            >{buttonText}</button>
        </div>
    </>
  )
}

export default Button
