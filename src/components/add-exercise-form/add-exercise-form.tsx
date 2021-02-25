import React from "react";


export const AddExerciseForm: React.FunctionComponent = () => {
    return (
      <div>
          <h2>Add Exercise</h2>
          <form>
              <div style={{display: "flex", flexDirection:"column", maxWidth: "25rem"}}>
                  <div className={"form-group"}>
                      <label>Name of exercise</label>
                      <input placeholder={"Enter the name of the exercise here?"} />
                  </div>

                  <div className={"form-group"}>
                      <label>How many reps?</label>
                      <input type="number" name="reps" placeholder={"How many reps are to be done?"}/>
                  </div>

                  <div className={"form-group"}>
                      <label>How many sets?</label>
                      <input type="number" name="sets" placeholder={"How many sets are to be done?"}/>
                  </div>

                  <div className={"form-group"}>
                      <label>Body section?</label>
                      <input type={"text"} placeholder={"Select what area of the body this exercise targets?"}  />
                  </div>

                  <button type="submit">Add Exercise</button>
              </div>
          </form>

      </div>
    );
}