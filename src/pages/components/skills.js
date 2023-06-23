import React from 'react'
import {motion} from 'framer-motion'
import { Pytorch } from './Icons'
import { TensorlfowLogo } from './Icons'

const Skill =({name,x,y})=>{
    return (
        <motion.div className="flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer
        absolute 
        "
        whileHover={{scale:1.05}}
        initial ={{x:0,y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration:1.5}}
        viewport={{once:true}}
        
        >
            {name}
        </motion.div>
    )
}



const Skills = () => {
  return (
    <>
    <h2 className="font-bold text-8xl mt-64 w-full text-center"> SKILLS</h2>
    <div className="w-full h-screen relative flex  items-center justify-center rounded-full bg-circularLight">
            <motion.div className="flex items-center justify-center rounded-full 
            font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
            "
            whileHover={{scale:1.05}}
            >
                Web 
            </motion.div>
            <Skill name="pytorch" x="-5vw" y="-10vw" />
            <Skill name="tensorflow" x="-20vw" y="2vw" />
            <Skill name="Nextjs" x="0vw" y="12vw" />
            <Skill name="Reactjs" x="-20vw" y="-15vw" />
            <Skill name="Nextjs" x="0vw" y="12vw" />
            <Skill name="MongoDB" x="15vw" y="-12vw" />
            <Skill name="Django" x="32vw" y="-5vw" />
            <Skill name="DRF" x="-35vw" y="-8vw" />
            
            

    </div> 
    </>
  )
}

export default Skills