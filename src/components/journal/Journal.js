import styled from 'styled-components'
import BlankJournal from './../../assets/JournalBlank.png'
const S = {}
S.Container = styled.div`
    transition: 300ms;
    :hover {
        opacity: .7;
        cursor: pointer;
        transform: translateY(1%);
    }
`
S.Journal = styled.div`
    position: relative;
    
`
S.JournalIcon = styled.img`
    width: 250px;
    position: relative;
`
S.JournalTitle = styled.h1`
    position: absolute;
    text-align: center;
    white-space: nowrap;
    top: 2rem;
    left: 50%;
    transform: translateX(-45%);
`
const Journal = (props) => {
    const {title, index, setCurrentJournal} = props
    return (
        <S.Container onClick={()=>setCurrentJournal(index)} id={`journal_${title}_${Math.random()}`}>
            <S.Journal>
                <S.JournalIcon src={BlankJournal}/>
                <S.JournalTitle>{title || 'title'}</S.JournalTitle>
            </S.Journal>
        </S.Container>
    )
}

export default Journal