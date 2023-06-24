import React from 'react';
import axios from 'axios';

class SearchInput extends React.Component{

    constructor(props){
        super(props)
    }

    state = {entry:''};

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.return_var(this.state.entry);

    }
    

    render(){
        return(

            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input 
                            type="text" 
                            onChange={(event) =>{this.setState({entry:event.target.value})}} 
                            value = {this.state.entry}
                            placeholder='Search Image keyword....'/>
                            <i className='search icon' ></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;