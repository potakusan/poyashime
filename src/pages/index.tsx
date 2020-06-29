import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class Index extends React.Component<RouteComponentProps ,{
  isTransition:boolean
}>{

  constructor(props:RouteComponentProps){
    super(props);
    this.state = {
      isTransition:false
    }
  }

  onClickButton = (target:number)=>{
    if(this.state.isTransition){
      return;
    }
    this.setState({isTransition:true});
    const page = target === 1 ? "profile" : target === 2 ? "services" : "contact";
    setTimeout(()=>{
      this.props.history.push(page);
    },1000);
  }

  render(){
    const isTransition = this.state.isTransition ? "isTransition" : "";
    return (
      <main id="top">
        <h1 id="topTitle" className={"animatedUnderline " + isTransition}>
          poyashi.me
        </h1>
        <div className="buttons">
          <span className={"button " + isTransition} onClick={()=>this.onClickButton(1)}>Profile</span>
          <span className={"button " + isTransition} onClick={()=>this.onClickButton(2)}>Services</span>
          <span className={"button " + isTransition} onClick={()=>this.onClickButton(3)}>Contact</span>
        </div>
      </main>
    );
  }
}

export default withRouter(Index);
