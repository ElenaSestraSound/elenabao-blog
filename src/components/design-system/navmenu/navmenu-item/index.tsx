import { NavMenuItemModel } from "@/lib/types"
import Link from "next/link"

interface IMenuItemProps {
    item: NavMenuItemModel
}

function NavMenuItem({ item }: IMenuItemProps) {
    return (<Link href={item.to}>{item.name}</ Link>)
}

export default NavMenuItem