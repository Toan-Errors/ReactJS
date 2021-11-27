import React from 'react'
import {Row, Col, Button, Typography} from 'antd'
import { app, auth } from '../../firebase/config'

const { Title } = Typography;

export default function Login() {

    const signInWithGoogle = () => {
        auth.signInWithPopup(new app.auth.GoogleAuthProvider())
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const signInWithFacebook = () => {
        auth.signInWithPopup(new app.auth.FacebookAuthProvider())
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <Row justify="center" style={{ height:800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }} level={3}>Fun Chat</Title>
                    <Button onClick={signInWithFacebook} style={{ width:'100%', marginBottom: 5 }}>
                        Login with Facebook
                    </Button>
                    <Button onClick={signInWithGoogle} style={{ width:'100%' }}>
                        Login with Google
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
