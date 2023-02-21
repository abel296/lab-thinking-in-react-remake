import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { ProductsSearch } from "./ProductsSearch"
import { ProductsTable } from "./ProductsTable"
import products from '../data.json'

export const Products = () => {
    const [productsListState, setProductsListState] = useState()

    useEffect(() => setTimeout(() => setProductsListState(products.data), 1000) , [])

    return (
        <Container>
            <h1>IronStore</h1>
            <ProductsSearch />
            <ProductsTable products={productsListState} />
        </Container>
    )
}