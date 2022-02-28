import styled, {keyframes} from 'styled-components'
import OpenMenu from './../../assets/menu.png'
import CloseMenu from './../../assets/close.png'
import { useGoogleLogout } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { closeNav, openNav } from './isNavOpenSlice';
import { clearUser } from '../Login/userSlice';

const S = {} // styles below

const Nav = () => {
    const dispatch = useDispatch()
    const _isMenuOpen = useSelector(state => state.isNavOpen.value)
    const user = useSelector(state => state.user.value)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const clientId =
    '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

    const onLogoutSuccess = (res) => {
        console.log('logout')
        dispatch(clearUser())
      };
    
      const onFailure = () => {
        console.log('Handle failure cases');
      };
    const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
    });

    // useEffect( ()=>{
    //     if(toggle){
    //         dispatch(openNav())
    //     }
    //     else {
    //         dispatch(closeNav())
    //     }
    // } ,[toggle])

    return (
        <>
            <S.Nav id='Nav'>
                <S.Toggle onClick={()=>setIsMenuOpen(!isMenuOpen)} id='ToggleNavBtn'>
                    <S.Icon src={isMenuOpen ? OpenMenu : CloseMenu}/>
                </S.Toggle>
                <S.SlideOutMenu id='SlideOutMenu' isMenuOpen={isMenuOpen}>
                    <S.UserImageContainer>
                        {user ? <S.UserImage src={user.imageUrl}/> : <></>}
                    </S.UserImageContainer>
                    <S.Links>
                        <S.Link onClick={()=>{console.log('click journals')}}>JOURNALS</S.Link>
                        <S.Link>SETTINGS</S.Link>
                        <S.Link onClick={signOut}>LOGOUT</S.Link>
                    </S.Links>                 
                </S.SlideOutMenu>
            </S.Nav>
        </>
    
    )
}

export default Nav

S.Nav = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
`
S.Toggle = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 3vh;
    right: 3vh;
    z-index: 999999;

`
S.Icon = styled.img`
width: 100%;
` //
S.SlideOutMenu = styled.div`
    width: 100vw;
    height: 100vh;
    background: #489fff;
    display: grid;
    grid-template-rows: 1fr 3fr;
    justify-content: center;
    position: relative;
    z-index: 999998;
    animation: ${props => moveVertically((props.isMenuOpen?'100':0),(props.isMenuOpen?0:'100'))}  1s forwards;
`
S.UserImageContainer = styled.div`
    background: #8fc4ff;
    width: 180px;
    height: 180px;
    margin-top: 2rem;
    border-radius: 50%;
`
S.UserImage = styled.img`
    width: 100%;
    border-radius: 50%;
`
S.Links = styled.ul`
    list-style: none;
    display: grid;
    justify-items: center;
    align-content: space-evenly;
    font-size: 1.5rem;
    font-weight: 300;
`
S.Link = styled.li`
    cursor: pointer;
    transition: 250ms;
    :hover {
        color: white;
    }
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