// get all dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDate, getImgURL } from '../actions/data_actions';

class App extends Component{

constructor(props) {
    super(props);

    // initial state 
    this.state = {
      date: this.props.date
     
    }

    
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e){
 
    this.setState({
      [e.target.name] : e.target.value
    });

    console.log("handleChange", e.target.value);

    this.props.setDate(e.target.value);
    this.props.getImgURL(e.target.value);

  }

  

  
render(){

var msg='';
if(this.props.imgFound === 'No'){
  msg= 'Sorry, no images were found for this date';
}else if(this.props.imgFound === 'Error'){
  msg= 'Error occured while fetching the image.';
}

return (
    <div className="container">
        <div className="row">
        <div className="col s10 offset-s1">
          <div className="card">


             <div className="card-content">
              <span className="card-title center  red-text">Mars Viewer</span>
              <br/>
              <p className="center">See how Mars looked like on this date</p>
          
                <div className="row center">
                  
                   <div className="col s6 offset-s3">
                    <input name="date" type="date" className="validate" value={this.state.date} onChange={this.handleChange} required />
                  </div>
                </div>
           

 
            </div>

            <div className="card-image">
              <div className="row">

                  <div className="col s8 offset-s2">
                   { this.props.imgURL ? <img src={this.props.imgURL} /> : <p className="center">{msg}</p>}

                  </div>
              </div>
              <br/>
              <br/>
            </div>

            
          </div>
        </div>
      </div>
      </div>

  )
    
  }

}

App.propTypes = {

   date : React.PropTypes.string,
   imgURL: React.PropTypes.string,
   imgFound:React.PropTypes.string,

   // props mapped to despatch actions
   getImgURL: React.PropTypes.func,
   setDate: React.PropTypes.func

}

function mapStateToProps(store){

  return {
    // data pulled from store
    date: store.data.date,
    imgURL: store.data.imgURL,
    imgFound:store.data.imgFound

  } 
}


export default connect(mapStateToProps,{ setDate, getImgURL })(App);