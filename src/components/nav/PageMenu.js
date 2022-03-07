import { useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components'
import {IoIosArrowForward, IoIosAdd} from 'react-icons/io'
import {BsDash} from 'react-icons/bs'
import {RiFontSize} from 'react-icons/ri'
import {BsSun, BsMoon} from 'react-icons/bs'
import currentTheme from '../../themes/themes';


const PageMenu = (props) => {
    const {
        isDarkMode,
        setIsDarkMode
    } = props
    const [theme, setTheme] = useState()
    const [multiplyer, setMultiplyer] = useState(0)
    const [pageMenuOpen, setPageMenuOpen] = useState(false)
    async function handleLargerFont () {
        await setMultiplyer( multiplyer + .5 )
        setTheme(currentTheme(theme.themeName, theme.fontFamily, multiplyer))
        console.log(multiplyer, theme.fontSizeMultiplyer)
    }

    function handleSmallerFont () {

    }
    useEffect( ()=> {
        if(theme == undefined) {
            console.log('initial theme set')
            setTheme(currentTheme('default', null, null))
        } else {
            console.log('did not set theme', theme)
        }
    }, [])

    return (
        <S.PageMenu pageMenuOpen={pageMenuOpen}>
            <S.CloseMenu onClick={()=>setPageMenuOpen(!pageMenuOpen)}>
                <IoIosArrowForward color='white' size={'100%'}/>
            </S.CloseMenu>
            <S.SettingsContainer>
                <S.FontSize>
                    <S.SectionTitle>font size</S.SectionTitle>
                    <S.FontButtons>
                        <S.LargerFontButton onClick={()=>handleLargerFont()}><IoIosAdd color='white' size={'100%'}/></S.LargerFontButton>
                        <RiFontSize color='white' size={'100%'}/>
                        <S.SmallerFontButton onClick={()=>handleSmallerFont()}><BsDash color='white' size={'100%'}/></S.SmallerFontButton>
                    </S.FontButtons>
                </S.FontSize>
                <S.DarkModeContainer>
                    <S.SectionTitle>{!isDarkMode ? 'dark mode' : 'light mode'}</S.SectionTitle>
                    <S.DarkModeIcons>
                        <BsMoon onClick={()=>setIsDarkMode(false)} color='white' size={'100%'}/>
                        <BsSun onClick={()=>setIsDarkMode(true)} color='white' size={'100%'}/>
                    </S.DarkModeIcons>

                </S.DarkModeContainer>
                {/* <s.ThemesContainer>
                    <s.SectionTitle>themes</s.SectionTitle>
                </s.ThemesContainer> */}
            </S.SettingsContainer>
        </S.PageMenu>
    )
}

export default PageMenu
const S = {}
S.SectionTitle = styled.h3`
    text-align: left;
    margin-bottom: 1rem;
    color: rgb(200,200,200);
    text-decoration: underline;
    text-underline-offset: 20%;
`
S.ThemesContainer = styled.div`
    width: 90%;
    height: 40vh;
`
S.LargerFontButton = styled.div`
    width: 70%;
    max-height: 100%;
    align-self: flex-end;

`
S.FontButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
`
S.SmallerFontButton = styled.div`
    width: 70%;
    max-height: 100%;
    align-self: flex-end;
`
S.FontSize = styled.div`
    width: 90%;
    height: 50px;

`
S.SettingsContainer = styled.div`
    width: 80%;
    height: 100%;
    background: rgb(0,0,0,0.2);
    margin-left: 20%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-items: center;

`
S.PageMenu = styled.div`
    width: 40vw;
    max-width: 300px;
    height: 100vh;
    background: #3d3a4b;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 99999;
    animation: ${props => moveHorizontally((props.pageMenuOpen?'120':0),(props.pageMenuOpen?0:'120'))}  1s forwards;
`
S.CloseMenu = styled.div`
    height: 100%;
    width: 20%;
    position: absolute;
    display: grid;
    justify-items: center;
`
S.DarkModeContainer = styled.div`
    justify-self: center;
    width: 90%;
    height: 8vh;
    display: grid;
    grid-template-rows:  1fr;
`
S.DarkModeIcons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 50px;
`
const moveHorizontally = (y,x) =>
  keyframes`
    0% {
      transform: translateX(${x}%);
    }
    100% {
      transform: translateX(${y}%);
    }
`