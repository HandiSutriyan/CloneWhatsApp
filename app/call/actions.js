import axios from 'axios'


export function allCall(){
    // data simulation
    const call=[
      {id:1,nama:"tuti",time:"03.40 pm",tgl:"23 Mei"},
      {id:2,nama:"duti",time:"03.41 pm",tgl:"23 Mei"},
      {id:3,nama:"suti",time:"03.45 pm",tgl:"23 Mei"}
    ]

    return {
        type: 'ALL_CALL',
        payload: call
    }
}

export function allContact(){

    return {
        type: 'ALL_CONTACT',
        payload: axios.get('http://192.168.0.8:5000/contact')
    }
}

