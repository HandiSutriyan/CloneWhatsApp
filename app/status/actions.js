export function allStatus(){
    // data simulation
    const status= [
     
      {id:1,nama:"tuti",time:"03.40 pm"},
      {id:2,nama:"duti",time:"03.41 pm"},
      {id:3,nama:"suti",time:"03.45 pm"}
  
    ]

    return {
        type: 'ALL_STATUS',
        payload: status
    }
}