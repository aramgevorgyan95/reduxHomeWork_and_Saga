// REDUX I HAMAR --------------------------------------------------------------------------
import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PeopleAction } from './store/actions';
import { PeopleSelectors } from './store/selectors';
import publicAPI from './services/api/publicAPI';

//SAGA------------------------------------------------
function Timer() {
  const [u, setU] = useState('Hello')
  useEffect(() => {
    setTimeout(() => {
      setU("Bye")
    }, 5000)
  }, [])
  return <h1>Timer :{u}</h1>
}
// -----------------------------------------
function App() {
  //SAGA---------------------------------------------
  const [b, setB] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setB(false)
    }, 2500)
  }, [])
  // ------------------------------------------


  //REDUX  I HAMAR -----------------------------------------------------------------
  const dispatch = useDispatch();
  const list = useSelector(PeopleSelectors.listSelectors)
  // console.log(list); // undefined ?
  const adres = useSelector(PeopleSelectors.addressSelector)
  // console.log(adres);
  const status = useSelector(PeopleSelectors.statusState)

  useEffect(() => {
    console.log('------------------------------------');
    dispatch(PeopleAction.getPeopleListAction())
  }, []);

  const handleGetAdres = useCallback(
    (id) => {
      console.log('id!!!!!!!!!!!!!!!!', id);
      dispatch(PeopleAction.getPeopleAddressAction(id))

      // publicAPI.get('/users', {
      //   params: {
      //     id: id
      //   }
      // }).then((res) => {
      //   dispatch(PeopleAction.setPeopleAddress(res.data));
      //   // dispatch(PeopleAction.changeStatus(false))
      // // }).catch((error) => {
      // //   console.log('Erorr', error);
      // // })
    }
    , []);

  const context = useMemo(() => {
    if (status) {
      return <div style={{ padding: '10px', margin: '20px' }}>
        {list && list?.map((item) => {
          return (
            <div onClick={() => handleGetAdres(item.id)} style={{ width: '200px', border: '1px solid black', borderRadius: '10px', margin: '20px', cursor: 'pointer' }}>
              {item.name}
            </div>
          )
        })}
      </div>
    } else {
      return <div>

        <h1>
          {adres?.street}
        </h1>

      </div>
    }
  }, [status, adres, list, dispatch]);


  return (
    <>
      {/* REDUXI HAMAR E  */}
      <div>
        {context}
      </div>
      <div>

        {/* SAGA */}
        {b && <Timer />}
      </div>
    </>

  );
}

export default App;
