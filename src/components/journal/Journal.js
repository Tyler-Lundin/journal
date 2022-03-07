import styled from 'styled-components'
import { upDown, openJournal} from '../../util/animations'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentJournalTitle, setCurrentJournalID, setCurrentJournalPageAmount } from '../../app/journal/currentJournalSlice'
import { promptOpenJournal } from '../prompt/promptSlice'
import getPages from '../../util/getPages'
import { setCurrentPageContent, setCurrentPageTitle, setCurrentPageIndex } from '../../app/page/currentPageSlice'
import { setPageList } from '../../app/page/pagesListSlice'
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
        <S.Container className='journal' onClick={()=>handleClick(index)} id={selectedID}>
            <S.Journal>
                {/* <S.JournalIcon src={BlankJournal}/> */}
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
    align-self: center;
    :hover {
        animation: ${openJournal} 1s forwards alternate ease-out;
    }
`
S.Journal = styled.div`
    position: relative;
    width: 250px;
    height: 350px;
    background: #3d3a4b;
    border-radius: 12px;
`
S.JournalIcon = styled.img`
    position: relative;
`
S.JournalTitle = styled.h2`
    text-align: center;
    white-space: nowrap;
    font-family: 'le-havre';
    font-size: 2.2rem;
    color: white;
`
S.TitleContainer = styled.div`
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translateX(-43%);
    max-width: 220px;
`
