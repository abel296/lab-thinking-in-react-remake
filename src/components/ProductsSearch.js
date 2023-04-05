import { useState } from "react"
import { Form } from "react-bootstrap"

export const ProductsSearch = ({ searchProducts }) => {
    const [searchState, setSearchState] = useState('')
    const [filterCheckedState, setFilterCheckedState] = useState(false)

    return (
        <>
            <Form.Label htmlFor="inputPassword5">Search</Form.Label>
            <Form.Control
                type="text"
                id="search"
                aria-describedby="passwordHelpBlock"
                onSubmit={ e => e.preventDefault() }
                onChange={ e => {
                    setSearchState(e.target.value)
                    searchProducts(e.target.value, filterCheckedState)
                } }
            />
            <Form.Group className="mb-3 checkbox" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Only show products on stock" onClick={ e => {
                    setFilterCheckedState(e.target.checked)
                    searchProducts(searchState, e.target.checked)
                } } />
            </Form.Group>
        </>
    )
}