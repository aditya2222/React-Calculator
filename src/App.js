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
	
		try{
		
		
		const operationString = this.state.inputValue
		this.setState({
			inputValue: [eval(operationString)]
		})

		}


		catch(error){
			
			console.log('Invalid')
		
		}
	}

	clearHandler = () => {
	
		this.setState({
	
			inputValue: []	
		})	
	
	}



  render() {
	  const classes = this.props
    return (

      <div className="container" style={{}}>
		 <TextField
			  id="standard-dense"
			  label="Enter Number"
	    		  value={this.state.inputValue}
			  className={classes.textField}
			  margin="dense"
	    		  style={{width:'100%'}}
			/>
		<table className="table">
		  <tbody>
		    <tr>
		      <th scope="row"><Button onClick={(event)=> this.handleClick(event)} value="0" variant="contained" size="large" color="primary" className={classes.button}>0</Button></th>
		      <td><Button onClick={(event)=> this.handleClick(event)} value="1" variant="contained" size="large" color="primary" className={classes.button}>1</Button></td>
		      <td><Button onClick={(event)=> this.handleClick(event)} value="+" variant="contained" size="large" color="primary" className={classes.button}>+</Button></td>
		    </tr>
	    
		    <tr>
		      <th scope="row"><Button onClick={(event)=> this.handleClick(event)} value="2" variant="contained" size="large" color="primary" className={classes.button}>2</Button></th>
		      <td><Button onClick={(event)=> this.handleClick(event)} value="3" variant="contained" size="large" color="primary" className={classes.button}>3</Button></td>
		      <td><Button onClick={(event)=> this.handleClick(event)} value="-" variant="contained" size="large" color="primary" className={classes.button}>-</Button></td>
		    </tr>

		    <tr>
		      <th scope="row"><Button onClick={(event)=> this.handleClick(event)} value="4" variant="contained" size="large" color="primary" className={classes.button}>4</Button></th>
		      <td><Button onClick={(event)=> this.handleClick(event)} value="5" variant="contained" size="large" color="primary" className={classes.button}>5</Button></td>
		      <td><Button onClick={(event)=> this.handleClick(event)} value="*" variant="contained" size="large" color="primary" className={classes.button}>*</Button></td>
		    </tr>

		    <tr>
		      <th scope="row"><Button onClick={(event)=> this.handleClick(event)} value="6" variant="contained" size="large" color="primary" className={classes.button}>6</Button></th>
		      <td><Button onClick={(event)=>this.handleClick(event)} value="7" variant="contained" size="large" color="primary" className={classes.button}>7</Button></td>
		      <td><Button onClick={(event)=>this.handleClick(event)} value="/" variant="contained" size="large" color="primary" className={classes.button}>/</Button></td>
		    </tr>

		    <tr>
		      <th scope="row"><Button onClick={(event)=> this.handleClick(event)} value="8" variant="contained" size="large" color="primary" className={classes.button}>8</Button></th>
		      <td><Button onClick={(event)=> this.handleClick(event)} value="9" variant="contained" size="large" color="primary" className={classes.button}>9</Button></td>
		      <td><Button onClick={this.clearHandler} value="C" variant="contained" size="large" color="primary" className={classes.button}>C</Button></td>
		    </tr>

		    <tr>
		      <th scope="row"></th>
		      <td><Button onClick={(event)=> this.handleClick(event)} value="." variant="contained" size="large" color="primary" className={classes.button}>.</Button></td>
		      <td><Button onClick={this.handleCalculation} value="=" variant="contained" size="large" color="primary" className={classes.button}>=</Button></td>
		    </tr>
		  </tbody>
		</table>

       
      </div>
    );
  }
}

export default App;
