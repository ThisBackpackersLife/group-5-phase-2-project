import React, { useState } from "react";

function RadioButtons({ radioBtn, changeRadioBtn }) {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState("");

  const handleRadioBtnChange = (e) => {
    const value = e.target.value;
    changeRadioBtn(e);
    setSelectedRadioBtn(value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <form>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value=""
                  checked={selectedRadioBtn === ""}
                  onChange={handleRadioBtnChange}
                />
                All
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="title"
                  checked={selectedRadioBtn === "title"}
                  onChange={handleRadioBtnChange}
                />
                Sort by Title
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="genre"
                  checked={selectedRadioBtn === "genre"}
                  onChange={handleRadioBtnChange}
                />
                Sort by Genre
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RadioButtons;