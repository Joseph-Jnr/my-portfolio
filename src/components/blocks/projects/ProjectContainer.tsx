import { Project } from '.'
import { projectData } from '@/services'

const ProjectContainer = () => {
  return (
    <section className='project-section bright--bg py-20' id='projects'>
      <div className='tr--container'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projectData.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectContainer
