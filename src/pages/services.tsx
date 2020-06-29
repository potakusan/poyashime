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
    const page = target === 1 ? "" : target === 2 ? "profile" : "contact";
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
          <span className={"button " + isTransition} onClick={()=>this.onClickButton(3)}>Contact</span>
        </div>
        <div className={"textArea " + isTransition}>
          <h2>Services</h2>
          <h4>Ongoing</h4>
          <p>
            <a href="https://bpi.poyashi.me">BPI Manager</a>
          </p>
          <p>
            <a href="https://buster.poyashi.me">ShittyReply Buster</a>
          </p>
          <p>
            <a href="https://nijie.poyashi.me">Nijie Downloader</a>
          </p>
          <p>
            <a href="https://wordpress-cheating.com">WordPress Cheatings</a>
          </p>
          <p>
            <a href="https://shukatsu-strategy.com">Shukatsu-Strategy</a>
          </p>
          <h4>Abandoned</h4>
          <p>
            <a href="https://ir.poyashi.me">IR SUPPORTER</a>
          </p>
          <p>
            <a href="https://mst.poyashi.me">Mastodon Downloader</a>
          </p>
          <p>
            <a href="#">Sikolog</a>
          </p>
          <p>
            <a href="https://mc.poyashi.me">Minecraft Private Server</a>
          </p>
        </div>
      </main>
    );
  }
}

export default withRouter(Profile);
