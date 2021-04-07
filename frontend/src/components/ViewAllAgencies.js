import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




function ViewAll() {
    var [agent, setAgent] = useState([]);

    useEffect(() => {
        function getAgent() {
            axios.get("http://localhost:5000/Travel_Agency/Retrieve").then((res) => {
                setAgent(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        getAgent();

    })

    return (
        <div>
            <h1>All Agencies</h1>
            <table class="center">
                <thead>
                    <tr>
                        <th>contract Id</th>
                        <th>Name</th>
                        <th>Mail Address</th>
                        <th>Mobile Number</th>
                        <th>Address</th>
                        <th>Passcode</th>
                        <th>Rate</th>
                    </tr>
                </thead>

                {agent.map((agent) => (

                    <div key={agent._id}>

                        <tbody>
                            <tr>
                                <td>{agent.contract_id}</td>
                                <td>{agent.name}</td>
                                <td>{agent.mail_Address}</td>
                                <td>{agent.mobile}</td>
                                <td>{agent.address}</td>
                                <td>{agent.passcode}</td>
                                <td>{agent.rate}</td>
                                <td><Link to={"/viewOne/" + agent._id}> Edit </Link></td>
                            </tr>
                        </tbody>
                    </div>
                ))}
            </table>
        </div>

    )
}


export default ViewAll;


