import React from 'react';

export default class Module2 extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    addEventListener('click', (event)=>{
      alert('goodbye')
    })
  }

  render(){
    return <div>Bye</div>
  }
}
