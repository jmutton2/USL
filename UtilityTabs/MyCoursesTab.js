
import * as React from 'react';
<<<<<<< HEAD
import { View, Text } from 'react-native';
// import { RNCamera } from 'react-native-camera';

=======
import { View, Text, Button, StyleSheet } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";

const myCourses = () => {

    const players =[
      {CourseName: "Calculus", CourseCode: "APPLMATH 2276", Prof: "Bob"},
      {CourseName: "Geography", CourseCode: "GEOGRAPH 2132", Prof: "Tom"},
      {CourseName: "Electrical Engineering", CourseCode: "ECE 2238", Prof: "Luke"},
      {CourseName: "Software Design", CourseCode: "SE 2203", Prof: "Bill"},
    ]

    const renderTable =(course,index) => {
      return(
        <tr key={index}>
          <td>{course.CourseName}</td>
          <td>{course.CourseCode}</td>
          <td>{course.Prof}</td>
        </tr>
      )
    }
>>>>>>> upstream/master


    return (
<<<<<<< HEAD
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>List view of my courses</Text>
        
      </View>
=======
      <div className="myCourses">
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Prof</th>
          </tr>
        </thead>
        <tbody>
          {players.map(renderTable)}
        </tbody>
        </ReactBootStrap.Table>
      </div>
>>>>>>> upstream/master
    )
};

export default myCourses;

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
  butt: {
    marginTop: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  }


});
>>>>>>> upstream/master
