export const initialState={product:[], cart:[]};


export const reducer=(prevState, action)=>{
    switch(action.type){
        case "PRODUCTS_LOADED":
            return {...prevState, product: [...action.payload]}
            default: 
            return prevState;
    }

}