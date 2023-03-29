import { css } from "@emotion/react";

export const header = css`
@media screen and (max-width: 550px) {
    h1 {
        display: none;
    }
    nav a {
        padding: 15px 5px;
        margin: 0 10px;
        width: fit-content;
    }
}
`