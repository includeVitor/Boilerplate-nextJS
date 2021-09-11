import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;

    > input {
        margin-top: 15px;
    }

    > button {
        margin-top: 15px;
    }

    > h2 {
        text-align: center;
    }

    min-width: 300px;
`

const SpanError = styled.span`
    color: red;
`

export { Container, Form, SpanError }
