import Logo from '../../assets/Logo'
import './Loading.scss'
import { motion } from 'framer-motion'
const Loading: React.FC = () => {
  return (
    <motion.div className="loading">
      <Logo size="100" animated={true} />
    </motion.div>
  )
}

export default Loading
