import React, { useEffect, useState, useMemo } from 'react';
import { getShips, ShipType } from '../../Api/getShips';
import PagesButtonArea from './PagesButtonArea/PagesButtonArea';
import ShipsArea from './ShipsArea/ShipsArea';
import AreaForChange from './AreaForChange/AreaForChange';
import filterShips from '../../../Utils/filterShips';
import sortShips from '../../../Utils/sortShips';
import { useFetching } from '../../hooks/useFetching';
import { cardsOnPage, pageCount } from '../../../Utils/pages';
import ErrorBundle from './ErrorBundle/ErrorBundle';
import { Sort } from './AreaForChange/SortArea/SortArea';

function MainArea(props: {
  getShipUrl: (shipUrl: string | undefined) => void;
  changeUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const [shipsData, setShipsData] = useState<ShipType[]>([]);
  const [filteredShips, setFilteredShips] = useState<ShipType[]>([]);
  const [searchWord, setSearchWord] = useState('');
  const [sortType, setSortType] = useState<Sort>('name');
  const [page, setPage] = useState(1);
  const [countPerPage, setCountPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const [getShipsData, loading, error] = useFetching(async (request) => {
    const data = await getShips(request as string);
    let filtered = data;
    if (searchWord) {
      filtered = filterShips(data, searchWord);
    }
    const sorted = sortShips(filtered, sortType);
    const totalPages = pageCount(sorted.length, countPerPage);
    setShipsData(sorted);
    setTotalPages(totalPages);
    setPage(1);
    setFilteredShips(cardsOnPage(sorted, totalPages, countPerPage, page));
  });

  useEffect(() => {
    getShipsData();
  }, [countPerPage, searchWord]);

  useEffect(() => {
    setFilteredShips(cardsOnPage(shipsData, totalPages, countPerPage, page));
  }, [page, shipsData]);

  useMemo(() => {
    const result = sortShips(shipsData, sortType);
    setShipsData(result);
    return result;
  }, [sortType]);

  return (
    <div onClick={() => props.changeUrl('')} className="main-area">
      <h1 style={{ textAlign: 'center' }}>React StarShips</h1>
      <ErrorBundle badRequest={getShipsData} />
      <AreaForChange
        max={shipsData.length}
        setCount={setCountPerPage}
        setSort={setSortType}
        loading={loading}
        onchange={(event, wordForSearch: string) => {
          event.preventDefault();
          setSearchWord(wordForSearch);
        }}
      />
      {error ? (
        <h1>
          Error... try letter... <br /> {error}
        </h1>
      ) : filteredShips.length || loading ? (
        <ShipsArea
          load={loading}
          ships={filteredShips}
          getShipUrl={props.getShipUrl}
        />
      ) : (
        <h1>Sorry... not found...</h1>
      )}
      {!loading && !error ? (
        <PagesButtonArea
          totalPages={totalPages}
          activePage={page}
          setActivePage={setPage}
        />
      ) : null}
    </div>
  );
}

export default MainArea;
