import { Form } from "react-bootstrap"

export const ProductsSearch = ({ searchProducts, filterProducts }) => {

    return (
        <>
            <Form.Label htmlFor="inputPassword5">Search</Form.Label>
            <Form.Control
                type="text"
                id="search"
                aria-describedby="passwordHelpBlock"
                onSubmit={ e => e.preventDefault() }
                onChange={ e => {
                    searchProducts(e.target.value)
                } }
            />
            <Form.Group className="mb-3 checkbox" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Only show products on stock" onClick={ () => filterProducts() } />
            </Form.Group>
        </>
    )
}