import React from 'react';
import { people } from './data.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Brands() {
    const chemists = people.filter(person => person.profession === 'chemist');

    return (
        <div className='popular-sec'>
            <Container>
                <h2 className="text-center my-4">Popular Brands</h2>
                <Row>
                    {chemists.map(person => (
                        <Col key={person.name} xs={12} md={6} lg={4} className="mb-4">
                            <div className="text-center p-3 border rounded shadow-sm bg-light">
                                <img
                                    src={person.imageUrl}
                                    alt={person.name}
                                    className="img-fluid rounded mb-3"
                                    style={{ maxHeight: "200px" }}
                                />
                                <p>
                                    <b>{person.name}</b> <br/>{person.profession} known for{" "}
                                    {person.accomplishment}.
                                </p>
                                <p>
                                    Time: {person.time}, {person.price}, <br/>{person.coupon}.
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
