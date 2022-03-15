import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {loadBackground} from '../util/animations'
import {img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17} from '../images/imageListInOrder'



const SelectedBackground = () => {
    const selectedBackground = useSelector(state=>state.selectedBackground.value)
    const select = () => {
      switch(selectedBackground){
        case 0: return <img src={img0} loading='lazy' alt='by Your Friend Andy on Unsplash'/>
        case 1: return <img src={img1} loading='lazy' alt='by Valentin Müller on Unsplash'/>
        case 2: return <img src={img2} loading='lazy' alt='by Johannes Plenio on Unsplash'/>
        case 3: return <img src={img3} loading='lazy' alt='by Reign Abarintos on Unsplash'/>
        case 4: return <img src={img4} loading='lazy' alt='by Sandra Ahn Mode on Unsplash'/>
        case 5: return <img src={img5} loading='lazy' alt='by Luc Dobigeon on Unsplash'/>
        case 6: return <img src={img6} loading='lazy' alt='by J Lee on Unsplash'/>
        case 7: return <img src={img7} loading='lazy' alt='by Ryan Hutton on Unsplash'/>
        case 8: return <img src={img8} loading='lazy' alt='by eberhard 🖐 grossgasteiger on Unsplash'/>
        case 9: return <img src={img9} loading='lazy' alt='by Silvestri Matteo on Unsplash'/>
        case 10: return <img src={img10} loading='lazy' alt='by Marco De Hevia on Unsplash'/>
        case 11: return <img src={img11} loading='lazy' alt='by Roma Kaiuk on Unsplash'/>
        case 12: return <img src={img12} loading='lazy' alt='by Kseniia Rastvorova on Unsplash'/>
        case 13: return <img src={img13} loading='lazy' alt='by TOMOKO UJI on Unsplash'/>
        case 14: return <img src={img14} loading='lazy' alt='by Rohit Tandon on Unsplash'/>
        case 15: return <img src={img15} loading='lazy' alt='by Kalen Emsley on Unsplash'/>
        case 16: return <img src={img16} loading='lazy' alt='by Benjamin Voros on Unsplash'/>
        case 17: return <img src={img17} loading='lazy' alt='by Kalen Emsley on Unsplash'/> 
        default: return <img src={img17} loading='lazy' alt=''/>
      }
    }
  return (
    <S.BG>
      {select()}
    </S.BG>
  )
}

export default SelectedBackground

const S = {}

S.BG = styled.div`
    background: rgb(30,30,30);
    background-size: cover;
    transform-origin: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    opacity: .7;
    position: absolute;
    animation: ${loadBackground} 2s forwards; 
    display: flex;
    img {
      min-height: 100%;
      min-width: 100%;
      object-fit: cover;
      align-self: center;
      justify-self: center;
    }
`