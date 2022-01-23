/*
import data
send data to render function
RenderFunction(template, data)====> component markeup with data

1. Creating a template
2. Setup a page init function async fetch the RTD data
3. Loading the data   read update delete share same data...

*/

import {ref, get} from 'firebase/database';

import {db} from './libs/firebase/firebaseConfig';

import { renderUser } from './templates/user';

let store = [];
async function pageInit() {
    const userRef = ref(db, 'users/');
    const userSnapShot = await get(userRef);
    const userData = { ...userSnapShot.val() };
   const users = Object.keys(userData).map(user=>{
        console.log(userData[user])
    })
        
    /**
     * Object 
     * obj.prep
     * obj[`prop`]
     */
}

pageInit();