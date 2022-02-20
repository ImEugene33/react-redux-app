import {Field, reduxForm} from 'redux-form';
import React from 'react';
import {TextArea} from '../../Common/FormsControl/FormsControl';
import {maxLengthCreator, required} from '../../../utils/validator/validator';
import styles from '../../Common/FormsControl/FormsControl.module.css';
import {Button} from '@mui/material';

const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} validate={[required, maxLength100]} name={'newMessageBody'}
                       placeholder='enter your massage'/>
            </div>
            <div>
                <Button className={styles.button} type="submit">Send</Button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)