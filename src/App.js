import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class App extends Component {

	state={
		
		inputValue: []
	}


	handleClick = (event) =>{

		if(isNaN(event.target.value) || isNaN(event.target.innerHTML)){
			this.setState({
				inputValue: [...this.state.inputValue, event.target.value?event.target.value:event.target.innerHTML].join('')
			})
		
		}	
	
	}

	handleCalculation = () => {
	
		const operationString = this.state.inputValue
		this.setState({
			inputValue: [eval(operationString)]
		})
	}

	clearHandler = () => {
	
		this.setState({
	
			inputValue: []	
		})	
	
	}



  render() {
	  const classes = this.props
    return (

      <div className="container" style={{marginLeft:'30%'}}>
		 <TextField
			  id="standard-dense"
			  label="Enter Number"
	    		  value={this.state.inputValue}
			  className={classes.textField}
			  margin="dense"
	    		  style={{width:'40%'}}
			/>
       
	    <div className="row"> 
		    <div className="col-sm-2">	 

			<Button onClick={(event)=> this.handleClick(event)} value="0" variant="contained" size="large" color="primary" className={classes.button}>0</Button>
		    </div>
	           
		    <div className="col-sm-2">	 

			<Button onClick={(event)=> this.handleClick(event)} value="1" variant="contained" size="large" color="primary" className={classes.button}>1</Button>
		    </div>

		    <div className="col-sm-2">	 
	    
			<Button onClick={(event)=> this.handleClick(event)} value="2" variant="contained" size="large" color="primary" className={classes.button}>2</Button>
		    </div>


	    </div>



	    <div className="row"> 
		    <div className="col-sm-2">	 

			<Button onClick={(event)=> this.handleClick(event)} value="3" variant="contained" size="large" color="primary" className={classes.button}>3</Button>
		    </div>
	           
		    <div className="col-sm-2">	 

			<Button onClick={(event)=> this.handleClick(event)} value="4" variant="contained" size="large" color="primary" className={classes.button}>4</Button>
		    </div>

		    <div className="col-sm-2">	 
	    
			<Button onClick={(event)=> this.handleClick(event)} value="5" variant="contained" size="large" color="primary" className={classes.button}>5</Button>
		    </div>


	    </div>



	    <div className="row"> 
		    <div className="col-sm-2">	 

			<Button onClick={(event)=> this.handleClick(event)} value="6" variant="contained" size="large" color="primary" className={classes.button}>6</Button>
		    </div>
	           
		    <div className="col-sm-2">	 

			<Button onClick={(event)=> this.handleClick(event)} value="7" variant="contained" size="large" color="primary" className={classes.button}>7</Button>
		    </div>

		    <div className="col-sm-2">	 
	    
			<Button onClick={(event)=> this.handleClick(event)} value="89" variant="contained" size="large" color="primary" className={classes.button}>8</Button>
		    </div>


	    </div>


	    <div className="row"> 
		    <div className="col-sm-2">	 
			<Button onClick={(event)=> this.handleClick(event)} value="9" variant="contained" size="large" color="primary" className={classes.button}>9</Button>
		    </div>
	           
		    <div className="col-sm-2">	 
			<Button onClick={this.handleCalculation} variant="contained" size="large" color="primary" className={classes.button}>=</Button>
		    </div>

		    <div className="col-sm-2">	 
			<Button onClick={this.clearHandler} value="C" variant="contained" size="large" color="primary" className={classes.button}>C</Button>
		    </div>

	    </div>

	    <div className="row"> 
		    <div className="col-sm-2">	 
			<Button onClick={(event)=> this.handleClick(event)} value="+" variant="contained" size="large" color="primary" className={classes.button}>+</Button>
		    </div>
	           
		    <div className="col-sm-2">	 
			<Button onClick={(event)=> this.handleClick(event)} value="-" variant="contained" size="large" color="primary" className={classes.button}>-</Button>
		    </div>

		    <div className="col-sm-2">	 
			<Button onClick={(event)=> this.handleClick(event)} value="*" variant="contained" size="large" color="primary" className={classes.button}>*</Button>
		    </div>

	    </div>
      </div>
    );
  }
}

export default App;
