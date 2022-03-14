import {keyframes} from 'styled-components'

export const upDown = keyframes`
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(5%);
    }
`
export const hideFirstAnimation = keyframes`
    0% {
        opacity: 0;
    }
    99% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const loadBackground = keyframes`
    0% {
        opacity: 0;
    }
    60%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`