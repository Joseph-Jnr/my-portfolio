import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandRedux,
  IconBrandSass,
  IconBrandTailwind,
  IconCode,
} from '@tabler/icons-react'

const Orbit = () => {
  return (
    <>
      <div className='orbit'>
        <ul className='orbit-wrap'>
          <li className='orbit-center'>
            <i className='orbit-center__icon'>
              <IconCode />
            </i>
          </li>

          <li>
            <ul className='ring-1'>
              <li>
                <i className='orbit-icon redux'>
                  <IconBrandRedux color='white' />
                </i>
              </li>
              <li>
                <i className='orbit-icon nextjs'>
                  <IconBrandNextjs color='white' />
                </i>
              </li>
              <li>
                <i className='orbit-icon react'>
                  <IconBrandReact color='white' />
                </i>
              </li>
            </ul>
          </li>
          <li>
            <ul className='ring-2'>
              <li>
                <i className='orbit-icon git'>
                  <IconBrandGit color='white' />
                </i>
              </li>
              <li>
                <i className='orbit-icon sass'>
                  <IconBrandSass color='white' />
                </i>
              </li>
              <li>
                <i className='orbit-icon tailwind'>
                  <IconBrandTailwind color='black' />
                </i>
              </li>
              <li>
                <i className='orbit-icon bootstrap'>
                  <IconBrandBootstrap color='black' />
                </i>
              </li>
            </ul>
          </li>
          <li>
            <ul className='ring-3'>
              <li>
                <i className='orbit-icon js'>
                  <IconBrandJavascript color='black' />
                </i>
              </li>
              <li>
                <i className='orbit-icon css'>
                  <IconBrandCss3 />
                </i>
              </li>
              <li>
                <div className='orbit-icon html'>
                  <IconBrandHtml5 color='pink' />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Orbit
