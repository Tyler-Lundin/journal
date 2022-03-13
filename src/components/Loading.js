import styled from 'styled-components'

const Loading = () => {

    return (
        <S.Loading>
            
        </S.Loading>
    )
}

export default Loading

const S = {}

S.Loading = styled.div`
    width: 100vw;
    height: 100%;
    background: black;
    position: absolute;
    z-index: 999999999999999;
`