import React, { PropTypes } from 'react'
import axios from 'axios'

class Article extends React.Component {
  constructor(){
    super();
    this.state={
      data:{}
    }
  }
  // componentWillMount() {
  //   axios.get(`http://localhost:3000/posts/${this.props.params.id}`).then(res => {
  //     // this.setState({
  //     //   data:
  //     // });
  //     console.log(res);
  //   });
  // }
  componentWillMount() {
    axios.get(`http://localhost:3000/posts/${this.props.params.id}`).then(res => {
      console.log(res);
      this.setState({
        data: res.data
      });
    });
  }
  render () {
    console.log(this.state.data);
    return(
      <div>
        {this.state.data.title}<br/>
        {this.state.data.content}<br/>
        {this.state.data.type}<br/>
        {this.state.data.createTime}
      </div>
    )
  }
}

export default Article;
