const Project = require("../models/projectModel");


const getProject = async (req,res)=>{
    const data = await Project.find({});
    return res.status(200).json({ 
        message: "All Project",
        data
    });


}

const createProject = async (req,res)=> {  
    const { imageUrl, projectOwner, projectTitle, description, techStack, experienceLevel, projectContributer, isActive} = req.body;

    if (!imageUrl || !projectOwner || !projectTitle || !description || !techStack || !experienceLevel || !projectContributer || !isActive){
        return res.status(400).send({ message: "Please Add all mandatory fields" });
    }
    // console.log(req.user);
    

    const newProject = await Project.create({
        userId: req.user[0]._id,
        imageUrl,
        projectOwner,
        projectTitle, 
        description,
        techStack,
        experienceLevel, 
        projectContributer,
        isActive
    })

    const data = await newProject.save();

    return res.status(201).json({ 
        message: "Project Created",
        data
    });


}

const updateProject = async(req , res)=>{
    
}

module.exports = {getProject, createProject , updateProject};