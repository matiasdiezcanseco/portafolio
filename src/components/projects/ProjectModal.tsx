import type { Project } from '../../state'
import './ProjectModal.scss'
import { MdOutlineCloseFullscreen } from 'react-icons/md'
import ProjectBig from './ProjectBig'
import { motion } from 'framer-motion'
interface ProjectModalType {
  project: Project
  close: () => void
}

const ProjectModal: React.FC<ProjectModalType> = ({ project, close }) => {
  return (
    <motion.div
      transition={{ duration: 0.3, delay: 0.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="modal"
    >
      <nav className="modal__nav" onClick={close}>
        <MdOutlineCloseFullscreen size={20} />
      </nav>
      <ProjectBig project={project} dir={'left'} />
    </motion.div>
  )
}

export default ProjectModal
