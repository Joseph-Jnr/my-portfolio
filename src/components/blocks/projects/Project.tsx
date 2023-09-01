import { ReactNode } from 'react'
import { Card, Image, Text, ActionIcon, Group } from '@mantine/core'
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

interface Links {
  github: string
  site: string
}

type ProjectTypes = {
  title: string
  thumbnail: any
  description: string
  links: Links
  technologies: ReactNode
}

const Project = ({
  title,
  thumbnail,
  description,
  links,
  technologies,
}: ProjectTypes) => {
  return (
    <>
      <div className='single-project'>
        <Card className='project-card' shadow='sm' padding='lg' radius='md'>
          <Card.Section>
            <Image src={thumbnail} height={160} alt={title} />
          </Card.Section>
          <Group position='apart' mt='md' mb='xs'>
            <Text weight={500} className='gradient--text'>
              {title}
            </Text>

            <Group>
              {links.github && (
                <ActionIcon variant='light'>
                  <Link target='_blank' to={links.github}>
                    <IconBrandGithub size='1rem' />
                  </Link>
                </ActionIcon>
              )}

              {links.site && (
                <ActionIcon variant='light'>
                  <Link target='_blank' to={links.site}>
                    <IconExternalLink size='1rem' />
                  </Link>
                </ActionIcon>
              )}
            </Group>
          </Group>
          <Text size='sm' color='dimmed' className='desc'>
            {description}
          </Text>

          <div className='stack'>
            <Group mt='xl'>{technologies}</Group>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Project
