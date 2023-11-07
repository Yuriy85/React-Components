import React, { useEffect, useState } from 'react';
import { getShips, ShipType } from './Api/getShips';
import BottomArea from './Components/BottomArea/BottomArea';
import MiddleArea from './Components/MiddleArea/MiddleArea';
import TopArea from './Components/TopArea/TopArea';
import filterShips from './../Utils/filterShips';
import { useFetching } from './hooks/useFetching';
import { cardsOnPage, pageCount } from '../Utils/pages';

function App() {
  const [shipsData, setShipsData] = useState<ShipType[]>([]);
  const [filteredShips, setFilteredShips] = useState<ShipType[]>([]);
  const [searchWord, setSearchWord] = useState('');
  const [page, setPage] = useState(1);
  const [countPerPage, setCountPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const [getShipsData, loading, error] = useFetching(async (v) => {
    const data = await getShips(v as string);
    const filtered = filterShips(data, searchWord);
    const totalPages = pageCount(filtered.length, countPerPage);
    setShipsData(filtered);
    setTotalPages(totalPages);
    setPage(1);
    setFilteredShips(cardsOnPage(filtered, totalPages, countPerPage, page));
  });

  useEffect(() => {
    getShipsData();
  }, [countPerPage, searchWord]);

  useEffect(() => {
    if (totalPages > 1) {
      console.log(1);
      setFilteredShips(cardsOnPage(shipsData, totalPages, countPerPage, page));
    }
  }, [page]);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>ReactRSSchool StarShips</h1>
      <TopArea
        max={shipsData.length}
        setCount={setCountPerPage}
        loading={loading}
        badRequest={getShipsData}
        onchange={(event, wordForSearch: string) => {
          event.preventDefault();
          setSearchWord(wordForSearch);
        }}
      />
      {(filteredShips.length || loading) && !error ? (
        <MiddleArea shipsData={{ load: loading, ships: filteredShips }} />
      ) : error ? (
        <h1>
          Error... try letter... <br /> {error}
        </h1>
      ) : (
        <h1>Sorry... not found...</h1>
      )}
      {!loading && !error ? (
        <BottomArea
          totalPages={totalPages}
          activePage={page}
          setActivePage={setPage}
        />
      ) : null}
    </>
  );
}

export default App;
