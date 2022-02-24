import styled from 'styled-components'

const S = {}

S.Scroller = styled.div`
    position:absolute;
    top: 50%;
    transform: translateY(-50%);
    
`
S.DisplayJournals = styled.div`
    max-width: 100vw;
    display: grid;
    grid-auto-flow:column;
    grid-gap: 1.5rem;
    overflow-x: auto;
    padding-bottom: 1rem;
    ::after {
        content: "";
        display: block;
        right: -2rem;
        width: 2rem;
        height: 1px;
    }
    ::before {
        content: "";
        display: block;
        right: -2rem;
        width: 2rem;
        height: 1px;
    }
`

const DisplayJournals = (props) => {
    const {children} = props

    return (
        <S.Scroller>
            <S.DisplayJournals id='journalsDisplay'>
                {children}
            </S.DisplayJournals>
        </S.Scroller>
    )
}

export default DisplayJournals