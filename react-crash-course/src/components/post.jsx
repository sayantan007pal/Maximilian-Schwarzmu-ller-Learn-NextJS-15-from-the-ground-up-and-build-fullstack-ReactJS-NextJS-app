import classes from './post.module.css';
function Post(props){     // props is an object that contains all the data passed to this component from its parent (the App component)
    
    return (<div className={classes.post}> // post is a class name in css file
        <p>{props.author}</p>
        <p>{props.body}</p>
        </div>)
};
export default Post;