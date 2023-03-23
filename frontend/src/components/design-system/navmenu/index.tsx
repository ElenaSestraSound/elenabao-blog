import NavMenuItem from "./navmenu-item"
import { MENU_ITEMS } from "./MenuItems"
import * as styles from "./styles"
import { ListItem, UnorderedList } from "@chakra-ui/react"
function NavMenu() {
    return (
        <nav>
            <UnorderedList css={styles.navmenu}>
                {MENU_ITEMS.map(item => <ListItem><NavMenuItem item={item} /></ListItem>)}
            </UnorderedList>
        </nav>
    )
}
export default NavMenu