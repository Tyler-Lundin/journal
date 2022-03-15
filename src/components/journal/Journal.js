import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentJournalTitle, setCurrentJournalID, setCurrentJournalPageAmount } from '../../app/journal/currentJournalSlice'
import { promptOpenJournal } from '../../app/prompt/promptSlice'
import getPages from '../../util/getPages'
import { setCurrentPageContent, setCurrentPageTitle, setCurrentPageIndex } from '../../app/page/currentPageSlice'
import { setPageList } from '../../app/page/pagesListSlice'
import { useSpring, animated, to } from 'react-spring'

const Journal = (props) => {
    const {index} = props
    const dispatch = useDispatch()
    const journalsList = useSelector(state => state.journalsList.value)
    const selectedTitle = journalsList.journalTitles[index]
    const selectedID = journalsList.journalIDs[index]
    const handleClick = async () => { 
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

    const [{ hoverY }, hoverAnimate] = useSpring(() => ({ hoverY: 5, scale: 0}));

    return (
        <S.Container 
            className='journal' 
            onClick={()=>handleClick(index)} 
            id={selectedID}
            onMouseEnter={() => hoverAnimate.start({hoverY: 0})}
            onMouseLeave={() => hoverAnimate.start({ hoverY: 5 })}
            style={{ transform: to([hoverY],(v) => `translateY(${v}%)`) }}
        >
            <S.Journal>
                <S.TitleContainer>
                    <S.JournalTitle>{selectedTitle}</S.JournalTitle>
                </S.TitleContainer>
            </S.Journal>
        </S.Container>
    )
}

export default Journal

const S = {}

S.Container = styled(animated.div)`
    transition: 300ms;
    align-self: center;
    -webkit-touch-callout: none;
  -webkit-user-select: none;
   -khtml-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
 
`
S.Journal = styled.div`
    position: relative;
    width: 250px;
    height: 350px;
    background: rgba(30,30,30,0.6);
    border: 1px solid black;
    border-radius: 12px;
    box-shadow: 0px 5px 10px 0px black;
    transition: 250ms;
    :hover {
        background: rgba(30,30,30,.95);
    }
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
