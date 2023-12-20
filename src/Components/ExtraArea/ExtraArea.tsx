import classes from './ExtraArea.module.css';
import { Circles } from 'react-loader-spinner';
import { useFetching } from '../../hooks/useFetching';
import { getOnlyOneShip } from '../../Api/getShips';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { AppDataContext } from '../../context';

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
  const context = useContext(AppDataContext);

  useEffect(() => {
    getShipsData(params.id);
  }, [context?.urlForDetail]);

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
                {shipDetails.map((detail, index) => (
                  <h4
                    key={detail}
                    className={
                      index % 2 === 1
                        ? classes.h4
                        : [classes.h4, classes.active].join(' ')
                    }
                  >
                    {detail}
                  </h4>
                ))}
              </div>
            </CSSTransition>
          </>
        )}
      </div>
    </div>
  );
}

export default ExtraArea;
