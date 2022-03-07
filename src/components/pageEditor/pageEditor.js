import { useState, useRef } from 'react'
import styled from 'styled-components'
import savePage from '../../util/savePage'
import { useDispatch, useSelector } from 'react-redux';
import { addNewPage, editPageTitle, editPageContent } from '../../app/page/pagesListSlice';
import { auth } from '../../util/firebase';
import {IoIosAdd} from 'react-icons/io'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import currentTheme from '../../themes/themes';
import { useSwipeable } from 'react-swipeable';
const theme = currentTheme('glass')
const S = {}


const PageEditor = (props) => {
    const {
        isDarkMode,
        setIsDarkMode
    } = props
    const dispatch = useDispatch()
    const currentJournal = useSelector(state => state.currentJournal.value)
    const pagesList = useSelector(state => state.pagesList.value )
    const initialAmount = useSelector(state => state.currentJournal.value.pageAmount)
    const [currentPage, setCurrentPage] = useState([pagesList[0][initialAmount - 1],pagesList[1][initialAmount - 1]])
    const [prevPage_, setPrevPage_] = useState( [pagesList[0][initialAmount - 2],pagesList[1][initialAmount - 2]])
    const [nextPage_, setNextPage_] = useState(['NEW PAGE 📄', 'Type here! ⌨'])
    const [pageAmount, setPageAmount] = useState(pagesList[0].length)
    const [pageIndex, setPageIndex] = useState(initialAmount)
    const editTitleRef = useRef()
    const [titleClicked, setTitleClicked] = useState(false)
    const [pageEditorTheme, setPageEditorTheme] = useState()
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
            setPrevPage_([pagesList[0][pageIndex - 3],pagesList[1][pageIndex - 3]])
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
    function handleContentChange(e){
        let tempList = [...pagesList[1]]
        tempList[pageIndex - 1] = e.target.value
        dispatch(editPageContent(tempList))
    }
    function handleSaveChanges(){
        savePage(auth.currentUser.email, currentJournal, pagesList[0], pagesList[1])
    }
    const handlers = useSwipeable({
        onSwipedLeft: (eventData) => { console.log(eventData)}
    })
    const handleKeyDown = e => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const textArea = e.currentTarget; // or use document.querySelector('#my-textarea');
            textArea.setRangeText(
              '\t',
              textArea.selectionStart,
              textArea.selectionEnd,
              'end'
            );
          }
        };
    S.PageEditor = styled.div`
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 999;
        background: ${theme.pageBgColor};
        overflow: hidden;
        filter: ${!isDarkMode ? 'invert(.8)' : 'none'};
    `


    return(
        <S.PageEditor id='PageEditor'>
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
            <S.Content id='PageEditorContent' {...handlers}>
                <S.TextArea 
                    id='PageEditorTextArea'
                    key={pageIndex}
                    defaultValue={currentPage[1]} 
                    onChange={e=>handleContentChange(e)}
                    onKeyDown={(e)=>handleKeyDown(e)}
                />
            </S.Content>
            <S.Footer>
                <S.SaveButton onClick={()=>handleSaveChanges()}>save</S.SaveButton>
            </S.Footer>
        </S.PageEditor>
    )
}

export default PageEditor



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
/* border-radius: 0; */
border: none;
text-align: center;
font-size: ${1.5 * theme.fontSizeMultiplyer}rem;
font-family: ${theme.fontFamily};

    @media (max-width: 550px) {
        font-size: ${1 * theme.fontSizeMultiplyer}rem;
    }

::placeholder {
    color: gray;
    font-size: ${1.5 * theme.fontSizeMultiplyer}rem;
    font-family:${theme.fontFamily};
    @media (max-width: 550px) {
        font-size: ${1 * theme.fontSizeMultiplyer}rem;
    }
}
:focus {
    outline: none;
}
`;
S.PageTitle = styled.div`
    /* margin-top: 3vh; */
    text-align: center;
    font-size: ${1.5 * theme.fontSizeMultiplyer}rem;
    width: fit-content;
    font-family:${theme.fontFamily};
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
S.Content = styled.div`
    width: 100vw;
    height: 80vh;
    margin: auto;
    background: ${theme.pageBgColor};
    padding: 5px;
    box-sizing: border-box;
    display: grid;
    justify-items: center;
`
S.TextArea = styled.textarea`
    width: 95%;
    height: 100%;
    line-height: 2rem;
    resize: none;
    border: none;
    background-image: linear-gradient(#F1F1F1 50%, #F9F9F9 50%);
    background-size: 100% 4rem;
    background-attachment: local;
    /* background: ${theme.pageBgColor}; */
    font-size: ${1.5 * theme.fontSizeMultiplyer}rem;
    :focus {
        outline: none;
    }
`
S.Footer = styled.div`
    width: 100%;
    height: 10vh;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns:1fr 1fr ;
`
S.SaveButton = styled.div`
    width: fit-content;
    font-size: ${1 * theme.fontSizeMultiplyer}rem;
    cursor: pointer;

`
S.PreviousPage = styled.div`
    width: 5vh;
    height: 5vh;
    font-size: 5vh;
    cursor: pointer;
    line-height: 6vh;
    transition: 250ms;
    color: ${theme.iconDarkColor};

`
S.NextPage = styled.div`
    width: 5vh;
    height: 5vh;
    font-size: 5vh;
    cursor: pointer;
    line-height: 6vh;
    transition: 250ms;
    color: ${theme.iconDarkColor};
`


