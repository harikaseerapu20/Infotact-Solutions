// src/components/FestEntry.js
import React, { useState } from 'react';
import axios from 'axios';

const FestEntry = ({ token }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/fest', { name, email, phone }, {
                headers: {
                    Authorization: token,
                },
            });
            alert('Fest entry created successfully!');
        } catch (error) {
            alert('Failed to create fest entry: ' + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Cultural Fest Entry</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <button type="submit">Register for Fest</button>
        </form>
    );
};

export default FestEntry;