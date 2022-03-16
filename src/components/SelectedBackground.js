import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {loadBackground} from '../util/animations'
import {
  img0, img0small,
  img1, img1small,
  img2, img2small,
  img3, img3small,
  img4, img4small,
  img5, img5small,
  img6, img6small,
  img7, img7small,
  img8, img8small,
  img9, img9small,
  img10, img10small,
  img11, img11small,
  img12, img12small,
  img13, img13small,
  img14, img14small,
  img15, img15small,
  img16, img16small,
  img17, img17small
} from '../images'



const SelectedBackground = () => {
    const [isMobile,setIsMobile] = useState(window.screen.width < 600)
    const setWidth = () => {
      setIsMobile(window.screen.width < 600)
    }
    window.addEventListener('resize', setWidth)
    
    console.log(isMobile)
    const selectedBackground = useSelector(state=>state.selectedBackground.value)
    const select = () => {
      switch(selectedBackground){
        case 0: return <img src={isMobile ? img0small : img0} loading='lazy' alt='by Your Friend Andy on Unsplash'/>
        case 1: return <img src={isMobile ? img1small : img1} loading='lazy' alt='by Valentin Müller on Unsplash'/>
        case 2: return <img src={isMobile ? img2small : img2} loading='lazy' alt='by Johannes Plenio on Unsplash'/>
        case 3: return <img src={isMobile ? img3small : img3} loading='lazy' alt='by Reign Abarintos on Unsplash'/>
        case 4: return <img src={isMobile ? img4small : img4} loading='lazy' alt='by Sandra Ahn Mode on Unsplash'/>
        case 5: return <img src={isMobile ? img5small : img5} loading='lazy' alt='by Luc Dobigeon on Unsplash'/>
        case 6: return <img src={isMobile ? img6small : img6} loading='lazy' alt='by J Lee on Unsplash'/>
        case 7: return <img src={isMobile ? img7small : img7} loading='lazy' alt='by Ryan Hutton on Unsplash'/>
        case 8: return <img src={isMobile ? img8small : img8} loading='lazy' alt='by eberhard 🖐 grossgasteiger on Unsplash'/>
        case 9: return <img src={isMobile ? img9small : img9} loading='lazy' alt='by Silvestri Matteo on Unsplash'/>
        case 10: return <img src={isMobile ? img10small : img10} loading='lazy' alt='by Marco De Hevia on Unsplash'/>
        case 11: return <img src={isMobile ? img11small : img11} loading='lazy' alt='by Roma Kaiuk on Unsplash'/>
        case 12: return <img src={isMobile ? img12small : img12} loading='lazy' alt='by Kseniia Rastvorova on Unsplash'/>
        case 13: return <img src={isMobile ? img13small : img13} loading='lazy' alt='by TOMOKO UJI on Unsplash'/>
        case 14: return <img src={isMobile ? img14small : img14} loading='lazy' alt='by Rohit Tandon on Unsplash'/>
        case 15: return <img src={isMobile ? img15small : img15} loading='lazy' alt='by Kalen Emsley on Unsplash'/>
        case 16: return <img src={isMobile ? img16small : img16} loading='lazy' alt='by Benjamin Voros on Unsplash'/>
        case 17: return <img src={isMobile ? img17small : img17} loading='lazy' alt='by Kalen Emsley on Unsplash'/> 
        default: return <img src={isMobile ? img17small : img17} loading='lazy' alt='by Kalen Emsley on Unsplash'/>
      }
    }
  return (
    <S.BG key={isMobile}>
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
    z-index: 5;
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