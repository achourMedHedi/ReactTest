
export const addItem = (product , qty , price) => {
    return ({
        type:'ADD_ITEM' , 
        product : product , 
        qty : qty , 
        price : price
    })
}



