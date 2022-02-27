import './Projects.scss'
import { useRecoilValue } from 'recoil'
import { projectsState } from '../../state'
import _ from 'lodash'
import Project from './ProjectSmall'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectBig from './ProjectBig'

const Projects: React.FC = () => {
  const projects = useRecoilValue(projectsState)
  const featuredProjects = _.filter(projects, { featured: true })
  const nonFeaturedProjects = _.filter(projects, { featured: false })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.section
      id="projects"
      className="projects"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.4 }}
    >
      <h1 className="projects__title">
        <span className="projects__title--number">03.</span> Proyectos
        <span className="projects__title--line"></span>
      </h1>
      <div className="projects__content">
        <div className="projects__featured">
          {featuredProjects.map((p, i) => (
            <ProjectBig
              key={p.name}
              project={p}
              dir={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
        <div className="projects__list">
          {nonFeaturedProjects.map((p) => (
            <Project key={p.name} project={p} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
