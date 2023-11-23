
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
const demo=React.createElement("div", {id:'parent'},
[React.createElement("div",{id:'child'},
[
    React.createElement("h1",{},"i'm an h1 tag"),
    React.createElement("h2",{},"i'm an  h2 tag"),

]
),
React.createElement("div",{id:'child2'},
[
    React.createElement("h1",{id:"chikd2"},"i'm an h1 child2 tag"),
    React.createElement("h2",{},"i'm an  h2 child2 tag"),

]
),
]

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(demo);


