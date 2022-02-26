import { useState, useRef } from 'react'
import styled from 'styled-components'
import savePage from './../../util/savePage'
const S = {}


const PageEditor = (props) => {
    const {
        handlePageCounter,
        pageIndex,
        pages,
        totalPages,
        currentPage,
        setCurrentPage,
        journalIndex,
        currentJournal
    } = props

    const [currentPageContent, setCurrentPageContent] = useState()
    const [titleClicked, setTitleClicked] = useState(false)
    const editTitleRef = useRef();
    const [pageTitle, setPageTitle] = useState(currentPage[0])
    function changeTitle (e) {
        if (e.target.value !== '') {
            setPageTitle(e.target.value)
        }
        setTitleClicked(false)
    }

    function handleKeyPress (e) {
        if (e.key === 'Enter') {
            editTitleRef.current.blur()
        }
    }
    function handleSavePage () {
        savePage(currentJournal, pages, pageIndex, currentPageContent, pageTitle)
    }

    return(
        <S.PageEditor>
            <S.Head>
                <S.PageTitle onClick={()=>setTitleClicked(true)}>
                    {titleClicked ? 
                        <S.EditTitle 
                            onBlur={(e)=>{changeTitle(e)}} 
                            placeholder={pageTitle} 
                            maxLength="25" 
                            autoFocus
                            onKeyUp={handleKeyPress}
                            ref={editTitleRef}
                        /> 
                        :
                        currentPage[0]
                    }

                </S.PageTitle>
                <S.CounterContainer >
                    <S.PageCounter>
                        {`${pageIndex}/${totalPages}`}
                    </S.PageCounter>
                </S.CounterContainer >
            </S.Head>
            <S.Content>
                <S.TextArea id='pageEditorTextArea' defaultValue={currentPage[1]} onChange={e=>setCurrentPageContent(e.target.value)}>
                    
                </S.TextArea>
            </S.Content>
            <S.Footer>
                <S.PreviousPage>^</S.PreviousPage>
                <S.SaveButton onClick={()=>handleSavePage()}>SAVE CHANGES</S.SaveButton>
                <S.NextPage>^</S.NextPage>
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
    line-height: 7vh;
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

