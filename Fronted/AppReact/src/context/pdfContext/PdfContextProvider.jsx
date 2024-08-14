import React, { useState } from 'react'
import PdfContext from './PdfContext.js'

const PdfContextProvider = ({children}) => {

    const [linkk,setLinkk] = useState('');

    return (
        <PdfContext.Provider value={{linkk, setLinkk}}>
            {children}
        </PdfContext.Provider> 
    )
}

export default PdfContextProvider