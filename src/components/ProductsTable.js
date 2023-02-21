import { Table } from "react-bootstrap"

export const ProductsTable = ({ products }) => {
    return (
        <Table hover className="products-table">
            <thead>
                <tr className="rows-headers">
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                { products?.map(elm => {
                    return  <tr key={elm.id}>
                                <td>{ elm.name }</td>
                                <td>{ elm.price }</td>
                            </tr>
                }) }
            </tbody>
        </Table>
    )
}