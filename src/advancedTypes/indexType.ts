// Index types is used for placeholder that can be any key-value pairs

interface ErrorContainer {
    [prop: string]: string // props must only string, number or symbol
}

class IndexType {
    errorMessage: ErrorContainer = {
        email: 'Not a valid email',
        username: 'Must start with capital letter'
    }
}

export default IndexType