import React, {useState, useEffect} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function GetInput(props) {
  return (
    <>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <InputGroup.Text id="basic-addon1">Get the weather for your favorite city.</InputGroup.Text>
    <br></br>
      <InputGroup.Text id="basic-addon1">What city?</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control
      placeholder="What city?"
      aria-label="What city?"
      aria-describedby="basic-addon1"
      onChange={props.onChange}
    />
  </InputGroup>
  <Button 
    variant="primary"
    onClick={props.onSubmit}
    >
      Submit
  </Button>
  </>
  );
}