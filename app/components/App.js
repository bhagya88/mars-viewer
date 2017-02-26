// get all dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import { setDate, getImgURL } from '../actions/data_actions';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// check if the date is a valid date
function isValidDate(dt){
  
  return dt.isValid();
}

class App extends Component{

constructor(props) {
    super(props);

    // initial state 
    this.state = {
      date: moment()
     
    }

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

   }


  handleChange(date){
 
      this.setState({ date})
  }

  
   handleSubmit(e){

   console.log("handleSubmit", this.state.date); 
   console.log("date validation", isValidDate(this.state.date));
   if(isValidDate(this.state.date)){
       this.props.setDate(this.state.date);
       this.props.getImgURL(this.state.date.format('YYYY-MM-DD'));
    }
   

  }


  
render(){

var msg='';
if(this.props.imgFound === 'No'){
  msg= 'Sorry, no images were found for this date';
}else if(isValidDate(this.state.date) && this.props.imgFound === 'Error'){
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
                    {/*<input name="date" type="date" className="validate" value={this.state.date} onChange={this.handleChange} required />*/}
                    <DatePicker
                        dateFormat="YYYY-MM-DD"
                        selected={this.state.date}
                        onChange={this.handleChange} />
                  </div>


                </div>
           
                <div className="row center">
                  
                   <div className="col s6 offset-s3">
                     <button className="btn waves-effect waves-light" onClick={this.handleSubmit} >Submit</button>
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
  );
    
  }

}

// define all prop types
App.propTypes = {

   date : React.PropTypes.object,
   imgURL: React.PropTypes.string,
   imgFound:React.PropTypes.string,

   // props mapped to despatch actions
   getImgURL: React.PropTypes.func,
   setDate: React.PropTypes.func

}


// function that pulls data from store
function mapStateToProps(store){

  return {
    // data pulled from store
    date: store.data.date,
    imgURL: store.data.imgURL,
    imgFound:store.data.imgFound

  } 
}

// wraps App component with Connect component
export default connect(mapStateToProps,{ setDate, getImgURL })(App);