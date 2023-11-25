
import { React } from 'react';
import { ReactDOM } from 'react-dom/client';
// let heading=document.createElement('p');
// heading.innerHTML='karna is best frind'
// const iddata=document.getElementById('root');
// iddata.appendChild(heading)
// const demo = React.createElement("h1", {}, "Hello world");

// const demo = React.createElement("div", {id:'parent'}, React.createElement("div",{id:'child'},[
//     React.createElement("h1",{},"i'm an h1 tag"),
//     React.createElement("h1",{},"i'm an h1 tag")
// ]));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const demo=React.createElement("div", {id:'parent'},
// [React.createElement("div",{id:'child'},
// [
//     React.createElement("h1",{},"i'm an h1 tag"),
//     React.createElement("h2",{},"i'm an  h2 tag"),

// ]
// ),
// React.createElement("div",{id:'child2'},
// [
//     React.createElement("h1",{id:"chikd2"},"i'm an h1 child2 tag"),
//     React.createElement("h2",{},"i'm an  h2 child2 tag"),

// ]
// ),
// ]

// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(demo);


// ## Namaste React Course by Akshay Saini
// # Chapter 02 - Igniting our App

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */


// imported react and reactdom from nodemodule folder
import React from 'react';
import ReactDOM from 'react-dom/client';
// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//     },
//     "heading"
//   );
//   const heading1 = React.createElement(
//     "h1",
//     {
//       id: "title",
//     },
//     "heading1"
//   );
  
//   const container = React.createElement(
//     "div",
//     {
//       id: "container",
//     },
//     [heading, heading1]
    
//   );
  




const demo=React.createElement("div", {id:'parent'},
[
React.createElement("div",{id:'child'},[React.createElement("h1",{},"i'm an h1 tag"),React.createElement("h2",{},"i'm an  h2 tag"),]),
React.createElement("div",{id:'child2'},
[React.createElement("h1",{id:"chikd2"},"i'm an h1 child2 tag"),React.createElement("h2",{},"i'm an  h2 child2 tag"),]
),
React.createElement("div",{id:"child3"},[React.createElement("h2",{id:'child3'},"i'm an h3 child3 tag"),

])
]
)









  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(demo);