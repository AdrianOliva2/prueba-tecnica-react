export default function Header() {
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <span className='flex items-center'>
            <img
              src='./logo.svg'
              className='mr-3 h-6 sm:h-9'
              alt='Logo App de perros'
            />
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              App de perros
            </span>
          </span>
        </div>
      </nav>
    </header>
  )
}
