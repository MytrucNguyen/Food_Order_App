import classes from './index.module.css';
import Card from '../../UI/Card';
import MealItem from '../MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Vietnamese Egg Rolls',
      description: 'Shrimp, Pork, Onions, Carrots, Shitake and Rice Vermicelli',
      price: 9.99,
    },
    {
      id: 'm2',
      name: 'Calamari Strips',
      description: 'Spicy Sauce, Fried Calamari, Carrots, Lettuce, Cucumbers, Rice Vermicelli, Bean Sprouts and Peanut',
      price: 11.5,
    },
    {
      id: 'm3',
      name: 'Large Pho Bo Vien/Pho Meatballs',
      description: 'Meatball and Rice Noodle',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Vegetable and Tofu Pho',
      description: 'Healthy...and green...',
      price: 11.99,
    },
  ];

export default function AvailableMeals () {
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