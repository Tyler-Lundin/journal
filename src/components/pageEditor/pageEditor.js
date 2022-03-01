import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import savePage from '../../util/savePage'
import { useDispatch, useSelector } from 'react-redux';
import { addNewPage, editPageTitle, editPageContent } from './pagesListSlice';


const S = {}


const PageEditor = (props) => {
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
    // console.log('####################################### RERENDER LINE')
    // console.log('currentPage', currentPage)
    // console.log('prevPage_', prevPage_)
    // console.log('nextPage_', nextPage_)

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
    
    function handleKeyPress (e) {
        if (e.key === 'Enter') {
            editTitleRef.current.blur()
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
        savePage(currentJournal, pagesList[0], pagesList[1])
    }


    return(
        <S.PageEditor>
            <S.Head>
                <S.PageTitle onClick={()=>setTitleClicked(true)}>
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
            </S.Head>
            <S.Content>
                <S.TextArea 
                    id='pageEditorTextArea'
                    key={pageIndex}
                    defaultValue={currentPage[1]} 
                    onChange={e=>handleContentChange(e)}
                />
            </S.Content>
            <S.Footer>
                <S.PreviousPage onClick={()=>prevPage()}>&#60;</S.PreviousPage>
                <S.SaveButton onClick={()=>handleSaveChanges()}>SAVE CHANGES</S.SaveButton>
                <S.NextPage onClick={()=>nextPage()}>{pageIndex == pageAmount ? '+' : '>'}</S.NextPage>
            </S.Footer>
        </S.PageEditor>
    )
}

export default PageEditor


S.PageEditor = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 999;
    background: #acbcfe;
`
S.Head = styled.div`
    width: 100%;
    height: 10vh;
    display: grid;
    /* grid-auto-flow: column; */
    justify-items: center;
    align-items: center;
`
S.TitleContainer = styled.div`

`
S.EditTitle = styled.input`
background: none;
/* border-radius: 0; */
border: none;
text-align: center;
font-size: 2.5rem;

::placeholder {
    color: gray;
    font-size: 2.5rem;
}
:focus {
    outline: none;
}
`;
S.PageTitle = styled.div`
    width: fit-content;
    /* margin-top: 3vh; */
    font-size: 2.5rem;
    text-align: center;
    font-weight: 700;
    position: absolute;
`
S.CounterContainer = styled.div`
    display: grid;
    justify-content: center;
    position: absolute;
    top: 3vh;
    left: 3vh;
`
S.PageCounter = styled.div`
    width: fit-content;
    text-align: center;
    line-height: 30px;
`
S.Content = styled.div`
    width: 98%;
    height: 80vh;
    margin: auto;
    background: whitesmoke;
    padding: 5px;
    box-sizing: border-box;
`
S.TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    background: whitesmoke;
    :focus {
        outline: none;
    }
`
S.Footer = styled.div`
    width: 100%;
    height: 10vh;
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    align-items: center;
    text-align: center;

`
S.SaveButton = styled.div`
    width: 100%;
    height: 7vh;
    font-size: 2rem;
    line-height: 7vh;
    transition: 250ms;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid black;
    :hover {
        background: white;
    }
`
S.PreviousPage = styled.div`
    width: 7vh;
    height: 7vh;
    font-size: 7vh;
    cursor: pointer;
    line-height: 6vh;
    transition: 250ms;
    border-radius: 50%;
    border: 2px solid black;
    :hover {
        background: white;
    }
`
S.NextPage = styled.div`
    width: 7vh;
    height: 7vh;
    font-size: 7vh;
    cursor: pointer;
    line-height: 6vh;
    transition: 250ms;
    border-radius: 50%;
    border: 2px solid black;
    :hover {
        background: white;
    }

`


