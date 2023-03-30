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