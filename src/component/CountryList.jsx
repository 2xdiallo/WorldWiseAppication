/* eslint-disable react/prop-types */

import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";


function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message={"Add your first Country by clicking on the Map 😊👉"} />
    );

  const countryList = cities.reduce((accumulatorArray, currCity) => {
    const countryObject = {
      country: currCity.country,
      emoji: currCity.emoji,
    };

    // Check if the country is already in the accumulator
    const exists = accumulatorArray.some(
      (element) => element.country === currCity.country
    );

    if (!exists) {
      return [...accumulatorArray, countryObject];
    } else {
      return accumulatorArray;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countryList.map((currentCountry) => {
        return (
          <CountryItem country={currentCountry} key={currentCountry.country} />
        );
      })}
    </ul>
  );
}

export default CountryList;
