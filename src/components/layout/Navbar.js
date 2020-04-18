import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const NavBar = (props) => {
    const { auth, profile } = props;
    console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
    return (
        <nav>
            <div id="mainNav">
                <Link to= '/'>Marioplan</Link>
                {auth.isLoaded && links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(NavBar);