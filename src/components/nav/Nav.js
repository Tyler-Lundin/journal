import styled, {keyframes} from 'styled-components'
import OpenMenu from './../../assets/menu.png'
import CloseMenu from './../../assets/close.png'
const S = {}
S.Nav = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`
S.Toggle = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 999999;
`
S.Icon = styled.img`
width: 100%;
` //
S.SlideOutMenu = styled.div`
    width: 100vw;
    height: 100vh;
    background: #967ad0;
    display: grid;
    justify-content: center;
    animation: ${props => moveVertically((props.isMenuOpen?'100':0),(props.isMenuOpen?0:'100'))}  2s forwards;
`
S.UserImageContainer = styled.div`
    background: #8fc4ff;
    width: 220px;
    height: 220px;
    margin-top: 2rem;
    border-radius: 50%;
`
S.UserImage = styled.img`
    width: 100%;
    border-radius: 50%;
`
const moveVertically = (y,x) =>
  keyframes`
    0% {
      transform: translateY(${x}%);
    }
    100% {
      transform: translateY(${y}%);
    }
`
const Nav = (props) => {
    const {
        isMenuOpen,
        setIsMenuOpen,
        user
    } = props

    return (
        <>
            <S.Nav id='Nav'>
                <S.Toggle onClick={()=>setIsMenuOpen(!isMenuOpen)} id='ToggleNavBtn'>
                    <S.Icon src={isMenuOpen ? OpenMenu : CloseMenu}/>
                </S.Toggle>
                <S.SlideOutMenu id='SlideOutMenu' isMenuOpen={isMenuOpen}>
                    <S.UserImageContainer>
                        {user ? <S.UserImage src={user.photoURL}/> : <></>}
                    </S.UserImageContainer>                    
                </S.SlideOutMenu>
            </S.Nav>
        </>
    
    )
}

export default Nav