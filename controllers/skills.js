const express = require('express')
const skillsRouter = express.Router()
const Skill = require('../models/skill');

//index
skillsRouter.get('/', async (req, res) => {
const skills = await Skill.find({});
res.json(skills);

} );


//crate
skillsRouter.post('/', async (req, res) => {
    const skill = await Skill.create(req.body);
    res.json(skill);
    } );










module.exports = skillsRouter;