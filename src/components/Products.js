import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { ProductsSearch } from "./ProductsSearch"
import { ProductsTable } from "./ProductsTable"
import products from '../data.json'

export const Products = () => {
    const productsList = products.data
    const [productsListState, setProductsListState] = useState()
    const [productsOnStockState, setProductsOnStockState] = useState(false)

    useEffect(() => setTimeout(() => setProductsListState(productsList), 1000), [productsList])
    
    const searchProducts = text => {
        setProductsListState(productsList.filter(elm => elm.name.toLowerCase().includes(text.toLowerCase())))
    }

    const filterProducts = () => {
        if (!productsOnStockState) {
            setProductsListState(productsList.filter(elm => elm.stocked))
            setProductsOnStockState(true)
        } else {
            setProductsListState(productsList)
            setProductsOnStockState(false)
        }
    }

    return (
        <Container>
            <h1>IronStore</h1>
            <ProductsSearch searchProducts={ e => searchProducts(e) } filterProducts={ () => filterProducts()} />
            <ProductsTable products={productsListState} />
        </Container>
    )
}