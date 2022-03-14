import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17} from '../images/imageListInOrder'

const SelectedBackground = () => {
    const selectedBackground = useSelector(state=>state.selectedBackground.value)
    // const imageSource = require(`../images/imageListInOrder/img${selectedBackground}.jpg` )
    const select = () => {
      switch(selectedBackground){
        case 0: return img0
        case 1: return img1
        case 2: return img2
        case 3: return img3
        case 4: return img4
        case 5: return img5
        case 6: return img6
        case 7: return img7
        case 8: return img8
        case 9: return img9
        case 10: return img10
        case 11: return img11
        case 12: return img12
        case 13: return img13
        case 14: return img14
        case 15: return img15
        case 16: return img16
        case 17: return img17
      }
    }
  return (
    <S.BG style={{backgroundImage: `url(${select(selectedBackground)})`}}/>
  )
}

export default SelectedBackground

const S = {}

S.BG = styled.div`
    background: rgb(30,30,30);
    background-size: 100%;
    transform-origin: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    opacity: .7;
    position: absolute;
`