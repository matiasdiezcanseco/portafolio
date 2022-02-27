import React from 'react'
import { Project, techlonogiesState } from '../../state'
import { urlFor } from '../../client'
import './ProjectBig.scss'
import { FiGithub } from 'react-icons/fi'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import useHover from '../../hooks/useHover'
import _ from 'lodash'
import { useRecoilValue } from 'recoil'

interface ProjectType {
  project: Project
  dir: 'left' | 'right'
}

const ProjectBig: React.FC<ProjectType> = ({ project, dir }) => {
  const [ref, isHovered] = useHover()
  const imgUrl = urlFor(project.imageUrl).width(700).url()
  const tech = useRecoilValue(techlonogiesState)

  const findUrl = (t: string) => {
    const selTech = _.find(tech, { name: t })
    return selTech?.url
  }

  const handleRedirection = () => {
    if (project.prodUrl) window.open(project.prodUrl, '_blank')
  }
  return (
    <div className="projectbig">
      <div className="projectbig__header">
        <div className="projectbig__title">
          {project.featured && <h2>Projecto Destacado</h2>}
          {!project.featured && <h2>Nombre del Projecto</h2>}
          <h1>{project.name}</h1>
        </div>
        <div className="projectbig__nav">
          <a target="_blank" href={project.gitUrl}>
            <FiGithub
              className="projectbig__icon"
              size={25}
              style={{ marginRight: '15px' }}
            />
          </a>
          <a target="_blank" href={project.gitUrl}>
            <BsBoxArrowUpRight className="projectbig__icon" size={25} />
          </a>
        </div>
      </div>
      <div className="projectbig__body">
        <div
          className="projectbig__image"
          style={{ backgroundImage: `url(${imgUrl})` }}
          onClick={handleRedirection}
        >
          <div
            ref={ref}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: isHovered ? '' : 'rgba(12, 39, 1, 0.377)',
              transition: 'background-color 300ms ease-in-out',
            }}
          ></div>
        </div>
        <div>
          <p className="projectbig__description">{project.description}</p>
        </div>
        <ul className="projectbig__list">
          {project.tags.map((t) => {
            const url = findUrl(t)
            return (
              <li className="projectbig__item" key={t}>
                <a href={url} target="_blank">
                  {t}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProjectBig
