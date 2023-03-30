import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

import {SiJavascript} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {IoLogoHtml5} from 'react-icons/io'
import {IoLogoCss3} from 'react-icons/io'
import {SiReact} from 'react-icons/si'

import getRepos from '@/api/getRepos'
import getImg from '@/api/getImg'
import Projects from '@/components/projects'


export default function Home() {
  const [Img, setImg] = useState('')
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const awaitGetImg = async () => {
      setImg(await getImg())
    }

    const awaitGetRepos = async  () => {
      setRepos(await getRepos())
    }

    awaitGetImg()
    awaitGetRepos()
  }, [])

  return (
    <div className={styles.Home}>
      <div className={styles.aboutWrapper}>
        <img src={Img} className={styles.img}/>
        <h3 className={styles.h3}>Hi, I'm Davi Tostes👋</h3>
        <p className={styles.p}>Front-End Developer</p>
        <h2 className={styles.h2}>Tech Stack</h2>
        <div className={styles.techWrapper}>
          <div className={styles.tech}>
            <SiJavascript className={styles.techLogo}/>
            <p>Javacript</p>
          </div>
          <div className={styles.tech}>
            <IoLogoNodejs className={styles.techLogo}/>
            <p>NodeJS</p>
          </div>
          <div className={styles.tech}>
            <IoLogoHtml5 className={styles.techLogo}/>
            <p>HTML</p>
          </div>
          <div className={styles.tech}>
            <IoLogoCss3 className={styles.techLogo}/>
            <p>CSS</p>
          </div>
          <div className={styles.tech}>
            <SiReact className={styles.techLogo}/>
            <p>React</p>
          </div>
        </div>
        <h2 className={styles.h2}>Projects</h2>
        <div className={styles.projects}>
          {repos.map((repo : {name: string, homepage: string, language: string}, index) => 
            <Projects
              key={index}
              name={repo.name}
              homepage={repo.homepage}
              language={repo.language}
            />
          )}
        </div>
      </div>
    </div>
  )
}
