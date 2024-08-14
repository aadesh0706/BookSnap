import React, { useContext } from 'react'
import './Card.css'
import PdfContext from '../../context/pdfContext/PdfContext'
// import { Link } from 'react-router-dom'







// // Function to dynamically import all images from a directory
// const importAllImages = (requireContext) => {
//   return requireContext.keys().reduce((images, file) => {
//     images[file.replace('./', '')] = requireContext(file);
//     return images;
//   }, {});
// };

// // Import all images from the assets/images directory
// const images = importAllImages(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));





function Card({imgSource,title,links}) {
  const {linkk,setLinkk} = useContext(PdfContext) 
  return (
    // <div className='cardd'>
      
    //   <h1>hii</h1>
    //   <h1>{title}</h1>
    //   <p>{imgSource}</p>
    //   <iframe src={linkk} allow='autoplay' width='100vw' height='100vh'></iframe>
      
    // {/* //   <img src={imgSource} alt="" />
    // //   <h1>{title}</h1> */}

    //   {/* { 
    //     data1_sem1.map((item,index) => {
    //       console.log(item)
    //       return <p>{item.title}</p>
    //     })
    //   } */}
    // </div>

      <div className="cardd" onClick={() => {setLinkk(links)}}>
        
        {/* <img src={imgSource} alt={title} width="150" /> */}

        {/* <h1>hii</h1> */}
        <h4>{title}</h4>

      </div>


    // <Link to='/pdff' src={linkk}>
    // </Link>
  )
}

export default Card
