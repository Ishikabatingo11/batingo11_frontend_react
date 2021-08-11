import React from "react";

function Form(){
    return(<div>
        <form>
        <input
          id="mobileNumber"
          type="text"
          name=""
          value=""
          maxlength="10"
          placeholder="Enter Phone Number"
          onkeypress="return onlyNumberKey(event)"
          type="tel"
        />

      <button id="get-app-btn" type="submit" name="getAppLink" form="mobileNumber">Get App link</button>
    </form>
    </div>);
}

export default Form;