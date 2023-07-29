import React from "react";
import axios from 'axios';

function ShowCourses() {
    const [courses, setCourses] = React.useState([]);
    // const [jwToken, setJwToken] = React.useState('');

    // React.useEffect(()=>{
    //     const token = JSON.parse(window.localStorage.getItem('MY_JWT_TOKEN'));
    //     console.log('Token:', token);
    //     setJwToken(token);
    // }, [])
    
    // Add code to fetch courses from the server
    // and set it in the courses state variable.
    React.useEffect(()=>{
        axios.get("http://localhost:3000/admin/courses/", {
            headers: { 'Authorization': "Bearer " + JSON.parse(window.localStorage.getItem("MY_JWT_TOKEN")) }
        }).then(resp => {
            console.log("resp: ", Object.values(resp.data.courses))
            console.log("resp: ", typeof resp.data.courses)
            // setCourses([Object.values(resp.data.courses)])
        }).catch(err => console.log(err));
    },[]);

    return <div>
        <h1>Create Course Page</h1>
        {courses}
        <h1>Hi</h1>
        {courses.map(c => <Course title={c.title} />)}
    </div>
}

function Course(props) {
    return <div>
        <h1>{props.title}</h1>
    </div>
}

export default ShowCourses;