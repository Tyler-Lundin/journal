import styled from 'styled-components'
import BlankJournal from './../../assets/JournalBlank.png'
import { upDown } from '../../util/animations'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentJournal } from './currentJournalSlice'
import loadSelectedJournal from '../../util/loadSelectedJournal'
const Journal = (props) => {
    const {index, handlePrompt} = props
    const dispatch = useDispatch()
    const journalsList = useSelector(state => state.journalsList.value)
    const selectedTitle = journalsList.journalTitles[index]
    const selectedID = journalsList.journalIDs[index]
    
    const handleClick = async (index) => {
        const loadSelected = await loadSelectedJournal(selectedID)
        dispatch(setCurrentJournal(loadSelected))
        handlePrompt(`Open Journal '${selectedTitle}'?`, 'journal')
    }

    return (
        <S.Container onClick={()=>handleClick(index)} id={selectedID}>
            <S.Journal>
                <S.JournalIcon src={BlankJournal}/>
                <S.TitleContainer>
                    <S.JournalTitle>{selectedTitle}</S.JournalTitle>
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