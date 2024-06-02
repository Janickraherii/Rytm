// src/components/TaskCompletionChart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function TaskCompletionChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/task_completion_stats/')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completed" fill="#8884d8" />
            <Bar dataKey="incomplete" fill="#82ca9d" />
        </BarChart>
    );
}

export default TaskCompletionChart;
