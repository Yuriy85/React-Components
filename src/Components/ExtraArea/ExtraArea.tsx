import classes from './ExtraArea.module.css';
import { Circles } from 'react-loader-spinner';
import { useFetching } from '../../hooks/useFetching';
import { getOnlyOneShip } from '../../Api/getShips';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

function ExtraArea() {
  const navigate = useNavigate();
  const [shipDetails, setShipDetails] = useState<string[]>(['']);
  const [getShipsData, loading, error] = useFetching(async (request) => {
    const shipData = await getOnlyOneShip(request as string);
    const result = [];
    for (const [key, value] of Object.entries(shipData)) {
      result.push(`${key}: ${value}`);
    }
    setShipDetails(result);
  });

  const params = useParams();

  useEffect(() => {
    getShipsData(params.id);
  }, [params]);

  return (
    <div className={classes.main}>
      <h1 className={classes.h1}>
        Detailed{' '}
        <span onClick={() => navigate('/')} className={classes.close}>
          &#10006;
        </span>
      </h1>
      <div className={classes.wrapper}>
        {error ? (
          <h1 className={classes.h4}>
            Error... try letter... <br /> {error}
          </h1>
        ) : (
          <>
            <Circles
              visible={loading}
              wrapperClass={classes.spinner}
              color="grey"
            />
            <CSSTransition
              in={!loading}
              timeout={300}
              classNames="animate"
              mountOnEnter
              unmountOnExit
            >
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
            </CSSTransition>
          </>
        )}
      </div>
    </div>
  );
}

export default ExtraArea;
