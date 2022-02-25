import styled from 'styled-components'
const S = {}


const PageEditor = (props) => {
    const {
        handlePageCounter
    } = props
    return(
        <S.PageEditor>
            <S.Head>
                <S.CounterContainer >
                <S.PageCounter>
                    9/9
                </S.PageCounter>
                </S.CounterContainer >
                <S.PageTitle>

                </S.PageTitle>
                <div style={{width: '30px', height: '30px'}}/>
            </S.Head>
            <S.Content>

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
    grid-auto-flow: column;
    justify-items: center;
`
S.PageTitle = styled.div`
    height: 30px;
    width: 60vw;
    background: whitesmoke;
    margin-top: 3vh;

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
`

S.Content = styled.div`
    width: 98%;
    height: 80vh;
    margin: auto;
    background: whitesmoke;
`

S.Footer = styled.div`
    width: 100%;
    height: 10vh;
`

