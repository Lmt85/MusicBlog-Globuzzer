import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        artist: '',
        rating: '',
        review: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/')
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="sign create-project">
                <form onSubmit={this.handleSubmit} className="mform">
                    <h2 className="signIn">Review</h2>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="artist">Artist</label>
                        <input type="text" id="artist" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" id="rating" min="0" max="10" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="review">Review</label>
                        <textarea id="review" onChange={this.handleChange} rows="4" cols="50"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="loginb">Post</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)