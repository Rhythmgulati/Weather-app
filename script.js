const searchbtn = document.querySelector(".citybtn");
const cityvalue = document.querySelector(".cityvalue");
const icon = document.querySelector(".icon i");
const  temp = document.querySelector(".degree h2");
const wstatus = document.querySelector(".wstatus");
const date  = document.querySelector(".date");
const cityname = document.querySelector(".cityname");
const humidity = document.querySelector(".humidity span");
const air = document.querySelector(".windspeed span");
searchbtn.addEventListener("click",async ()=>{{
    try {
        var cityval = cityvalue.value;
        var key = ;
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=${key}`;
        var rawdata = await fetch(url);
        var data =  await rawdata.json();
        // timezone = data.timezone;
        // console.log(data);
        temp.textContent=data.main.temp+"°C";
        var whstatus = data.weather[0].main
        wstatus.innerText= whstatus;
        if(whstatus=="Clouds"){
            icon.classList="";
            icon.classList.add("ri-cloud-line");
        }else{
            icon.classList.add("ri-sun-fill")
        }
        cityname.innerText=data.name;
        humidity.textContent=data.main.humidity;
        air.textContent = data.wind.speed;
    } catch (error) {
        cityname.innerText="Enter valid city";
    }
}});



function dateandtime(){
    setInterval(()=>{
    let currentdate = new Date();
    date.innerText=currentdate.toLocaleString()},1000)
}
dateandtime();