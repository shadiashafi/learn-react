import React from "react";


function Search() {

    const [searchKeyword , setSearchKeyword] = React.useState("");

    function handleOnChange(event){
        setSearchKeyword(event.target.value);
    }

    return (
        <div>
            <h1>{searchKeyword}</h1>
            <input type="text" onChange={handleOnChange} />

        </div>
        
    );

}
export default Search;
