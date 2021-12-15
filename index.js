import express from 'express';
const app = express();
import cors from 'cors';

app.use(express.static('public'))
app.use(cors())


const port = 3000
app.listen(port, (req, res) => {
    console.log(`We are up and running on Port ${port}`)
})
