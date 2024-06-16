document.addEventListener('DOMContentLoaded', () => {
    const mealForm = document.getElementById('meal-form');
    const mealList = document.getElementById('meal-list');
    const totalCaloriesElement = document.getElementById('total-calories');
    const addFoodButton = document.getElementById('add-food');

    
    const updateTotalCalories = () => {
        let totalCalories = 0;
        const meals = JSON.parse(localStorage.getItem('meals')) || [];
        meals.forEach(meal => {
            totalCalories+=meal.calories;
        });
        totalCaloriesElement.textContent = totalCalories;
        console.log(totalCalories);
    };

  
    const addMealToDom = (meal,index) => {
        const mealItem = document.createElement('li');
        mealItem.textContent = `${meal.name} - ${meal.calories} calories :: time- ${meal.timestamp}`;
        mealList.appendChild(mealItem);
    }; 

    const saveMeal = (meal) => {
        const meals = JSON.parse(localStorage.getItem('meals')) || [];
        meals.push(meal);
        localStorage.setItem('meals', JSON.stringify(meals));
        return meals.length - 1;
    };

    const loadMeals = () => {
        const meals = JSON.parse(localStorage.getItem('meals')) || [];
        meals.forEach(meal=>{
            addMealToDom(meal);
        });
        updateTotalCalories();
    };

    addFoodButton.addEventListener('click', () => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `<label for="food-name">Food Item:</label>
                        <input type="text" class="food-name" id="food-name" required>
                        <label for="calories">Calories:</label>
                        <input type="number" class="calories" id="calories">
                        <button type="button" id="get-calories">Cet Calories</button>`;
        document.getElementById('food-items').appendChild(foodItem);
    }
    );

    mealForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const mealName = document.getElementById(`meal-name`).value;
        const foodNames = document.querySelectorAll('.food-name');
        const caloriesInputs = document.querySelectorAll('.calories');

        let totalCalories = 0;

        const foods = [];
        foodNames.forEach((foodName, index) => {
            const food = {
                name: foodName.value,
                calories: parseInt(caloriesInputs[index].value)
            };
            foods.push(food);
            totalCalories += food.calories;
        }
        );

        const meal = {
            name: mealName,
            foods: foods,
            calories: totalCalories,
            timestamp: new Date().toLocaleString()
        };

        const index = saveMeal(meal);
        addMealToDom(meal, index);
        updateTotalCalories();
        mealForm.reset();

    }
    );

    loadMeals();

}
);