import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import {IoIosAdd} from 'react-icons/io'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { addNewPage, editPageTitle } from '../../app/page/pagesListSlice';
// const darkMode = useSelector(state => state.darkMode.value)
// , useSelector 
// background: rgb(${props=>props.darkMode ? '30,30,30' : '200,200,200'});
// color: ${props=> props.darkMode ? 'white' : 'black'}; 
const Head = (props) => {
    const dispatch = useDispatch()
    const {
        pageIndex,
        setPageIndex,
        currentPage,
        setCurrentPage,
        pagesList,
        initialAmount
    } = props
    const darkMode = useSelector(state => state.darkMode.value)
    const fontSize = useSelector(state => state.fontSize.value)
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
    <S.PreviousPage 
        onClick={()=>prevPage()} 
    >
        <MdKeyboardArrowLeft 
            color = {   
                    pageIndex == 1 ? 
                    darkMode ? 'gray' : 'rgba(0,0,0,0.5)' : 
                    darkMode ? 'white' : 'black' 
            }
        />
    </S.PreviousPage>

    <S.TitleCounterContainer id='TitleCounterContainer'>
        <S.PageTitle 
            id='PageTitle' 
            onClick={()=>setTitleClicked(true)}
            darkMode={darkMode}
            fontSize={fontSize}
        >
            {titleClicked ? 
                <S.EditTitle 
                    onBlur={(e)=>handleTitleChange(e)} 
                    placeholder={currentPage[0]} 
                    maxLength="25" 
                    autoFocus
                    onKeyUp={handleKeyPress}
                    ref={editTitleRef}
                    fontSize={fontSize}
                    darkMode={darkMode}
                /> 
                : currentPage[0]
            }

        </S.PageTitle>
        <S.CounterContainer >
            <S.PageCounter darkMode={darkMode} fontSize={fontSize}>
            {pageIndex}/{pageAmount}
            </S.PageCounter>
        </S.CounterContainer >
    </S.TitleCounterContainer>
    
    <S.NextPage 
        onClick={()=>nextPage()}
        darkMode={darkMode}
    >
        { pageIndex == pageAmount ? 
            <IoIosAdd/> : 
            <MdKeyboardArrowRight/>
        }
    </S.NextPage>

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
    height: calc(var(--vh, 1vh) * 10);
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
font-size: ${props => props.fontSize * 1.5}rem;
font-family: 'le-havre';
color: ${props=>props.darkMode ? 'white' : 'black'};

    @media (max-width: 550px) {
        font-size: 1rem;
        font-size: ${props => props.fontSize * 1}rem;
    }

::placeholder {
    color: gray;
    font-size: 1.5rem;
    font-size: ${props => props.fontSize * 1.5}rem;
    font-family:'le-havre';
    @media (max-width: 550px) {
        font-size: 1rem;
        font-size: ${props => props.fontSize * 1}rem;
    }
}
:focus {
    outline: none;
}
`;
S.PageTitle = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-size: ${props => props.fontSize * 1.5}rem;
    width: fit-content;
    font-family: 'le-havre';
    color: ${props=>props.darkMode ? 'white' : 'black'};
    @media (max-width: 550px) {
        font-size: 1rem;
        font-size: ${props => props.fontSize * 1}rem;
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
    color: ${props=>props.darkMode ? 'white' : 'black'};
`
S.PreviousPage = styled.div`
    width: 5vh;
    height: 5vh;
    font-size: 5vh;
    cursor: pointer;
    line-height: 6vh;
    transition: 250ms;
    color: ${props=> props.darkMode ? 'white' : 'black'}; 
`
S.NextPage = styled.div`
    width: 5vh;
    height: 5vh;
    font-size: 5vh;
    cursor: pointer;
    line-height: 6vh;
    transition: 250ms;
    color: ${props=> props.darkMode ? 'white' : 'black'}; 
`
