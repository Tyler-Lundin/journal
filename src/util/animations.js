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

export const spin = keyframes`
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`