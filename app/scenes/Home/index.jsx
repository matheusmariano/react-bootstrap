import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Actions from '../../data/posts/redux';
import Posts from './components/Posts/';
import Button from '../../components/Button/';
import './styles.scss';

class HomeScreen extends Component {
  componentWillMount() {
    document.title = 'React Bootstrap';
  }

  addPost() {
    const post = {
      title: 'My own post',
      body: 'This is my own post',
    };

    this.props.addPost(post);
  }

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <Posts data={this.props.posts} />
        <Button onClick={() => this.addPost()}>Add Post</Button>
      </div>
    );
  }
}

HomeScreen.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string,
    }),
  ).isRequired,
  addPost: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.posts.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: post => dispatch(Actions.postAdd(post)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeScreen),
);
