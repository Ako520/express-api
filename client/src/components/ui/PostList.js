import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import {Link} from "react-router"


export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  getStyles() {
    return {
      content: {
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em'
      }
    }
  }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      console.log(res);
      this.setState({
        posts: res.data.posts
      });
    });
  }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (
          <div style={styles.content} key={post._id}>
            <div style={styles.title}>{post.title}</div>
            <Link to={`/article/${post._id}`}>
            查看</Link>
          <Link to={`/update/${post._id}`}>
            修改</Link>
          </div>
      )
    }, this.state.posts);
    return(
      <div>
        <Link to="/write">写文章</Link>
        { postList }
      </div>
    );
  }
}
