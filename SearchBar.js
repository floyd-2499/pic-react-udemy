import React from 'react'

class SearchBar extends React.Component{
 state = { term: ''};

//  onFormSubmit(event) {
//      event.preventDefault();
//      console.log(this.state.term);
//  }
 onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
}

    // onInputChange(event){
    //     console.log(event.target.value);
    // }
    // above (onInputChange) is used in both metods
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                {/* <form onSubmit={event => this.onFormSubmit(event)} className="ui form"> */}
                    <div className="field">
                        <label> Image Search</label>

                        {/* method 1 */}
                        {/* <input type="text" 
                        onChange={this.onInputChange}  /> */}
                        {/* method 2 */}
                        {/* <input type="text"
                        onChange={(event) => console.log(event.target.value);}  /> */}
                        {/* when call back function is called () is not allowed @ react  */}

                         <input type="text"
                           value = {this.state.term}
                        onChange={(e) =>this.setState({ term: e.target.value.toLowerCase() })}  />
                    </div>
                </form>
            </div>

        )
    }

}
export default SearchBar;
