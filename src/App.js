import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PeopleAction } from './store/actions';
import { PeopleSelectors } from './store/selectors';
import publicAPI from './services/api/publicAPI';


function Timer (){
  const [u, setU] = useState('Hello')
  useEffect(()=> {
    setTimeout(()=> {
        setU("Bye")
    },5000)
  },[])
  return <h1>Timer :{u}</h1>
}

function App() {
  const [b, setB] = useState(true);

  useEffect(()=> {
    setTimeout(()=> {
      setB(false)
    },2500)
  },[])
  const dispatch = useDispatch();

  const list = useSelector(PeopleSelectors.listSelectors)
  // console.log(list); // undefined ?

  const adres = useSelector(PeopleSelectors.addressSelector)

  // console.log(adres);

  const [status, setStatus] = useState(true);


  useEffect(() => {
    publicAPI.get('/users').then((res) => {
      dispatch(PeopleAction.getPeoples(res.data));
      // console.log(dispatch(PeopleAction.getPeoples(res.data)));
    }).catch((error) => {
      console.log('Erorr', error);
    })
  }, [dispatch]);

  const handleGetAdres = useCallback((id) => {
    return () => {
      publicAPI.get('/users', {
        params: {
          id: id
        }
      }).then((res) => {
        dispatch(PeopleAction.setPeopleAddress(res.data))
        setStatus(false);
      }).catch((error) => {
        console.log('Erorr', error);
      })
    }
  }, [dispatch]);

  const context = useMemo(() => {
    if (status) {
      return <div style={{ padding: '10px', margin: '20px' }}>
        {list && list.map((item) => {
          return (
            <div onClick={handleGetAdres(item.id)} style={{ width: '200px', border: '1px solid black', borderRadius: '10px', margin: '20px', cursor: 'pointer' }}>
              {item.name}
            </div>
          )
        })}
      </div>
    } else {
      return <div>
        {adres && adres.map((item) => {
          return (
            <h1>
              {item.address.street}
            </h1>
          )
        })}
      </div>
    }
  }, [status, adres, list]);


  return (
    <>
      <div>
        {context}
      </div>
      <div>
        {b && <Timer />}
      </div>
    </>

  );
}

export default App;
