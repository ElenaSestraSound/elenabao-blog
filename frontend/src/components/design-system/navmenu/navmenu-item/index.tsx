import { NavMenuItemModel } from "@/lib/types"
import { Link } from "@chakra-ui/react"


interface IMenuItemProps {
    item: NavMenuItemModel
}

function NavMenuItem({ item }: IMenuItemProps) {
    return (<Link href={item.to}
        _hover={{ 'color': 'brand.highlight' }}
        _activeLink={{ 'color': 'brand.highlight', 'textDecoration': 'underline' }}
        fontWeight={600}
        fontSize='xl'>{item.name}</ Link>)
}

export default NavMenuItem