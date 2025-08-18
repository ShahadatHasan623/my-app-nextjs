const singlefetchMeals = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data?.meals || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const [singleMeal] = await singlefetchMeals(id);
  return {
    title:singleMeal.strMeal,
    description: singleMeal.strInstructions,
  };
}

export default async function singleMealsPage({ params }) {
  const p = await params;
  const singlemeals = await singlefetchMeals(p?.id);
  return (
    <div>
      <p>{JSON.stringify(singlemeals)}</p>
    </div>
  );
}
