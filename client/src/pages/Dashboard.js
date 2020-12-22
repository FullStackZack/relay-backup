import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";


import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import { Row, Col, Container } from "../components/Grid";
//import { StartBtn } from "../components/Buttons";
import LogWorkout from "../components/Cards/LogWorkout";
import AddContacts from "../components/Cards/AddContacts";
import BeginWorkout from "../components/Cards/BeginWorkout";

class Dashboard extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {

        const { user } = this.props.auth;

        return (
            <div>
                <Nav />
                <Container>
                    <Row>
                        <Col size="lg-4">
                            <br />
                            <br />
                            <h5 style={{ textAlign: "left", fontFamily: "Quicksand, sans-serif", fontWeight: 500 }}>Welcome to your dashboard, <span>{user.name.split(" ")[0]}</span>!</h5>
                            <p className="text-muted" style={{ textAlign: "left", fontFamily: "Quicksand, sans-serif", fontStyle: "italic" }}>Take a look around</p>
                            <button
                                style={{
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                onClick={this.onLogoutClick}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Logout
                            </button>
                        </Col>
                        <Col size="lg-7">

                        </Col>
                        <Col size="lg-1">

                        </Col>
                    </Row>

                    <hr />
                    <Row>
                        <Col size="lg-2" />
                        <Col size="lg-4">

                            <Jumbotron>
                                <br />
                                <LogWorkout />
                                <br />
                            </Jumbotron>
                        </Col>
                        <Col size="lg-4">
                            <Jumbotron>
                                <br />
                                <AddContacts />
                                <br />
                            </Jumbotron>
                        </Col>

                        <Col size="lg-2">

                        </Col>

                    </Row>
                    <hr />
                    <Row>
                        <Col size="lg-4"></Col>
                        <Col size="lg-4">
                            <Jumbotron>
                                <br />
                                <BeginWorkout />
                                <br />

                            </Jumbotron>
                        </Col>
                        <Col size="lg-4"></Col>
                    </Row>
                    <hr />

                </Container>

            </div>
        )
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);