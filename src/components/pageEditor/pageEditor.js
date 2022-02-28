import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import savePage from './../../util/savePage'
import { useDispatch, useSelector } from 'react-redux';


const S = {}


const PageEditor = (props) => {
    const dispatch = useDispatch()

    const currentJournal = useSelector(state => state.currentJournal.value)
    const pagesList = useSelector(state => state.pagesList.value )
    const pageTitle = useSelector(state => state.currentPage.value.pageTitle)
    const pageContent = useSelector(state => state.currentPage.value.pageContent)
    const user = useSelector(state => state.user.value)
    const editTitleRef = useRef()
    const [titleClicked, setTitleClicked] = useState(false)
    const [unsavedPage, setUnsavedChanges] = useState({unsavedTitle: pageTitle, unsavedContent: pageContent})

    function prevPage() {
        
    }
    function nextPage() {
        
    }
    
    function handleKeyPress (e) {
        if (e.key === 'Enter') {
            editTitleRef.current.blur()
        }
    }
    function handleTitleChange (e) {
        if (e.target.value != '') {
            unsavedPage.unsavedTitle = e.target.value
        }
        setTitleClicked(false)
    }
    function handleContentChange(e){
        unsavedPage.unsavedContent = e.target.value
    }
    function handleSaveChanges(){
        savePage(currentJournal, unsavedPage.unsavedTitle, unsavedPage.unsavedContent)
    }



    return(
        <S.PageEditor>
            <S.Head>
                <S.PageTitle onClick={()=>setTitleClicked(true)}>
                    {titleClicked ? 
                        <S.EditTitle 
                            onBlur={(e)=>handleTitleChange(e)} 
                            placeholder={pageTitle} 
                            maxLength="25" 
                            autoFocus
                            onKeyUp={handleKeyPress}
                            ref={editTitleRef}
                        /> 
                        :
                        unsavedPage.unsavedTitle
                    }

                </S.PageTitle>
                <S.CounterContainer >
                    <S.PageCounter>
                       
                    </S.PageCounter>
                </S.CounterContainer >
            </S.Head>
            <S.Content>
                <S.TextArea 
                    id='pageEditorTextArea' 
                    defaultValue={pageContent} 
                    onChange={e=>handleContentChange(e)}
                />
            </S.Content>
            <S.Footer>
                <S.PreviousPage onClick={()=>prevPage()}>^</S.PreviousPage>
                <S.SaveButton onClick={()=>handleSaveChanges()}>SAVE CHANGES</S.SaveButton>
                <S.NextPage onClick={()=>nextPage()}>^</S.NextPage>
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
    grid-template-rows: 32px 32px;
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
::placeholder {
    color: white;
    font-size: 1rem;
}
:focus {
    outline: none;
}
`;
S.PageTitle = styled.div`
    height: 30px;
    width: fit-content;
    background: whitesmoke;
    margin-top: 3vh;
    text-align: center;
    font-weight: 700;
    position: absolute;
`
S.CounterContainer = styled.div`
    width: 100px;
    display: grid;
    justify-content: center;
`
S.PageCounter = styled.div`
    width: fit-content;
    height: 30px;
    background: whitesmoke;
    margin-top: 3vh;
    text-align: center;
    line-height: 28px;
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
    border-radius: 15px;
    background: rgba(255,255,255,0.2);
    transition: 250ms;
    cursor: pointer;
    :hover {
        background: rgba(255,255,255,0.5);

    }
`

S.PreviousPage = styled.div`
    width: 7vh;
    height: 7vh;
    font-size: 7vh;
    transform: rotate(-90deg);
    background: rgba(255,255,255,0.2);
    cursor: pointer;
    border-radius: 50%;
    line-height: 8vh;
    transition: 250ms;
    :hover {
        background: rgba(255,255,255,0.5);
    }
`

S.NextPage = styled.div`
    width: 7vh;
    height: 7vh;
    font-size: 7vh;
    cursor: pointer;
    transform: rotate(90deg);
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    line-height: 8vh;
    transition: 250ms;
    :hover {
        background: rgba(255,255,255,0.5);
    }

`



// let _pagesList = getPages()
    // const {
    //     handlePageCounter,
    //     pageIndex,
    //     pages,
    //     totalPages,
    //     currentPage,
    //     setCurrentPage,
    //     journalIndex,
    //     currentJournal,
    //     setUnsavedChanges,
    //     setPageIndex
    // } = props
    // const [currentPageContent, setCurrentPageContent] = useState()
    // const [titleClicked, setTitleClicked] = useState(false)
    // const editTitleRef = useRef();
    // const [pageTitle, setPageTitle] = useState(currentPage[0])
    // const [selectedPage, setSelectedPage] = useState(1)
    // const [unsavedTitle, setUnsavedTitle] = useState(false)
    // function changeTitle (e) {
    //     setUnsavedTitle(true)
    //     if (e.target.value !== '') {
    //         setPageTitle(e.target.value)
    //     }
    //     setTitleClicked(false)
    //     setUnsavedChanges(true)
    // }

    // function handleKeyPress (e) {
    //     if (e.key === 'Enter') {
    //         editTitleRef.current.blur()
    //     }
    // }
    // function handleSavePage () {
    //     savePage(currentJournal, pages, pageIndex, currentPageContent, pageTitle)
    //     setUnsavedTitle(false)
    // }
    // function prevPage () {
    //     if (unsavedTitle) {
    //         handleSavePage()
    //     }
    //     if (pages[0].length - 1 <= selectedPage) {
    //         setCurrentPage([pages[0][selectedPage - 1], pages[1][selectedPage - 1]])
    //         setSelectedPage(selectedPage - 1)
    //         setPageIndex(pageIndex - 1)
    //         setPageTitle(null)
    //     }
    // }
    // function nextPage () {
    //     if (unsavedTitle) {
    //         handleSavePage()
    //     }
    //     if (pages[0].length - 1 > selectedPage) {
    //         setCurrentPage([pages[0][selectedPage + 1], pages[1][selectedPage + 1]])
    //         setSelectedPage(selectedPage + 1)
    //         setPageIndex(pageIndex + 1)
    //         setPageTitle(null)
    //     }
    // }
    // useEffect(()=>{
        
    //     dispatch()
    //     setCurrentPage([pages[0][totalPages - 1],pages[1][totalPages - 1]])
    // },[totalPages])