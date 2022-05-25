import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss';
import { Col, Container, Row } from 'reactstrap';
const Header = props => {
    return (
        <header className='header'>
            <Container>
                DCode Header
            </Container>
        </header>
    )
}

Header.propTypes = {}

export default Header