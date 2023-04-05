import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { ProductsSearch } from "./ProductsSearch"
import { ProductsTable } from "./ProductsTable"
import products from '../data.json'

export const Products = () => {
    const productsList = products.data
    const [productsListState, setProductsListState] = useState()

    useEffect(() => setTimeout(() => {
        setProductsListState(productsList)
    }, 1000), [productsList])

    const searchProducts = (text, isFilterChecked) => {
        const filterdListAfterSearch = isFilterChecked
        ? productsList.filter(elm => elm.name.toLowerCase().includes(text.toLowerCase()) && elm.stocked)
        : productsList.filter(elm => elm.name.toLowerCase().includes(text.toLowerCase()))
        setProductsListState(filterdListAfterSearch)
    }

    return (
        <Container>
            <h1>IronStore</h1>
            <ProductsSearch searchProducts={ (search, isStock) => searchProducts(search, isStock) } />
            <ProductsTable products={ productsListState } />
        </Container>
    )
}