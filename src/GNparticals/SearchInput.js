import React from "react";
import { Component } from "react/cjs/react.development";
class SearchComponent extends Component {
    constructor(){
        super()
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    
    state = { 
        input:""
     }
    // onInputChnage() {

    // }
    //function will run after hit enter !
    onFormSubmit(event){
        event.preventDefault()
        // console.log(this.state.input);
        // console.log(this.props);

        //sending data by props
        this.props.functionProps(this.state.input)
    }
    render() { 
        return ( 
            <div className="ui segment mt-5">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input 
                            placeholder="Search type" 
                            type="text"
                            //call with other function
                            //onChange={this.onInputChnage}

                            //using arrow function! 
                            //onChange={(event)=>(console.log(event.target.value))}

                            onChange={(event)=>
                                this.setState({
                                    input:event.target.value
                                }
                                )}
                                //using upper case !
                                // onChange={(event)=>
                                //     this.setState({
                                //         input:event.target.value.toUpperCase()
                                //     }
                                //     )}
                            value={this.state.input}
                            >    
                            </input>
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SearchComponent;