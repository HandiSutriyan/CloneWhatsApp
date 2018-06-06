export function allChats(){
    // data simulation
    const chats= [
      {id:1,nama:"tuti",msg:"halo apa kalian semua baik",time:"03.40 pm"},
      {id:2,nama:"duti",msg:"Halah..... Wacana!!",time:"03.41 pm"},
      {id:3,nama:"suti",msg:"Bukber kuy!!!",time:"03.45 pm"},
       {id:4,nama:"tuti",msg:"halo apa kalian semua baik",time:"03.40 pm"},
      {id:5,nama:"duti",msg:"Halah..... Wacana!!",time:"03.41 pm"},
      {id:6,nama:"suti",msg:"Bukber kuy!!!",time:"03.45 pm"},
      {id:7,nama:"tuti",msg:"halo apa kalian semua baik",time:"03.40 pm"},
      {id:8,nama:"duti",msg:"Halah..... Wacana!!",time:"03.41 pm"},
      {id:9,nama:"suti",msg:"Bukber kuy!!!",time:"03.45 pm"},
       {id:10,nama:"tuti",msg:"halo apa kalian semua baik",time:"03.40 pm"},
      {id:11,nama:"duti",msg:"Halah..... Wacana!!",time:"03.41 pm"},
      {id:12,nama:"suti",msg:"Bukber kuy!!!",time:"03.45 pm"}
    ]

    return {
        type: 'ALL_CHATS',
        payload: chats
    }
}
export function allDataChat(){
  const chatD=[
      {from:true,msg:'haloooo'},
      {from:false,msg:'hai,.. halo juga'},
      {from:true,msg:'haloooo'},
      {from:false,msg:'hai,.. halo juga'},
      {from:true,msg:'haloooo'},
      {from:false,msg:'hai,.. halo juga'},
      {from:false,msg:'hai,.. halo juga'},
      {from:true,msg:'haloooo'},
      {from:false,msg:'hai,.. halo juga'},
      {from:true,msg:'haloooo'},
      {from:false,msg:'hai,.. halo juga'},
      {from:false,msg:'hai,.. halo juga'},
      {from:true,msg:'haloooo'},
      {from:false,msg:'hai,.. halo juga'}
  ]

  return {
    type:'ALL_DATA_CHATS',
    payload: chatD
  }
}