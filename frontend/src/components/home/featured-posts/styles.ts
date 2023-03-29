import { css } from "@emotion/react";

export const featuredPosts = css`
padding: 40px 0px;
    @media screen and (max-width: 1200px) {
        display: block;
        padding: 0 20px;

        >div>h2 {
            margin: 0 auto;
            text-align: center;
        }
        svg {
            display: none;
        }

        div.css-17xejub {
            display: none;
        }
    }
  >div {
    text-align: right;
    margin: 40px 20px;

    :last-child {
        margin: 0;
    }
    div {
        text-align: center;
    }
}
`