import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import MemeItem from './MemeItem';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      memeLimit:10
    }
  }
  render() {
    console.log("-->props",this.props);
    return (
      <div>
       <h2>Meme generator</h2>
        {
          this.props.memes.slice(0,this.state.memeLimit).map((meme,index)=>{
            return(
              <MemeItem key={index} meme={meme}/>
            )
          })
        }
        <div className="meme-button" onClick={()=>{
          this.setState({memeLimit:this.state.memeLimit+10})
        }}>Load 10 more...</div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps,null) (App);
