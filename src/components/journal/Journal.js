import styled from 'styled-components'
import { upDown, openJournal} from '../../util/animations'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentJournalTitle, setCurrentJournalID, setCurrentJournalPageAmount } from '../../app/journal/currentJournalSlice'
import { promptOpenJournal } from '../prompt/promptSlice'
import getPages from '../../util/getPages'
import { setCurrentPageContent, setCurrentPageTitle, setCurrentPageIndex } from '../../app/page/currentPageSlice'
import { setPageList } from '../../app/page/pagesListSlice'
import { useEffect, useState, useRef } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'

const Journal = (props) => {
    const {index} = props
    const dispatch = useDispatch()
    const journalsList = useSelector(state => state.journalsList.value)
    const selectedTitle = journalsList.journalTitles[index]
    const selectedID = journalsList.journalIDs[index]
    const journalRef = useRef()
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

    const [flip, set] = useState(false)
    const [{ hoverY, scale }, hoverAnimate] = useSpring(() => ({ hoverY: 5, scale: 0}));

    return (
        <S.Classes>
            <S.Container 
            className='journal' 
            onClick={()=>handleClick(index)} 
            id={selectedID}
            onMouseEnter={() => hoverAnimate({ hoverY: 0, scale: -5})}
            onMouseLeave={() => hoverAnimate({ hoverY: 5, scale: 0 })}
            style={{ transform: interpolate([hoverY, scale],(v, z) => `translateY(${v}%) rotate3d(0, 0, 1, ${z}deg)`) }}
            >
                <S.Journal>
                    <S.TitleContainer>
                        <S.JournalTitle>{selectedTitle}</S.JournalTitle>
                    </S.TitleContainer>
                </S.Journal>
            </S.Container>
        </S.Classes>
    )
}

export default Journal

const S = {}
S.Classes = styled(animated.div)`
    /* .active {
        animation: ${openJournal} 1s forwards alternate ease-out;
    }
    .in-active {
        animation-direction: reverse;
        animation-name: ${openJournal};
        animation-duration: 1s;
    } */
    
`
S.Container = styled(animated.div)`
    transition: 300ms;
    align-self: center;

 
`
S.Journal = styled.div`
    position: relative;
    width: 250px;
    height: 350px;
    background: #3d3a4b;
    border-radius: 12px;
    box-shadow: 0px 5px 10px 0px black;
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
