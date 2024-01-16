import React, { Fragment,useEffect,useState } from "react";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
import base_url from "./../API/bootApi"

const AddCourse =()=>{

    useEffect(()=>{
        document.title="Add Course || Kumar Shanu";
    })

    const [course,setCourse]=useState({});

    //form handler function
    const handleForm = (e) =>{
            console.log(course);
            postDatatoServer(course);
            e.preventDefault();

    }

    //funtion to post data to Server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                //Success
                console.log(response);
                console.log("Success")
                setCourse(response.data);
                toast.success("Course added successfully..",{
                position:"bottom-right",autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong..",{
                position:"bottom-right",autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            }
        );
    };


    return( 
    <Fragment>
        <h1 className="text-center my-3">Provide Course Details</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for="userId">Course Id</label>
                <Input type="number" required placeholder="Enter Id" id="userId" name="userId" 
                 
                 onChange={(e) => {
                   
                    setCourse({...course, id:e.target.value})
                  
                }}/>
           
            </FormGroup>
            <FormGroup>
                <label for="title">Course Title</label>
                <Input type="text" required placeholder="Enter Title Here" id="title"
                 onChange={(e) => {
                    setCourse({...course,title:e.target.value})
                }}/>
            </FormGroup>

            <FormGroup>
                <label for="description">Course Description</label>
                <Input type="textarea"  placeholder="Enter Description Here" 
                id="description" style={{height:150}}
                onChange={(e) => {
                    setCourse({...course,description:e.target.value})
                }}/>
            </FormGroup>
            <Container className="text-center">
                <Button type="submit" color="success">Add Course</Button>{' '}
                <Button type="reset" color="warning">Clear</Button>
            </Container>
        </Form>

    </Fragment>);
};
export default AddCourse;