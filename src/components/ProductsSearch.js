import { Form } from "react-bootstrap"

export const ProductsSearch = () => {
    return (
        <>
            <Form.Label htmlFor="inputPassword5">Search</Form.Label>
            <Form.Control
                type="text"
                id="search"
                aria-describedby="passwordHelpBlock"
            />
            <Form.Group className="mb-3 checkbox" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Only show products on stock" />
            </Form.Group>
        </>
    )
}