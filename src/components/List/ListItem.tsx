
interface ItemProps {
    dDC: string
    info: string
    vDC: number
    lDC: string
    comp: boolean
}

export default function ListItem({dDC, info, vDC, lDC, comp} : ItemProps) {

    return (
        <tr>
            <td>{dDC}</td>
            <td> {info} </td>
            <td> {vDC} </td>
            <td> {lDC} </td>
            <td> {comp} </td>
        </tr>
    )
}