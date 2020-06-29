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
    const page = target === 1 ? "" : target === 2 ? "services" : "contact";
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
          <span className={"button " + isTransition} onClick={()=>this.onClickButton(2)}>Services</span>
          <span className={"button " + isTransition} onClick={()=>this.onClickButton(3)}>Contact</span>
        </div>
        <div className={"textArea " + isTransition}>
          <h2>Profile</h2>
          <h4>Biography</h4>
          <p>
            <b>Sex</b><br/>Male<br/>
            <b>Birthdate</b><br/>1998/03/10<br/>
            <b>Likes</b><br/>Programming / Games (beatmaniaIIDX) / Music / Photography / Driving / etc.<br/>
            <b>Skills</b><br/>JavaScript / Golang / PHP / SQL / etc.
          </p>
          <p>
            I'm at my 4th year at Osaka University, studying laws.<br/>
            Actually I have no interests in law and studying information science at my own.
          </p>
          <p>
            Usually at this website, publishing my own free products.
          </p>
          <h4>Links</h4>
          <p>Under construction</p>
        </div>
      </main>
    );
  }
}

export default withRouter(Profile);
