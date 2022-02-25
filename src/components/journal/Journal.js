import styled from 'styled-components'
import BlankJournal from './../../assets/JournalBlank.png'
import { upDown } from '../../util/animations'
const Journal = (props) => {
    const {
        title, 
        index, 
        setJournalIndex,
        handlePrompt
    } = props

    const handleClick = () => {
        setJournalIndex(index)
        handlePrompt(`Open Journal '${title}'?`, 'journal')
    }

    return (
        <S.Container onClick={()=>handleClick(index)} id={`journal_${title}_${Math.random()}`}>
            <S.Journal>
                <S.JournalIcon src={BlankJournal}/>
                <S.TitleContainer>
                    <S.JournalTitle>{title || 'title'}</S.JournalTitle>
                </S.TitleContainer>
            </S.Journal>
        </S.Container>
    )
}

export default Journal

const S = {}
S.Container = styled.div`
    transition: 300ms;
    :hover {
        animation: ${upDown} .8s infinite alternate ease-out;
        
    }
`
S.Journal = styled.div`
    position: relative;
    
`
S.JournalIcon = styled.img`
    width: 250px;
    position: relative;
`
S.JournalTitle = styled.h2`
    text-align: center;
    white-space: nowrap;

`
S.TitleContainer = styled.div`
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translateX(-43%);
    max-width: 220px;
`