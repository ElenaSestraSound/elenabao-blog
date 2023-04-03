import { css } from "@emotion/react";

export const slideInRight = css` 
    -webkit-animation: slide-in-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @-webkit-keyframes slide-in-right {
        0% {
            -webkit-transform: translateX(100px);
                    transform: translateX(100px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slide-in-right {
        0% {
            -webkit-transform: translateX(100px);
                    transform: translateX(100px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
            opacity: 1;
        }
    }
`

export const slideInLeft = css`
    -webkit-animation: slide-in-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @-webkit-keyframes slide-in-left {
        0% {
            -webkit-transform: translateX(-100px);
                    transform: translateX(-100px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slide-in-left {
        0% {
            -webkit-transform: translateX(-100px);
                    transform: translateX(-100px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
            opacity: 1;
        }
    } 
`

export const slideInBottom = css`
    -webkit-animation: slide-in-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @-webkit-keyframes slide-in-bottom {
        0% {
        -webkit-transform: translateY(100px);
                transform: translateY(100px);
        opacity: 0;
        }
        100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
        }
    }
    @keyframes slide-in-bottom {
        0% {
        -webkit-transform: translateY(100px);
                transform: translateY(100px);
        opacity: 0;
        }
        100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
        }
    }
  
`