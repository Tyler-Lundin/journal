import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {setBackground} from '../../app/settings/selectedBackgroundSlice'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { BsImageAlt } from 'react-icons/bs'


const SelectBackground = (props) => {
    const selection_ = useSelector(state=> state.selectedBackground.value)
    const dispatch = useDispatch()

    const handlePrevious = () => {
        if (selection_ > 1) {
            const s_ = selection_ - 1
            dispatch(setBackground(s_))
            setTimeout(props.saveSettings('_','_',s_), 1000)
        }
    }

    const handleNext = () => {
        if (selection_ < 17) {
            const s_ = selection_ + 1
            dispatch(setBackground(s_))
            setTimeout(props.saveSettings('_','_',s_), 1000)
        }
    }
  return (
    <S.SelectBG>
        <S.Previous onClick={handlePrevious}>
            <MdKeyboardArrowLeft size={'100%'}/>
        </S.Previous>
        {/*  */}
        <S.Image>
            <BsImageAlt size={'100%'}/>
        </S.Image>
        <S.Next onClick={handleNext}>
            <MdKeyboardArrowRight size={'100%'}/>
        </S.Next>
    </S.SelectBG>
  )
}

export default SelectBackground

const S = {}

S.SelectBG = styled.div`
    width: 180px;
    height: 45px;
    display: grid;
    grid-auto-flow: column;
`
S.Image = styled.div`
    width: 60px;
    height: 45px;
`
S.Next = styled.div`
    width: 60px;
    height: 45px;
`
S.Previous = styled.div`
    width: 60px;
    height: 45px;
`