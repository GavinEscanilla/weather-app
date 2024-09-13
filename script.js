const input = document.getElementById("input1");
const button = document.getElementById("search");
const info =  document.getElementById("info")
const key = '23862e68da6c3fc6f6001c4e91ae5026';
const temp = document.getElementById("temps");
 const  f = (input) =>{
    return Math.floor((input -273.15) *9/5 + 32);
 }
  
const fetchData = async (input) =>{
    const err ="no data";
    try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${input},us&appid=${key}`);
    const data = await res.json();
    const { weather, main,name} = data;
    temp.innerHTML = `The Temperature is ${f(main.temp)}f, but it feels like ${f(main.feels_like)}f`;
    console.log(data)
    }catch(err){
 console.log(err);
    }
}

console.log(1+1);
button.addEventListener('click',() =>{
    if( input.value.toString().length <  4 || input.value.toString().length >  9){
        alert('please put in 5-10 digit number');
    }else{
        fetchData(input.value);
    
    }
});


