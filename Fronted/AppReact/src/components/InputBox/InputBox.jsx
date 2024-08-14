// import React from 'react'

// function InputBox({heightt,widthh,typee="text",borderRadiuss="0px",placeHolderr,labell}) {
//   return (
//     <div>
//       <div style={{
//         width: "411px",
//         height: "42px",
//         fontSize: "30px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         border: "2px #E0E2E9 solid",
//         borderRadius: "5px",
//       }}>
//         <i style={{color: "#a4c5c3" ,paddingLeft:"10px"}}><img src="../../../public/assets/images/inputBoxEmail.png" alt=""/> </i>
//         <input type={typee} placeholder={placeHolderr} className={{
//           height: "90%",
//           width: "90%",
//           outline: "0px",
//           border: "none",
//           font: "poppins",
//           fontWeight: "600",
//           fontSize: "14px",
//           color: "#969AB8",
//           padding: "10px" 
//         }}/>
//       </div>
//     </div>
//   )
// }

// export default InputBox


import React,{useId} from 'react'; 

function InputBox({ heightt = "42px", widthh = "411px", typee = "text", borderRadiuss = "10px", placeholderr,imgSource, labell ,...props },ref) {
  const id = useId()
  return (
    <div>
      <div className="input-box" style={{
        width: widthh,
        height: heightt,
        fontSize: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px #E0E2E9 solid",
        borderRadius: borderRadiuss,
      }}>
        <i className="icon" style={{ color: "#a4c5c3", paddingLeft: "10px" }}>
          <img src={imgSource} alt="" />
        </i>
        <input
          type={typee}
          placeholder={placeholderr}
          ref={ref}
          id={id}
          style={{
            height: "90%",
            width: "90%",
            outline: "none",
            border: "none",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            fontSize: "14px",
            color: "#969AB8",
            padding: "10px"
          }}
          {...props}
        />
      </div>
    </div>
  );
}

export default React.forwardRef(InputBox);
