import Link from "next/link";
import MealsSearch from "./components/MealsSearch";
import Image from "next/image";
import { Geist, Geist_Mono,Roboto } from "next/font/google";

const roboto =Roboto({
  weight:["400","600","700"],
  subsets:["latin"]
})

export const metadata = {
  title:"All meals",
  description: "All meals data fetch loading",
};
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
            <div key={singleMeal.idMeal} className={`${roboto.className}`}>
              <Image src={singleMeal.strMealThumb} width={641} height={641} alt={singleMeal.strMeal}></Image>
              <p className="text-3xl font-bold">{singleMeal.strMeal}</p>
              <p>{singleMeal.strInstructions}</p>
              <Link href={`/meals/${singleMeal.idMeal}`}>Details</Link>
            </div>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
}
