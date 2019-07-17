"use strict";

import React from 'react';

import CreateStudyplanWithFilter from "../../components/CreateStudyplan/CreateStudyplanWithFilter";
import FieldOfStudyService from "../../services/FieldOfStudyService";
import Page from "../../components/PageWithAdvertisement/Page";

/**
 * Create Studyplan view
 * Showing the the courses and structure for creating a studyplan
 * Author: Maria
 */
export class CreateStudyplanView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentWillMount(props){
        FieldOfStudyService.getCoursesForFos(this.props.studyplan.fieldOfStudy._id).then((courses)  =>{
            this.setState({
                loading: false,
                courses: courses
            })
        })
    }

    render(){
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Page>
            <CreateStudyplanWithFilter courses={this.state.courses}/>
            </Page>
        );
    }
}
