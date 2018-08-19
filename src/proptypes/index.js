import PropTypes from 'prop-types'

export const newType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired
})

export const newTypeDefault = {
  id: '',
  title: '',
  content: '',
  cardImage: ''
}