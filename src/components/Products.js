import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { ProductsSearch } from "./ProductsSearch"
import { ProductsTable } from "./ProductsTable"
import products from '../data.json'

export const Products = () => {
    const productsList = products.data
    const [productsListState, setProductsListState] = useState()
    const [productListBeforeFilterState, setProductListBeforeFilterState] = useState()
    const [productsOnStockState, setProductsOnStockState] = useState(false)

    useEffect(() => setTimeout(() => {
        setProductsListState(productsList)
        setProductListBeforeFilterState(productsList)
    }, 1000), [productsList])

    const searchProducts = text => {
        const filterdListAfterSearch = productsOnStockState
            ? productsList.filter(elm => elm.name.toLowerCase().includes(text.toLowerCase()) && elm.stocked)
            : productsList.filter(elm => elm.name.toLowerCase().includes(text.toLowerCase()))
        setProductsListState(filterdListAfterSearch)
    }

    const filterProducts = () => {
        if (!productsOnStockState) {
            setProductListBeforeFilterState(productsListState)
            setProductsListState(productsListState.filter(elm => elm.stocked))
            setProductsOnStockState(true)
        } else {
            setProductsListState(productListBeforeFilterState)
            setProductsOnStockState(false)
        }   
    }

    return (
        <Container>
            <h1>IronStore</h1>
            <ProductsSearch searchProducts={ e => searchProducts(e) } filterProducts={ () => filterProducts() } />
            <ProductsTable products={ productsListState } />
        </Container>
    )
}