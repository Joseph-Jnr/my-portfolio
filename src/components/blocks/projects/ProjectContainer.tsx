import { Project } from '.'
import { projectData } from '@/services'

const ProjectContainer = () => {
  return (
    <section>
      <div className='tr--container'>
        <div className='grid md:grid-cols-3 gap-10 pb-20'>
          {projectData.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectContainer
