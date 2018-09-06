import item from '../code-challenge.json'
const items =(state={
    list : item , 
} , action ) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {...state , 
                list : {...state.list , 
                "list" : [...state.list.list , state.list.list.length+1] ,   
                "details" : {...state.list.details , [state.list.list.length+1] : {
                    "product": action.product,
                    "qty": action.qty,
                    "price": action.price
                }}
                },
                
            }        
        default:
        return state
    }
}
export default items