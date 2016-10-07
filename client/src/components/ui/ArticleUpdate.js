import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios'
import {browserHistory} from "react-router"

class ArticleUpdate extends React.Component {
  constructor(){
    super();
    this.state={
      data:{}
    }
  }
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
  componentWillMount() {
    axios.get(`http://localhost:3000/posts/${this.props.params.id}`).then(res => {
      this.setState({
        data: res.data
      });
    });
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
  render () {
    console.log(this.state.data);
    const styles = this.getStyles();
    let x=1;
    return(
      <div>
        <div style={styles.title}>Update The Article</div>
        <Form goPost={this.goPost.bind(this)} oldData={this.state.data} num="1"/>
      </div>
    )
  }
}

export default ArticleUpdate;
