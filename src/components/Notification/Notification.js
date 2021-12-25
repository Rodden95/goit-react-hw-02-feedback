import PropTypes from 'prop-types'
export default function Notification({ messege }) {
  return (
    <span>{ messege}</span>
  )
}
PropTypes.Notification = {
  messege: PropTypes.string.isRequired,
}