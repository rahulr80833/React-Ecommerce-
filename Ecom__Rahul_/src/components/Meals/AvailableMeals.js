import { useEffect } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';



const AvailableMeals = () => { 
  useEffect(async() => {
   await fetch('https://react-http-7d31b-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'.then(() => {}));
  }, [])

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
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