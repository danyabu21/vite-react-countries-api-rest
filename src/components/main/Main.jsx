import React from 'react';
import './Main.scss';
import axios from 'axios';

import { SearchInputs } from '../search-inputs';
import { Card } from '../card';

const Main = () => {
  const [countries, setCountries] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const getCountries = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    setCountries(response.data);
  };

  React.useEffect(() => {
    getCountries();
  }, []);

  React.useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <main className="main p-2 p-sm-4">
      <div className="mx-2">
        <SearchInputs />
      </div>
      <section className="cards row d-flex justify-content-between mt-5 m-auto ">
        {countries &&
          countries.map(
            ({ name, flags, population, region, capital }, index) => (
              <Card
                className="col-12 col-md-4 mb-4"
                key={index}
                name={name.common}
                image={flags.png}
                population={population}
                region={region}
                capital={capital}
              />
            )
          )}
      </section>
    </main>
  );
};

export default Main;
