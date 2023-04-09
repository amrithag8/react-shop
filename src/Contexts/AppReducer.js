export const initialState={product:[], cart:[]};


export const reducer=(prevState, action)=>{
    switch(action.type){
        case "PRODUCTS_LOADED":
            return {...prevState, product: [...action.payload]};
            case "ADD_TO_CART":  
            return {...prevState, cart: [...prevState.cart, action.payload]} ;
            case "ADD-COUNT":
            let addCount=prevState.cart.map((item)=>{
                if(item.id===action.payload){
                    return {...item, count:item.count+1};
                }
                return item;
            })  
            return {...prevState, cart:[...addCount]};  
            case "REDUCE_COUNT":
                let reduceCount=prevState.cart.map((item)=>{
                    if(item.id===action.payload){
                        return {...item, count: item.count-1};
                    }
                    return item;
                })
                return {...prevState, cart:[...reduceCount]};
             case "REMOVE_ITEM":
                let removeItem=prevState.cart.filter((item)=>{
                    return item.id!==action.payload;
                }) 
                return {...prevState, cart:[...removeItem]};
              case "CLEAR_CART":
                return {...prevState, cart:[]};    
            default: 
            return prevState;

     

    }

}