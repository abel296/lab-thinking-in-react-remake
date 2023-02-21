export const ProductRow = ({ id, name, price }) => {

    return (
            <tr>
                <td>{ name }</td>
                <td>{ price }</td>
            </tr>
    )
}