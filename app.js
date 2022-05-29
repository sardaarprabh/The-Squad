let data=[
  {
    name:'Prabh',
    age:'22'
  },
  {
    name:'Abhi',
    age:'20'
  },
  {
    name:'Sahil',
    age:'21'
  },
  {
    name:'Anshi',
    age:'19'
  },
  {
    name:'Neeraj',
    age:'30'
  },
  {
    name:'Noor',
    age:'18'
  },
  
] 

const info=document.querySelector('#info');

let details=data.map((item)=>{
  return `<div>${item.name} is ${item.age} years old </div>`;
})

info.innerHTML=details.join('\n');

 