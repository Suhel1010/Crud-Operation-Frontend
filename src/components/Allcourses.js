import React, { useState,useEffect } from "react";
import Course from "./Course";
import base_url from "./../API/bootApi"
import axios from "axios";
import { toast } from "react-toastify";



const Allcourses=()=>{

    useEffect(()=>{
        document.title="All Courses || Kumar Shanu";
    })

    //function to call from server

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //Success
                console.log(response.data);
                toast.success("Courses have been loaded..",{
                    position:"bottom-right",autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
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

    //calling server function
    useEffect(()=>{
        getAllCoursesFromServer();},[]
    );
    const [courses,setCourses]=useState(
        [
//    {id:1, title:"Java Course",description:"Java Course for beginers"},
//    {id:2,title:"Django Course",description:"Django Code for beginers"},
//    {id:3,title:"React Js Course",description:"Frontend Course for beginers"},
//    {id:4,title:"Angular Js Course",description:"Frontend Course for beginers"}
    ])

    const updateCourses=(id)=>{

        setCourses(courses.filter((c)=>c.id !== id));

    }
    return(
        <div className="text-center">
            <h1>All Courses</h1>
            <p>List of courses are as follows:</p>
            {
                courses.length>0? courses.map((item)=>
                    <Course key={item.id} course={item} update={updateCourses}/>
                ) :"No Courses Found"
            }
        </div>
    );
}; export default Allcourses;