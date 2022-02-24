import styled from "styled-components";
import Nav from "./nav/Nav";
const S = {}
S.LoggedIn = styled.div`

`
const LoggedIn = (props) => {
    const {
        isMenuOpen,
        setIsMenuOpen,
        user
    } = props
    return (
        <S.LoggedIn>
            <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} user={user}/>
        </S.LoggedIn>
    )
}

export default LoggedIn