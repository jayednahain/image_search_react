import React from "react";
import { Component } from "react/cjs/react.development";
import SearchComponent from "./SearchInput";
import axios from "axios";


class App extends Component {
    constructor(){
        super()

        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    state ={
        reponse_images : []
    }

    //recive the props data
    async onSearchSubmit(SearchData)
    {
    // onSearchSubmit=async (SearchData)=>{
        console.log(SearchData);
        const response= await axios.get(`https://pixabay.com/api/?key=25570516-a7a98a5a6db1432e8a5154641&q=${SearchData}&image_type=photo`)
        console.log(response.data.hits);
        this.setState({
            reponse_images:response.data.hits
        })
    }


 
    render() { 
        return ( 
            <div className="container">
                <SearchComponent functionProps={this.onSearchSubmit} />
                <h3>total image found {this.state.reponse_images.length}</h3>
            </div>
         );
    }
}
export default App ;
