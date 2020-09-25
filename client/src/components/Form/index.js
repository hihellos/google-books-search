import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <div className="form-group">
      <form>
        <label>
          Search Books:
          <input type="text" name="book"/>
        </label>
        <button type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default Form;
