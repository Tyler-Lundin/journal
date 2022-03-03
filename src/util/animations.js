import styled, {keyframes} from 'styled-components'

export const upDown = keyframes`
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(5%);
    }
`
export const openJournal = keyframes`
    0% {
        transform: translateY(3%);
    }
    100% {
        transform: translateY(-3%);
    }
`