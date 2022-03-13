import { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import Head from './Head';
import Content from './Content';
import Footer from './Footer';
const S = {}


const PageEditor = () => {
    const currentJournal = useSelector(state => state.currentJournal.value)
    const pagesList = useSelector(state => state.pagesList.value )
    const initialAmount = useSelector(state => state.currentJournal.value.pageAmount)
    const [currentPage, setCurrentPage] = useState([pagesList[0][initialAmount - 1],pagesList[1][initialAmount - 1]])
    const [pageIndex, setPageIndex] = useState(initialAmount)
    return(
        <S.PageEditor id='PageEditor'>
            <Head 
                pageIndex={pageIndex} 
                setPageIndex={setPageIndex} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
                pagesList={pagesList} 
                initialAmount={initialAmount}
            />
            <Content
                pageIndex={pageIndex}
                currentPage={currentPage}
                pagesList={pagesList}
            />
            <Footer 
                currentJournal={currentJournal}
                pagesList={pagesList}
            />
        </S.PageEditor>
    )
}

export default PageEditor

S.PageEditor = styled.div`
width: 100vw;
height: calc(var(--vh, 1vh) * 100);
position: absolute;
z-index: 999;
background: whitesmoke;
overflow: hidden;
`

S.Dark = styled.div`
  background: rgb(40,40,40);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  transition: 250ms;
  opacity: ${props => props.isDarkModeEnabled ? 1 : 0};
`

S.Light = styled.div`
  background: rgb(200,200,200);
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  transition: 250ms;
  opacity: ${props => props.isDarkModeEnabled ? 0 : 1};
`