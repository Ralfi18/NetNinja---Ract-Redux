import React from 'react'
// import PropTypes from 'prop-types'

const Contact = (props) => {
  setTimeout(() => {
    props.history.push('/about');
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit esse suscipit rerum veritatis quisquam laudantium voluptatibus alias exercitationem, fugit doloremque. Non dolor culpa ducimus, dolores error asperiores eum illum doloribus.</p>
    </div>
  )
}

export default Contact;
