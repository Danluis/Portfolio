import SkillsContainer from "./SkillsContainer"

//Frontend images

const js = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'

const css = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg'

const html = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg'

const react = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg'

const tailwind = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'

//Backend images
const nodejs = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'

const express = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg'

const mysql = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg'

const mongodb = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg'

const cShrap = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'

const netCore = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg'

//Others images
const git = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg'

const github = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg'

const figma = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'

const vsc = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg'

export default function Skills(){

    const Frontend = [html,css,js,tailwind,react]
    const Backend = [nodejs,express,mysql,mongodb,cShrap,netCore]
    const Others = [git,github,figma,vsc]

    return(
        <>
            <div id="skills" className="w-full h-full pb-14">
             <h1 className='sm:ml-28 ml-8 mb-8 font-bold pt-20 text-4xl text-violet-800'>Skills</h1>
                <SkillsContainer Title={'Frontend'} arrayImage={Frontend}/>
                <SkillsContainer Title={'Backend'} arrayImage={Backend}/>
                <SkillsContainer Title={'Others'} arrayImage={Others}/>
            </div>
        </>
    )
}