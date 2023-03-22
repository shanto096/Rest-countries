

const getCountry = () => {
     fetch("https://restcountries.com/v3.1/all")
     .then(res => res.json())
     .then(data => country(data))
}

const country = (data) =>{
//    console.log(data);
   const showCountry = document.getElementById("showcountry");
   const allCountry = data.map(singleCountry => singleCountryHtml(singleCountry));
   showCountry.innerHTML = allCountry.join(" ");
}

const singleCountryHtml = (singleCountry) =>{

    return `
        <div class="bg-teal-400 text-center p-8 rounded-lg">
           <h4 class="text-lg font-bold">Name: ${singleCountry.name.common}</h4> 
           <h4 class=" font-bold">population: ${singleCountry.population}</h4> 
           <img class="w-[10rem] mt-3" src="${singleCountry.flags.png}" alt="">
        </div>
    `
}
getCountry();