import React from "react";
import axios from 'axios';

/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function CreateCourse() {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [imageLink, setImageLink] = React.useState("");
    const [published, setPublished] = React.useState("");
    const [jwToken, setJwToken] = React.useState("");

    React.useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem('MY_JWT_TOKEN'));
        setJwToken(token);
    },[])

    function submit(){
        axios.post("http://localhost:3000/admin/courses", {title, description, price, imageLink, published}, {
            headers: { 'Authorization': 'Bearer '+ jwToken}
        }).then((resp)=>{
            console.log(resp.data);
        }).catch(err=> console.log(err));
    }

    return <div>
        <h1>Create Course Page</h1>
        <span style={{marginRight:'4.5rem'}}>Title</span>
        <input type={"text"} onChange={e => setTitle(e.target.value)} /> <br />
        <span style={{marginRight:'1.8rem'}}>Description</span>
        <input type="text" onChange={e => setDescription(e.target.value)}/> <br />
        <span style={{marginRight:'4.4rem'}}>Price</span>
        <input type="text" onChange={e => setPrice(e.target.value)}/> <br />
        <span style={{marginRight:'2rem'}}>Image Link</span>
        <input type="text" onChange={e => setImageLink(e.target.value)}/> <br />
        <span style={{marginRight:'2.8rem'}}>Published</span>
        <input type="text" onChange={e => setPublished(e.target.value)}/> <br />
        <button onClick={submit} style={{marginLeft:'3rem', marginTop:'1rem', marginRight:'1rem'}}>Create Course</button>
        <a href="/courses">Show All Courses</a>
    </div>
}
export default CreateCourse;