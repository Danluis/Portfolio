import SkillsContainer from "./SkillsContainer"
//Frontend images
import js from '../assets/FrontEnd/js.png'
import css from '../assets/FrontEnd/css.png'
import html from '../assets/FrontEnd/html.png'
import react from '../assets/FrontEnd/react.png'
import tailwind from '../assets/FrontEnd/tailwind.png'

//Backend images
import nodejs from '../assets/BackEnd/node.png'
import express from '../assets/BackEnd/express.png'
import mysql from '../assets/BackEnd/mysql.png'
import mongodb from '../assets/BackEnd/mongodb.png'

//Others images
import git from '../assets/Others/git.png'
import github from '../assets/Others/github.png'
import figma from '../assets/Others/figma.png'
import vsc from '../assets/Others/vsc.png'

export default function Skills(){

    const Frontend = [html,css,js,tailwind,react]
    const Backend = [nodejs,express,mysql,mongodb]
    const Others = [git,github,figma,vsc]

    return(
        <>
            <div id="skills" className="w-full h-screen">
             <h1 className='ml-28 mb-8 font-bold pt-20 text-4xl text-violet-800'>Skills</h1>
                <SkillsContainer Title={'Frontend'} arrayImage={Frontend}/>
                <SkillsContainer Title={'Backend'} arrayImage={Backend}/>
                <SkillsContainer Title={'Others'} arrayImage={Others}/>
            </div>
        </>
    )
}