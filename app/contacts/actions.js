import axios from 'axios'

export function allContacts(){
    // data simulation
    return {
        type: 'ALL_CONTACTS',
        payload: axios.get('http://192.168.0.5:3000/contacts')
    }
}