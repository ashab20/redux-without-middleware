import { createStore } from 'redux'

function Basic() {
  
  const reducer = (state={},action) => {
    if(action.type === 'A'){
      return {
        ...state,
        A:'i am A'}
    }else if (action.type === 'B'){
      return {
        ...state,
        B:'I am not A'};
    }
    return {...state};
  }
  const store  = createStore(reducer)

  store.subscribe(() => {
    console.log(store.getState().A);
  })
  
  store.subscribe(() => {
    console.log(store.getState().B);
  })


  store.dispatch({type:'B'});
  store.dispatch({type:'any'});
  store.dispatch({type:'A'});
  store.dispatch({type:'any'});
  store.dispatch({type:'B'});
  store.dispatch({type:'A'});

  console.log(' directy console: '+store.getState());
  return (
    <div>
    </div>
  );
}

export default Basic;
