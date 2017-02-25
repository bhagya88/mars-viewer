// get all dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDate, getImgURL } from '../actions/data_actions';

class App extends Component{

constructor(props) {
    super(props);
    this.state = {
      date: this.props.date
     
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e){
 
    this.setState({
      [e.target.name] : e.target.value
    });

    this.props.setDate(e.target.value);
  }

  
  handleSubmit(e) {

    e.preventDefault();

    console.log(this.state.date);

    this.props.getImgURL(this.state.date);

  }

	
render(){

var msg='';
if(this.props.imgFound === 'No'){
  msg= 'Sorry, no images were found for this date';
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
               
                 <div className="row center">
                <button className="btn waves-effect waves-light"  onClick={this.handleSubmit}>Submit           
                </button>
                </div>

 
            </div>

            <div className="card-image">
              <div className="row">

                  <div className="col s8 offset-s2">
                   { this.props.imgURL ? <img src={this.props.imgURL} /> : <p className="center">{msg}</p>}

                  </div>
              </div>
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
   getImgURL: React.PropTypes.func,
   setDate: React.PropTypes.func

}

function mapStateToProps(store){

  return {
    
    date: store.data.date,
    imgURL: store.data.imgURL,
    imgFound:store.data.imgFound

  } 
}


export default connect(mapStateToProps,{ setDate, getImgURL })(App);