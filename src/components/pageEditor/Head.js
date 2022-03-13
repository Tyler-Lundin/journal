import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import {IoIosAdd} from 'react-icons/io'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { addNewPage, editPageTitle } from '../../app/page/pagesListSlice';

const Head = (props) => {
    const dispatch = useDispatch()
    const {
        pageIndex,
        setPageIndex,
        // pageAmount,
        // setPageAmount,
        currentPage,
        setCurrentPage,
        // editTitleRef,
        // prevPage_,
        // setPrevPage_,
        // nextPage_,
        // setNextPage_,
        pagesList,
        initialAmount
    } = props
    const [prevPage_, setPrevPage_] = useState( [pagesList[0][initialAmount - 2],pagesList[1][initialAmount - 2]])
    const [nextPage_, setNextPage_] = useState(['NEW PAGE 📄', 'Type here! ⌨'])
    const [pageAmount, setPageAmount] = useState(pagesList[0].length)
    const editTitleRef = useRef()
    const [titleClicked, setTitleClicked] = useState(false)
    function prevPage() {
        if (pageIndex > 1) {
            setPageIndex(pageIndex - 1)
            setCurrentPage(prevPage_)
            setPrevPage_([pagesList[0][pageIndex - 3],pagesList[1][pageIndex - 3]])
            setNextPage_([pagesList[0][pageIndex - 1],pagesList[1][pageIndex - 1]])
        } else {
            setCurrentPage([pagesList[0][pageIndex - 1], pagesList[1][pageIndex - 1]])
        }
    }
    async function nextPage() {
        if (pageIndex < pageAmount) {
            setCurrentPage(nextPage_)
            setPrevPage_([pagesList[0][pageIndex - 1],pagesList[1][pageIndex - 1]])
            setNextPage_([pagesList[0][pageIndex + 1],pagesList[1][pageIndex + 1]])
            if (pageIndex == pageAmount - 1) {
                setNextPage_(['NEW PAGE 📄', 'Type here! ⌨'])
            }
        }
        if (pageIndex == pageAmount) { // NEW PAGE BUTTON
            setPrevPage_([pagesList[0][pageIndex - 1],pagesList[1][pageIndex - 1]])
            setCurrentPage(nextPage_)
            dispatch(addNewPage())
            setPageAmount(pageAmount + 1)
            setPageIndex(pageIndex + 1)
        }
        setPageIndex(pageIndex + 1)
    }
    let checkOnce = true 
    function handleKeyPress (e) {
        switch(e.key) {
            case 'Enter':
                editTitleRef.current.blur()
                checkOnce = true
                break;
            case 'Escape':
                editTitleRef.current.value = currentPage[0]
                editTitleRef.current.blur()
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                if (checkOnce) {
                    editTitleRef.current.value = currentPage[0]
                    editTitleRef.current.setSelectionRange(Math.floor(currentPage[0].length / 2), Math.floor(currentPage[0].length / 2))
                }
                checkOnce = false
                break;
        }
    }
    function handleTitleChange (e) {
        if (e.target.value != '') {
            let tempList = [...pagesList[0]]
            tempList[pageIndex - 1] = e.target.value
            dispatch(editPageTitle(tempList))
            currentPage[0] = e.target.value
        }
        setTitleClicked(false)
    }
  return (
    <S.Head id='PageEditorHead'>
    <S.PreviousPage onClick={()=>prevPage()} ><MdKeyboardArrowLeft color={pageIndex == 1 ? 'rgba(0,0,0,0.5)' : 'black'}/></S.PreviousPage>
    <S.TitleCounterContainer id='TitleCounterContainer'>
        <S.PageTitle id='PageTitle' onClick={()=>setTitleClicked(true)}>
            {titleClicked ? 
                <S.EditTitle 
                    onBlur={(e)=>handleTitleChange(e)} 
                    placeholder={currentPage[0]} 
                    maxLength="25" 
                    autoFocus
                    onKeyUp={handleKeyPress}
                    ref={editTitleRef}
                /> 
                : currentPage[0]
            }

        </S.PageTitle>
        <S.CounterContainer >
            <S.PageCounter>
            {pageIndex}/{pageAmount}
            </S.PageCounter>
        </S.CounterContainer >
    </S.TitleCounterContainer>
    
    <S.NextPage onClick={()=>nextPage()}>{pageIndex == pageAmount ? <IoIosAdd/> : <MdKeyboardArrowRight/>}</S.NextPage>
    </S.Head>
  )
}

export default Head

const S = {}

S.Head = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50px 2fr 50px;
    justify-items: center;
    align-items: center;
    justify-content: center;
`
S.TitleCounterContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: grid;
    grid-template-rows: 3fr 1fr;
    justify-items: center;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.3);
`

S.EditTitle = styled.input`
background: none;
border: none;
text-align: center;
font-size: 1.5rem;
font-family: 'le-havre';

    @media (max-width: 550px) {
        font-size: 1rem;
    }

::placeholder {
    color: gray;
    font-size: 1.5rem;
    font-family:'le-havre';
    @media (max-width: 550px) {
        font-size: 1rem;
    }
}
:focus {
    outline: none;
}
`;
S.PageTitle = styled.div`
    text-align: center;
    font-size: 1.5rem;
    width: fit-content;
    font-family: 'le-havre';
    @media (max-width: 550px) {
        font-size: 1rem;
    }
    
`
S.CounterContainer = styled.div`
    display: grid;
    justify-content: center;
`
S.PageCounter = styled.div`
    width: fit-content;
    text-align: center;
    line-height: 30px;
`
S.PreviousPage = styled.div`
    width: 5vh;
    height: 5vh;
    font-size: 5vh;
    cursor: pointer;
    line-height: 6vh;
    transition: 250ms;
    color: black;

`
S.NextPage = styled.div`
    width: 5vh;
    height: 5vh;
    font-size: 5vh;
    cursor: pointer;
    line-height: 6vh;
    transition: 250ms;
    color: black;
`
