import React from 'react';
import styles from './CodeInput.module.css';

class CodeInput extends React.Component {
  constructor(props) {
    super(props)
    this.textarea = React.createRef();
  }

  componentDidMount() {
    if(this.props.id === this.props.focused) {
      this.textarea.current.focus();
    }
  }
  
  componentDidUpdate() {
    if(this.props.id === this.props.focused) {
      this.textarea.current.focus();
    }
  }

  render() {
    return(
      <textarea 
        className={styles.CodeInput}
        ref={this.textarea}
        style={{
          backgroundColor: this.props.focused === this.props.id ? 'rgb(31, 22, 23)' : 'rgb(21, 16, 16)',
          color: this.props.focused === this.props.id ? 'rgb(46, 189, 7)' : 'rgb(0, 128, 0)',
          border: this.props.focused === this.props.id ? '4px solid rgb(46, 189, 7)' : '4px solid rgb(0, 128, 0)'  
        }}
      >
        
      </textarea>
    )
  }
}


export default CodeInput;