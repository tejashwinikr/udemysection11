import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"
import { Fragment } from "react"

const Meals =()=>{
    return(
        <Fragment>
            <MealsSummary/>
            <AvailableMeals></AvailableMeals>
        </Fragment>
    )
}

export default Meals;