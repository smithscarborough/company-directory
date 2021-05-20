import React from 'react'

export default function Employee(props) {
    const { firstName, lastName, phone } = props;
    return (
        <div>
            <h6>Name: {firstName} {lastName} </h6>
            <h6>Phone: {phone}</h6>
            ---------------
        </div>
    )
}
