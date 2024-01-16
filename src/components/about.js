import React from "react";
import { useEffect } from "react";
import { Card,CardBody,CardSubtitle,CardText } from "reactstrap";

const About = () => {
    useEffect(()=>{
        document.title="About-Us || Kumar Shanu";
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
                
                
                <CardSubtitle tag={"h6"} >This Application is developed to perform 'CURD' Operation</CardSubtitle><> </>
                <CardText tag={"h5"} >Technologies Used:
                
                "BackEnd": Spring Boot &
                "FrontEnd": React JS</CardText>
                
            </CardBody>
        </Card>     
        </jumbotron>
    </div>;
};
export default About;