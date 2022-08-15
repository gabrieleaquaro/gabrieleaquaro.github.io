import React from 'react';
import { Container, Row } from 'react-bootstrap';
import author from '../img/author.png'





export default function Citation(props) {


  return (
    <div className='col-sm-12'>
      <Container>
        <Row className='text-center mx-auto d-flex justify-content-center'>
          <div className='col-sm-2 col-md-3 col-lg-3 mb-5' >
            <img src={author} alt="author" className="profile-img img-fluid rounded b-shadow-a" />
          </div>
          <div >
            <h3 className='title-author'> {props.author} </h3>
            <span className='lead light-color'>
              <b> {props.text}</b>
            </span>
          </div>
        </Row>
      </Container>
    </div >
  )
}