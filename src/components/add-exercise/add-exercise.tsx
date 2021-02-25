import React from "react";
import { AddExerciseForm } from "../add-exercise-form/add-exercise-form";
import {ExerciseList} from "../exercise-list/exercise-list";

export const AddExerciseSection: React.FunctionComponent = () => {
    return (
        <div>
            <h1>Add Exercise here</h1>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <AddExerciseForm />
                <ExerciseList />
            </div>
        </div>
    )
};