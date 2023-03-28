import { css } from "@emotion/react";


export const navmenu = css`
    list-style: none;
    li {
        display: inline-block;
        height: fit-content;
        a {
            display: block;
            padding: 30px 10px;
            width: 100px;
            text-align: center;
        }

        a:hover {
            cursor: pointer;
            background-color: #fcba6f;
        }
    }
`