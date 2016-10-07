import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios'
import {browserHistory} from "react-router"

class NewPost extends Component {
  getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    };
  }
  goPost(data){
      axios.post('http://localhost:3000/posts', {
        title:data.title,
        content:data.content,
        type:data.type
      })
      .then(function (response) {
        console.log(response);
        browserHistory.push('/')
      })
      .catch(function (error){
        console.log(error);
      })
  }
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.content}>
        <div style={styles.title}>写文章</div>
        <Form goPost={this.goPost.bind(this)}/>
      </div>
    );
  }
}

export default NewPost;
