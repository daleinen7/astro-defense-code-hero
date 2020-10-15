import React from 'react';
import styles from './CodeInput.module.css';

class CodeInput extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef();
  }
  
  state = {
    formData: {
      answer:''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.fireLaser(this.state.formData);
    this.setState({formData: {answer:''}});
  }

  handleChange = e => {
    const formData = {
      ...this.state.formData, [e.target.name]: e.target.value
    };
    this.setState({formData: formData});
  }

  componentDidMount() {
    if(this.props.id === this.props.focused) {
      this.input.current.focus();
    }
  }
  
  componentDidUpdate() {
    if(this.props.id === this.props.focused) {
      this.input.current.focus();
    }
  }

  render() {
    return(

      <form onSubmit={this.handleSubmit} autoComplete={"off"}>
        <input
          className={styles.CodeInput}
          name="answer"
          value={this.state.formData.answer}
          ref={this.input}
          onChange={this.handleChange}
          style={{
          backgroundColor: this.props.focused === this.props.id ? 'rgb(31, 22, 23)' : 'rgb(21, 16, 16)',
          color: this.props.focused === this.props.id ? 'rgb(240, 128, 128)' : 'rgb(52, 96, 114)',
          border: this.props.focused === this.props.id ? '4px solid rgb(240, 128, 128)' : '4px solid rgb(52, 96, 114)'
          }}
        />
      </form>
    )
  }
}


export default CodeInput;