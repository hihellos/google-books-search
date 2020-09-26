import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <div className="form-group">
      <form>
        <div className="input-group mb-3">
          <input className="form-control" placeholder="What book would you like to search for?" aria-label="Book name" type="text" name="q" onChange={handleInputChange} />
        </div>
        <button className="btn btn-lg btn-primary" type="submit" onClick={handleFormSubmit}>Search <span role="img" aria-label="book emoji">📖</span></button>
      </form>
    </div>
  );
}

export default Form;
