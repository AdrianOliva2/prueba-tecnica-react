export default function Footer() {
  return (
    <footer className='bg-white shadow dark:bg-gray-800'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <p className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2024 App de perros™. Todos los derechos reservados.
        </p>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a
              href='https://github.com/AdrianOliva2/prueba-tecnica-react'
              target='_blank'
              className='hover:underline me-4 md:me-6'
            >
              Github
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/adri%C3%A1n-oliva-del-r%C3%ADo-952038223'
              target='_blank'
              className='hover:underline me-4 md:me-6'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://porfolio-minimal-adrian-oliva.netlify.app/'
              target='_blank'
              className='hover:underline me-4 md:me-6'
            >
              PorFolio
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
