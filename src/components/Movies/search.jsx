import React, { Component } from 'react';
import { FaFilter } from "react-icons/fa";


class Search extends Component {
    state = { 
        value: ''
     }

    
     doSearching  = (event) => {
        //  if (event.target.value === "") return
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);
        setTimeout(() => {
            this.props.callback(this.state.value)   
        }, 3000);
         
    

     }
    render() { 
        return ( 
            <React.Fragment>               
                <div className="container-fluid pt-3">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-5 offset-md-2">
                                <input value={this.state.value} onChange={this.doSearching} type="text" className="form-control text-center" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Search"/> 
                                </div>
                                <div className="col-md-1 offset-md-4">
                                    <h5 className="text-dark  ">Filter <button className=""><FaFilter/></button>  </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </React.Fragment>
         );
    }
}
 
export default Search;