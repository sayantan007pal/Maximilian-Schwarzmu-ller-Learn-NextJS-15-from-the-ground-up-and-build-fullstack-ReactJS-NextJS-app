const names = ['Sayantan', 'Samriddhi'];


function Post(){
    const chooseName = Math.random() > 0.5 ? names[0] : names[1];
    return (<div>
        <p>{chooseName}</p>
        <p>Reactjs is a javascript library</p>
        </div>)
};
export default Post;