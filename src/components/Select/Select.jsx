import PropTypes from 'prop-types'

Select.propTypes = {
  children: PropTypes.node,
  props: PropTypes.any
}

export default function Select({ children, ...props }) {
  return (
    <select
      className='capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2'
      {...props}
    >
      {children}
    </select>
  )
}