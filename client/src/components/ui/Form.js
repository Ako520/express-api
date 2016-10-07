import React, { Component } from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import {browserHistory} from "react-router"
import TextField from 'material-ui/TextField';

class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      newData:this.props.oldData,
      x:this.props.num
    }
  }
  getStyles() {
    return {
      form: {
        padding: '20px 40px',
      },
      div: {
        marginBottom: '10px'
      },
      label: {
        display: 'block',
        fontSize: '.9em',
        color: 'rgba(0,0,0,.6)',
        paddingBottom: '10px'
      },
      input: {
        width: '100%',
        height: '48px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        padding: '10px',
        boxSizing: 'border-box',
        ':focus': {
          border: '1px solid #00bcd4',
          outline: 'none'
        }
      },
      actions: {
        textAlign: 'center'
      },
      button: {
          color:"white",
          border:" 10px",
          boxSizing:" border-box",
          display:" inline-block",
          fontFamily:" Roboto, sans-serif",
          cursor:" pointer",
          textDecoration:" none",
          margin:" 20px auto 0px",
          padding:" 0px",
          outline:" none",
          fontSize:" inherit",
          fontWeight:" inherit",
          transform:" translate(0px, 0px)",
          position:" relative",
          height:" 36px",
          lineHeight:" 36px",
          width:" 120px",
          borderRadius:" 10px",
          transition:" all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
          textAlign:" center",
          backgroundColor:" rgb(255, 64, 129)",
      },
      link: {
        display: 'inline-block',
        marginLeft: '15px',
        fontSize: '1em',
        color: '#00bcd4',
        opacity: '.8',
        textDecoration: 'none'
      }
    };
  }
  handleSubmit(e){
    e.preventDefault();
    let data={
      title:this.refs.title.getValue(),
      type : this.refs.type.getValue(),
      content : this.refs.content.getValue()
    }
    this.props.goPost(data);
  }
  componentWillMount() {
    this.setState({
      newData:this.props.oldData
    });
  }

  render() {
    const styles = this.getStyles();
    console.log(this.props.oldData);
    console.log(this.state.x);
    let title=this.props.oldData.title;
    console.log(title);
    return (
      <form style={styles.form}>
        <div style={styles.div}>
          {title}

          <input type="text" value={this.props.oldData.title} />

          <TextField hintText="输入标题"  ref='title' defaultValue={title}  multiLine="true" floatingLabelText="输入标题"/>
          <TextField hintText="输入内容"  ref='content' defaultValue={this.props.oldData.content} floatingLabelText="输入内容" />
          <TextField hintText="输入类型"  ref='type' defaultValue={this.props.oldData.type} floatingLabelText="输入类型"/>


        </div>
        <div style={styles.actions}>
          <button type='submit' style={styles.button} onClick={this.handleSubmit.bind(this)}>Submit</button>
          <Link to='/' style={styles.link}>取消</Link>
        </div>
      </form>
    );
  }
}

Form.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Radium(Form);
