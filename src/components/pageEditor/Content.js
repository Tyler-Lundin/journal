import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { editPageContent } from '../../app/page/pagesListSlice';

const Content = (props) => {
    const {
        pageIndex,
        currentPage,
        pagesList,
    } = props
    const dispatch = useDispatch()

    function handleContentChange(e){
        let tempList = [...pagesList[1]]
        tempList[pageIndex - 1] = e.target.value
        dispatch(editPageContent(tempList))
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
    margin: auto;
    background: whitesmoke;
    padding: 5px;
    box-sizing: border-box;
    display: grid;
    justify-items: center;
`
S.TextArea = styled.textarea`
    width: 95%;
    height: 100%;
    line-height: 2rem;
    resize: none;
    border: none;
    background-image: linear-gradient(#F1F1F1 50%, #F9F9F9 50%);
    background-size: 100% 4rem;
    background-attachment: local;
    font-size: 1.5rem;
    :focus {
        outline: none;
    }
`