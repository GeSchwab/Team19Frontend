import React from "react";
import Grid from '@material-ui/core/Grid';
import StudyplanListRow from "./StudyplanListRow";
import Page from "./Page";

/**
 * StudyplanList
 *
 * Shows the studyplan of the logged in user.
 * Author: Maria
 */
export default class StudyplanList extends React.Component {
    constructor(props) {
        super(props);

    }

    getStudyplanListItems(studyplanItems) {
        return studyplanItems.map(item => {
            return (<Grid item>
                        <StudyplanListRow studyplan={item} remove={this.props.remove}/>
            </Grid>);
        })
    }

    render() {
        return (
                <Grid>
                    {this.getStudyplanListItems(this.props.studyplans)}
                </Grid>
        )
    }
}