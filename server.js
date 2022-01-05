


//


const  express = require ('express');
const mongoose = require ('mongoose');
const morgan = require ('morgan');
const skillsController = require('./controllers/skills');




const app = express()

require('.dotenv').config();

const {DATABASE_URL, PORT = 3000} = process.env;

mongoose.connect(DATABASE_URL);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/skills', require(skillsController));






app.listen(PORT, () => {
    console.log(`express is listening on port: ${PORT}`);
})