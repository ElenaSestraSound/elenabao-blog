import { css } from "@emotion/react";

export const postCardTags = css`
    width: fit-content;
    position: absolute;
    left: 10px;
    top: 10px;
`

export const card = css`
width: fit-content;

:hover h2{
    color: #A4031F;
    text-decoration- color: #A4031F;
}
@media screen and (max-width: 1200px) {
    display: block;
    margin-bottom: 20px;
}

@media screen and (max-width: 1200px) and (min-width: 700px) {
    >div {
        max-width: 100%;
        display: flex;
        flex-direction: row;
        
        h2 {
            text-align: left;
        }
    }
}

@media screen and (max-width: 700px) {
    margin: 0 auto;
    margin-bottom: 20px;
    text-align: center;
}
`
