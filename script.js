const input1 = document.getElementById("input1");
const button = document.getElementById("search");
const info =  document.getElementById("info")
const key = '23862e68da6c3fc6f6001c4e91ae5026';
const temp = document.getElementById("temps");
const feeltemp = document.getElementById("feeltemp");
 const  f = (input) =>{
    return Math.floor((input -273.15) *9/5 + 32);
 }
  console.log(f(298.706))
const fetchData = async (input1) =>{
    const err ="no data";
    try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${input1},us&appid=${key}`);
    const data = await res.json();
    const { weather, main} = data;
    temp.innerHTML = `The Temperature is ${f(main.temp)}f`;
    console.log(weather[0]);
    console.log(data)
    }catch(err){
 console.log(err);
    }
}

console.log(1+1);
button.addEventListener('click',() =>{
    fetchData(input1.value)
});


