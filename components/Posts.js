import React, { PropTypes, Component } from 'react'

export default class Posts extends Component {
  render () {
    return (
      <ul>
        {this.props.posts.map((posts, i) =>
          <li key={i}>{posts.title}</li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
