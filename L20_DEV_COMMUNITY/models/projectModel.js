const mongoose = require("mongoose");

const { Schema }=  mongoose;

const ProjectSchema = new Schema({
    userId: { type: String, required: true  },
    imageUrl: {type: String, required: true},
    projectOwner: {type: String, required: true},
    projectTitle: {type: String, required: true},
    description: { type: String, required: true},
    techStack: { type: [String], required: true},
    experienceLevel: { type: String, enum:["Entry Level" , "Intermediate" , "Experienced"], required: true},
    projectContributer: {type: [String]},
    isActive: {type: Boolean, required: true, default: true}    
},
{timestamps: true})

module.exports = mongoose.model("Project",ProfileSchema);