import React, { useContext } from 'react'
import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
const Login = () => {
    const { logOutUser,
        loginUser,
        loginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading } = useContext(AuthContext)
    return (
        <>
            <Form onSubmit={loginUser}>
                <Row style={{
                    heigh: '100vh',
                    justifyContent: 'center',
                    paddingTop: '10%'
                }}>
                    <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Login</h2>
                            <Form.Control
                                type='email'
                                placeholder='Email...'
                                onChange={e => updateLoginInfo({ ...loginInfo, email: e.target.value })}
                            />
                            <Form.Control
                                type='password'
                                placeholder='password....'
                                onChange={e => updateLoginInfo({ ...loginInfo, password: e.target.value })}
                            />
                            {
                                isLoginLoading ? (<>
                                    <Button variant='primary' type='submit' disabled>
                                        Loading
                                    </Button>
                                </>) : (<>
                                    <Button variant='primary' type='submit' >
                                        Login
                                    </Button>
                                </>)
                            }
                            {
                                loginError?.error && (
                                    <Alert variant='danger'>
                                        <p>{loginError?.message}</p>
                                    </Alert>
                                )
                            }

                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Login