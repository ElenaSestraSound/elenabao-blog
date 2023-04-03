import { css } from "@emotion/react";

export const header = css`
@media screen and (max-width: 560px) {
    h1 {
        display: none;
    }
    nav li a {
        padding: 15px 5px;
        margin: 0 10px;
        width: fit-content;
    }
}
`

export const sticky = css`
    position: sticky;
    top: 0;
    z-index: 9999999;
    transition: all 0.4s ease-out;
    transform: translateY(0);
`

export const hiddenHeader = css`
    position: sticky;
    top: 0;
    z-index: 9999999;
    transform: translateY(-90px);
    transition: all 0.4s ease-out;
`