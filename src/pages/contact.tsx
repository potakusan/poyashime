import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class Profile extends React.Component<RouteComponentProps ,{
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
    const page = target === 1 ? "" : target === 2 ? "profile" : "services";
    setTimeout(()=>{
      this.props.history.push(page);
    },1000);
  }

  render(){
    const isTransition = this.state.isTransition ? "isTransition" : "";
    return (
      <main id="profile">
        <h1 className={"animatedUnderline " + isTransition}>
          poyashi.me
        </h1>
        <div className="buttons">
          <span className={"button " + isTransition} onClick={()=>this.onClickButton(1)}>Top</span>
          <span className={"button " + isTransition} onClick={()=>this.onClickButton(2)}>Profile</span>
          <span className={"button " + isTransition} onClick={()=>this.onClickButton(3)}>Services</span>
        </div>
        <div className={"textArea " + isTransition}>
          <h2>Contact</h2>
          <p>
            Please mail at msqkn310@gmail.com
          </p>
        </div>
      </main>
    );
  }
}

export default withRouter(Profile);
