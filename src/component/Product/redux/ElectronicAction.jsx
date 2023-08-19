function ElectronicAction( ElectronicData ,dispatch){


    dispatch({

        type:'ELECTRONIC',
        payload:ElectronicData
    })


}

export default ElectronicAction