import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validator/validator';
import {TextArea} from '../../Common/FormsControl/FormsControl';
import {Button} from '@mui/material';
import styles from './../../Common/FormsControl/FormsControl.module.css'

const MyPosts = (props) => {
    let postsElements = props.postsData.map((p) => (
        <Post message={p.message} likes={p.likesCount}/>
    ));
    let newPostElement = React.createRef();


    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={style.postsBlock}>
            <div className={style.newPost}>
                <h3>My post</h3>
                <div><AddPostFormRedux onSubmit={onAddPost}/></div>
            </div>
            <div className={style.posts}>{postsElements}</div>
        </div>
    );
};

const maxLength10 = maxLengthCreator(10)

const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={'newPostText'} placeholder={'write post'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Button className={styles.button} type="submit">Add post</Button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: 'dialogAddPostForm'})(AddNewPost)

export default MyPosts;
