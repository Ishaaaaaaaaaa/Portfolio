import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1> 
      <div className="h-full w-full flex flex-col md:flex-row gap-12 px-10">
      
        <ProjectCard
          src="/yoga.png"
          title="Yoga App project"
          description="Yogasphere is a yoga app designed to help users practice yoga at their convenience. Built with HTML, CSS, JavaScript, and SQL, the app offers various yoga classes, poses, and meditation routines."
          
        />
        
        <ProjectCard
          src="/voting.png"
          title="Votelytics Voting App"
         description="Votelytics is an online voting platform built using HTML, CSS, PHP. The app allows users to participate in secure and anonymous voting, view results in real-time, and manage elections.."
        />
        <ProjectCard
          src="/uber.png"
          title="Uber ride Predictions"
          description="The Uber Ride Prediction app uses machine learning to estimate ride fares and arrival times. It analyzes factors like pick-up location, drop-off location, time of day, and traffic to predict how much a ride will cost and how long it will take.."
        /> 
        
  
      </div>
    </div>
  );
};

export default Projects;
