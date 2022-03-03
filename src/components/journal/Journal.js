import styled from 'styled-components'
import BlankJournal from './../../assets/JournalBlank.png'
import { upDown } from '../../util/animations'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentJournalTitle, setCurrentJournalID, setCurrentJournalPageAmount } from './currentJournalSlice'
import { promptOpenJournal } from '../prompt/promptSlice'
import getPages from '../../util/getPages'
import { setCurrentPageContent, setCurrentPageTitle, setCurrentPageIndex } from '../pageEditor/currentPageSlice'
import { setPageList } from '../pageEditor/pagesListSlice'
const Journal = (props) => {
    const {index} = props
    const dispatch = useDispatch()
    const journalsList = useSelector(state => state.journalsList.value)
    const selectedTitle = journalsList.journalTitles[index]
    const selectedID = journalsList.journalIDs[index]
    const user = useSelector(state=> state.user.value)

    const handleClick = async (index) => { 
        const preloadPages = await getPages(selectedID)
        const journalLength = preloadPages.pageTitles.length
        const preloadedTitle = preloadPages.pageTitles[journalLength - 1]
        const preloadedContent = preloadPages.pageContent[journalLength - 1]
        dispatch(setPageList([preloadPages.pageTitles,preloadPages.pageContent]))
        dispatch(setCurrentJournalPageAmount(journalLength))
        dispatch(setCurrentJournalTitle(selectedTitle))
        dispatch(setCurrentJournalID(selectedID))
        dispatch(promptOpenJournal(selectedTitle))
        dispatch(setCurrentPageTitle(preloadedTitle))
        dispatch(setCurrentPageContent(preloadedContent))
        dispatch(setCurrentPageIndex(journalLength))
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
    animation: ${upDown} 2.5s infinite alternate ease-out;
    :hover {
        animation: ${upDown} .5s infinite alternate ease-out;
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