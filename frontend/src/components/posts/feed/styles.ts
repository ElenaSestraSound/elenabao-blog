import { css } from "@emotion/react";

export const feed = css`
    @media screen and (min-width: 670px) {
        margin-left: 0 !important;
        a {
            margin-bottom: 20px;
            >div {
                display: flex;
                flex-direction: row;
                width: 100%;
                max-width: 100%;
                height: fit-content;
                margin-left: 0 !important;
                margin-bottom: 20px;
            }
    }
}
`