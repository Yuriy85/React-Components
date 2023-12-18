import classes from './ExtraArea.module.css';
import { Circles } from 'react-loader-spinner';
import { useFetching } from '../../hooks/useFetching';
import { getOnlyOneShip } from '../../Api/getShips';
import { useEffect, useState } from 'react';

function ExtraArea(props: {
  url: string | undefined;
  setUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const [shipDetails, setShipDetails] = useState<string[]>(['']);

  const [getShipsData, loading, error] = useFetching(async (request) => {
    const shipData = await getOnlyOneShip(request as string);
    const result = [];
    for (const [key, value] of Object.entries(shipData)) {
      result.push(`${key}: ${value}`);
    }
    setShipDetails(result);
  });

  useEffect(() => {
    if (props.url) {
      getShipsData(props.url as string);
    }
  }, [props.url]);

  return (
    <div
      className={
        props.url ? [classes.main, classes.mainActive].join(' ') : classes.main
      }
    >
      <h1 className={classes.h1}>
        Detailed{' '}
        <span onClick={() => props.setUrl('')} className={classes.close}>
          X
        </span>
      </h1>
      <div className={classes.wrapper}>
        {error ? (
          <h1>
            Error... try letter... <br /> {error}
          </h1>
        ) : loading ? (
          <Circles wrapperClass={classes.spinner} color="grey" visible />
        ) : (
          <div style={{ background: 'none' }}>
            {shipDetails.map((detail, index) => {
              if (index % 2 === 1) {
                return (
                  <h4
                    style={{ background: 'rgb(0, 0, 0, 0.1)' }}
                    key={detail}
                    className={classes.h4}
                  >
                    {detail}
                  </h4>
                );
              }
              return (
                <h4 key={detail} className={classes.h4}>
                  {detail}
                </h4>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExtraArea;
