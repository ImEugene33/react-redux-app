import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {CustomCheckbox, TextArea} from '../Common/FormsControl/FormsControl';
import styles from '../Common/FormsControl/FormsControl.module.css';
import {Button} from '@mui/material';
import {required} from '../../utils/validator/validator';

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={'login'} component={TextArea} validate={[required]}/></div>
            <div><Field placeholder={'Password'} name={'password'} component={TextArea} validate={[required]}/></div>
            <div><Field name={'remember'} component={CustomCheckbox} type={'checkbox'}/></div>
            <div>
                <Button className={styles.button} type="submit">Login</Button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login

