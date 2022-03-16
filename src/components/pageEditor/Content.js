import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { editPageContent } from '../../app/page/pagesListSlice';
import savePage from '../../util/savePage';
import { auth } from '../../util/firebase';


const Content = (props) => {
    const {
        pageIndex,
        currentPage,
        pagesList,
        currentJournal
    } = props
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.darkMode.value)
    const fontSize = useSelector(state => state.fontSize.value)
    function handleContentChange(e){
        let tempList = [...pagesList[1]]
        tempList[pageIndex - 1] = e.target.value
        dispatch(editPageContent(tempList))
        savePage(auth.currentUser.email, currentJournal, pagesList[0], tempList)
    }
    const handleKeyDown = e => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const textArea = e.currentTarget; // or use document.querySelector('#my-textarea');
            textArea.setRangeText(
              '\t',
              textArea.selectionStart,
              textArea.selectionEnd,
              'end'
            );
          }
        };

  return (
    <S.Content id='PageEditorContent' >
        <S.TextArea
            darkMode={darkMode} 
            fontSize={fontSize}
            id='PageEditorTextArea'
            key={pageIndex}
            defaultValue={currentPage[1]} 
            onChange={e=>handleContentChange(e)}
            onKeyDown={(e)=>handleKeyDown(e)}
        />
    </S.Content>
  )
}

export default Content

const S = {}
S.Content = styled.div`
    width: 100vw;
    height: 80vh;
    /* height: calc(var(--vh, 1vh) * 80); */
    margin: auto;
    padding: 5px;
    box-sizing: border-box;
    display: grid;
    justify-items: center;
`
S.TextArea = styled.textarea`
    color: ${props=> props.darkMode ? 'white' : 'black'}; 
    width: 100%;
    height: 100%;
    line-height: 2rem;
    padding: 0 5px;
    resize: none;
    border: none;
    background: ${props=>props.darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(200,200,200,0.2)'};
    font-size: ${props=>props.fontSize * 1}rem;
    :focus {
        outline: none;
    }
`

