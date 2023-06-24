import React from 'react';
import ReactDom from 'react-dom';
import ImageListing from './component/Image_ls';
import SearchInput from './component/searchInput';
import axios from 'axios';

class API extends React.Component{

    state = {images:[]}

    onSubmit = async(entry) => {
        const response = await axios.get(`https://api.pexels.com/v1/search/?query=${entry}&per_page=100`);
        this.setState({images:response.data.photos})

    }

    render(){
        return(
            <div className='ui container' style={{marginTop:'10px'}}>
                <SearchInput return_var={this.onSubmit}/>
                <ImageListing images={this.state.images} />
            </div>
        )
    }
}

export default API;
// ReactDom.render(
//     <App />
//     ,document.querySelector("#root")
// );