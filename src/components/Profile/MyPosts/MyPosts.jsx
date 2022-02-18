import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from 'redux-form';


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


const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder={'write something'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: 'dialogAddPostForm'})(AddNewPost)

export default MyPosts;
