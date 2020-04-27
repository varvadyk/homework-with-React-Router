import React from 'react';
import Home from './pages/Home';
import Posts   from './pages/Posts';
import Photos from './pages/Photos';
import Contacts from './pages/Contacts';


export const routes=[
  
 
 {
    path:'/contacts',
    component: <Contacts />

 },


{

   path:'/photos',
   component: <Photos />

},
{
   path:'/posts',
   component: <Posts />

},
 {
   path:'/',
   component: <Home />,
   exact: true 
},
 {
    path:'*',
    component: ()=>(<div>page not found</div>),
   
 }

];
