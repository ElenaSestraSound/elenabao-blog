import { css } from "@emotion/react";

export const sideHero = css`
    text-align: center;
    div > * {
        margin-bottom: 15px;
    }
    @media screen and (max-width: 900px) {
        img {
            width: 100px;
            height: 100px;
        }
    }
`

export const sideHeroImage = css`
    margin: 0 auto;
`