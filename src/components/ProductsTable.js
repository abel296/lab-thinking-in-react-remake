import { Table } from "react-bootstrap"
import { ProductRow } from "./ProductRow"

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
                { products?.map(elm => <ProductRow { ...elm } key={ elm.id } />)}
            </tbody>
        </Table>
    )
}