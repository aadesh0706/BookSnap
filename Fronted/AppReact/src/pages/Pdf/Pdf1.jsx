import React, { useContext } from 'react'
import PdfContext from '../../context/pdfContext/PdfContext'




function Pdf1() {
  const {linkk} = useContext(PdfContext)
  return (
    <div style={{ height:'100vh' , top:'-50px' }}>
      <embed src={linkk} width="100%" height="90%" allow="autoplay"></embed>
    </div>
  )
}

export default Pdf1
