import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Actions from '../../redux/PostsRedux'
import Posts from '../../components/posts/Posts'
import './Home.scss'

class HomeContainer extends Component {
  addPost() {
    let post = {
      title: 'My own post',
      body: 'This is my own post'
    }

    this.props.addPost(post)
  }

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <Posts data={this.props.posts} />
        <button onClick={() => this.addPost()}>Add post</button>
      </div>
    )
  }
}

HomeContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string
    })
  )
}

function mapStateToProps(state) {
  return {
    posts: state.posts.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: (post) => dispatch(Actions.postAdd(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)