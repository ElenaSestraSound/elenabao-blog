import { css } from "@emotion/react";

export const sideLayout = css`
    margin-top: 40px;
    padding: 0 20px;
    >div:last-of-type {
        margin-left: 20px;
    }

    @media screen and (max-width: 900px) {
        flex-direction: column-reverse;
        >div:last-of-type {
            margin-left: 0;
        }
        >div {
            width: 100%;
            margin-bottom: 20px;
        }
    }
`