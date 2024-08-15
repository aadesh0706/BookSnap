import React from 'react'

function HomepageBtn({height,width,backgroundColor="D9D9D9",borderRadius="10px",buttonText,fontSize="24px"}) {
  return (
    <div>
      <button style={{
        height:height,
        width:width,
        backgroundColor:backgroundColor,
        borderRadius:borderRadius,
        fontSize:fontSize,
      }}>{buttonText}</button>
    </div>
  )
}

export default HomepageBtn
