import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { ProductsSearch } from "./ProductsSearch"
import { ProductsTable } from "./ProductsTable"
import products from '../data.json'

export const Products = () => {
    const [productsListState, setProductsListState] = useState()

    useEffect(() => setTimeout(() => setProductsListState(products.data), 1000) , [])

    const searchProducts = text => {
        setProductsListState(products.data.filter(elm => elm.name.toLowerCase().includes(text.toLowerCase())))
    }

    return (
        <Container>
            <h1>IronStore</h1>
            <ProductsSearch searchProducts={ e => searchProducts (e)} />
            <ProductsTable products={productsListState} />
        </Container>
    )
}