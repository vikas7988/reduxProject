const dummydata = {
  electronic: [],
  jewelery: [],
};

function productReducer(state = dummydata, action) {

  switch (action.type){

    case "ELECTRONIC":

      state = { ...state,
         electronic: action.payload
         };
          break;

     case "JEWELERY":

      state = {
        ...state,
        jewelery: action.payload,
      };
      break;
  }
  return state;
}

export default productReducer;
