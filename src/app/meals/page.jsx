import MealsSearch from "./components/MealsSearch";

export default async function Meals({ searchParams }) {
  const query = searchParams?.search || "";

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      return data?.meals || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div>
      <div>
        <MealsSearch />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {meals.length > 0 ? (
          meals.map((singleMeal) => (
            <div key={singleMeal.idMeal}>
              <p className="text-3xl font-bold">{singleMeal.strMeal}</p>
              <p>{singleMeal.strInstructions}</p>
            </div>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
}
