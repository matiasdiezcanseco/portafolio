import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/jobs/Experience'
import Footer from './components/footer/Footer'
import Greet from './components/greet/Greet'
import Loading from './components/loading/Loading'
import Navigation from './components/nav/Navigation'
import Projects from './components/projects/Projects'
import { client } from './client'
import { jobsState, projectsState, techlonogiesState } from './state'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import './App.scss'

import type { Project, Technology, Job } from './state'

const App = () => {
  const [jobs, setJobs] = useRecoilState(jobsState)
  const [tech, setTech] = useRecoilState(techlonogiesState)
  const [projects, setProjects] = useRecoilState(projectsState)
  const [isLoading, setIsLoading] = useState(true)
  const [start, setStart] = useState(Date.now())

  useEffect(() => {
    const exec = async () => {
      const qProjects = "*[_type == 'projects']"
      const res1: Project[] = await client.fetch(qProjects)
      setProjects(res1)

      const qJobs = "*[_type == 'jobs']"

      const res2: Job[] = await client.fetch(qJobs)
      setJobs(res2)

      const qTech = "*[_type == 'technologies']"
      const res3: Technology[] = await client.fetch(qTech)
      setTech(res3)
    }

    exec()
  }, [])

  useEffect(() => {
    if (jobs.length > 0 && tech.length > 0 && projects.length > 0) {
      const timePassed = Date.now() - start
      const timer = timePassed > 2000 ? 0 : 2000 - timePassed
      setTimeout(() => {
        setIsLoading(false)
      }, timer)
    }
  }, [jobs, tech, projects])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="app">
          <Navigation />
          <Greet />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
