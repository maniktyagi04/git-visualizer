import express from 'express';
import cors from 'cors';

// const { GitData } = require('./Services-Git');
import { GitData } from './Services-Git.js';

const app = express();
app.use(cors());

app.get("/git", async (req, res) => {
    const path = req.query.path
    const data = await GitData();
    res.json(data);
})

// app.get('/git', async (req, res) => {
//     console.log(req.query.path);

//     try {
//         const data = await GitData(req.query.path);
//         req.json(data);

//     }
//     catch (err) {
//         res.status(500).json({error: err.message});
//     }

// });

app.listen(8000, () => {
    console.log("Server cha gya on 8000")
})