import React from 'react';

export default class Module extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    addEventListener('click', (event)=>{
      alert('hello')
    })
  }

  render(){
    return <div>Module</div>
  }
}
