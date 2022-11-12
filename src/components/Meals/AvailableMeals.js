import classes from "./Available.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Veg Biryani",
    description: "Finest biryani of veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Chicken kabab",
    description: "A Mom specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "chapathi and tomota gojju",
    description: "A special home made meal",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Chciken Biryani",
    description: "Healthy...and TASTY...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
