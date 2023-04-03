import { css } from "@emotion/react";

export const heroContent = css`
    background-image: url('/home/hero-image.jpg');
    background-size: cover;
    padding: 60px;
    margin-bottom: 40px;
    color: #fff;
    z-index: 1;
    >div {
        text-align: right;
        margin-bottom: 40px;
    }

    :before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.7;
        background-color: black;
        z-index: -3;
      }
`