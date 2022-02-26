import styled from 'styled-components'
const S = {}


const PageEditor = (props) => {
    const {
        handlePageCounter,
        pageIndex,
        totalPages,
        currentPage
    } = props
    return(
        <S.PageEditor>
            <S.Head>
                <S.CounterContainer >
                <S.PageCounter>
                    {`${pageIndex}/${totalPages}`}
                </S.PageCounter>
                </S.CounterContainer >
                <S.PageTitle>
                    {currentPage[0]}
                </S.PageTitle>
                <div style={{width: '30px', height: '30px'}}/>
            </S.Head>
            <S.Content>
                <S.TextArea defaultValue={currentPage[1]}>
                    
                </S.TextArea>
            </S.Content>
            <S.Footer>

            </S.Footer>
        </S.PageEditor>
    )
}

export default PageEditor


S.PageEditor = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 99999;
    background: #acbcfe;
`
S.Head = styled.div`
    width: 100%;
    height: 10vh;
    display: grid;
    /* grid-auto-flow: column; */
    grid-template-columns: 40px 5fr 40px;
    justify-items: center;
`
S.TitleContainer = styled.div`

`
S.PageTitle = styled.div`
    height: 30px;
    width: fit-content;
    background: whitesmoke;
    margin-top: 3vh;
    text-align: center;
    font-weight: 700;
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
`

