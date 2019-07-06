import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

class AppNavbar extends Component {
    render() {
        return (
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/"> Shopping List </NavbarBrand>
                </Container>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(AppNavbar)