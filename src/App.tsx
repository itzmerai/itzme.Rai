import { HashRouter, Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import { Home } from './pages/Home'
import { TechStack } from './pages/TechStack'
import { ProjectsPage } from './pages/ProjectsPage'
import { CertificationsPage } from './pages/CertificationsPage'

function App() {
  const theme = useTheme()

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home {...theme} />} />
        <Route path="/tech-stack" element={<TechStack {...theme} />} />
        <Route path="/projects" element={<ProjectsPage {...theme} />} />
        <Route path="/certifications" element={<CertificationsPage {...theme} />} />
      </Routes>
    </HashRouter>
  )
}

export default App
