import React from "react";
import { useEffect } from "react";
import { Card,CardBody,CardSubtitle,CardText } from "reactstrap";

const Contact = () => {
    useEffect(()=>{
        document.title="Contact || Kumar Shanu";
    })
  return <div>
        <jumbotron className="text-center">  
        <Card  className="text-center"  style={{
    width: '27 rem', marginLeft:5
  }}>          
  <img
    alt="Sample"
    src="https://picsum.photos/300/130"
  />
            <CardBody color="primary">
                
                <CardSubtitle tag={"h5"} >"I appreciate your kind visit" Thank you"..</CardSubtitle><></>
                <CardSubtitle tag={"h3"} >Kumar Shanu</CardSubtitle>
                <CardText>Contact:(+91) 9773-833-051</CardText>
                
            </CardBody>
        </Card>     
        </jumbotron>
    </div>;
};
export default Contact;