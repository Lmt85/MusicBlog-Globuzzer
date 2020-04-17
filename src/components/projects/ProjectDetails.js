import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
    const { project } = props;
    if (project) {
        return(
        <div className="container project-details">
            <div className="card">
                <div className="content">
                    <span className="card-title">{ project.title }</span>
                    <p>{ project.artist }</p>
                    <p>{ project.rating }</p>
                    <p>{ project.review }</p>

                </div>
                <div className="card-action">
                    <div> Posted by { project.authorFirstName } { project.authorLastName }</div>
                    <div> April 16th</div>
                </div>
            </div>
        </div>
        )
    }else{
        return (
            <div className="container loading">
                <p>Loading project..</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)
