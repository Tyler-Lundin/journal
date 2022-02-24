import styled from 'styled-components'

const S = {}
S.Shadow = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 999999999;
    position: absolute;
`
S.Prompt = styled.div`
    width: 70vw;
    min-height: 40vh;
    background: rgb(50,50,50);
    border-radius: 10px;
    border: 3px solid rgb(230,230,230);
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-rows: 1fr 1fr;
    text-align:center ;

`

S.Message = styled.div`
    color: white;
    font-size: 3rem;
    align-self: center;
`
S.Btns = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-items: center;
    bottom: 0;
    line-height: 3rem;
`
S.Confirm = styled.div`
    min-width: 70px;
    width: 30vw;
    height: 3rem;
    background: lightgreen;
    border-radius: 10px;
    transition: 250ms;
    :hover {
        opacity: .7;
        cursor: pointer;
    }
`
S.Cancel = styled.div`
    min-width: 70px;
    width: 30vw;
    height: 3rem;
    background: lightcoral;
    border-radius: 10px;
    transition: 250ms;
    :hover {
        opacity: .7;
        cursor: pointer;
    }
`

const Prompt = (props) => {
    const {message} = props

    return (
        <S.Shadow>
            <S.Prompt>
                <S.Message>{message}</S.Message>
                <S.Btns>    
                    <S.Cancel>CANCEL</S.Cancel> 
                    <S.Confirm>CONFIRM</S.Confirm>
                </S.Btns>
            </S.Prompt>
        </S.Shadow>
    )
}

export default Prompt