import './App.scss'
import Greet from './components/greet/Greet'
import Navigation from './components/nav/Navigation'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Experience from './components/jobs/Experience'
import Footer from './components/footer/Footer'
import Loading from './components/loading/Loading'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { jobsState, projectsState, techlonogiesState } from './state'
import { client } from './client'
import type { Project, Technology, Job } from './state'
import About from './components/about/About'

const App = () => {
  const [jobs, setJobs] = useRecoilState(jobsState)
  const [tech, setTech] = useRecoilState(techlonogiesState)
  const [projects, setProjects] = useRecoilState(projectsState)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const exec = async () => {
      console.time('time')
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
      setTimeout(() => {
        setIsLoading(false)
        console.timeEnd('time')
      }, 1500)
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
