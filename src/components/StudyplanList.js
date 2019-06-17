import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import StudyplanListRow from "./StudyplanListRow";
import Page from "./Page";
import SearchBar from "./SearchBar";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const studyplanItems = [
    {"studyplan": "studyplan1", "img": "img1"},
    {"studyplan": "studyplan2","img": "img2"},
    {"studyplan": "studyplan3","img": "img3"}
    ];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export default class StudyplanList extends React.Component {
    constructor(props) {
        super(props);

    }

    getStudyplanListItems(studyplanItems) {
        return studyplanItems.map(item => {
            return <StudyplanListRow name={item["name"]} img={"test_backend"}/>
        })
    }

    render() {
        const classes=useStyles;
        return (



            <Page >

                <div className={classes.root}>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                    >


                        <div>
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"

                        >


                            {this.getStudyplanListItems(studyplanItems)}

                        </Grid>
                        </div>




                        <div>
                        <SearchBar/>
                        </div>


                    </Grid>
                </div>
            </Page>



        )
    }
}