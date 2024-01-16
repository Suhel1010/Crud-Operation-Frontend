import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus=()=>{

    return(
        <ListGroup>
        <ListGroupItem color="info" tag="a" href="/home" action>Home</ListGroupItem>
        <ListGroupItem color="primary" tag="a" href="/add-course" action>Add Course</ListGroupItem>
        <ListGroupItem  color="secondary" tag="a" href="/courses" action>View Courses</ListGroupItem>
        <ListGroupItem  color="info" tag="a" href="/about-us" action>About</ListGroupItem>
        <ListGroupItem  color="danger" tag="a" href="/contact-us" action>Contact</ListGroupItem>
    </ListGroup>

    );
};
export default Menus;