function convertTemp(){

let temp =
document.getElementById("temp").value;

let unit =
document.getElementById("unit").value;

let result =
document.getElementById("result");

if(temp==="" || isNaN(temp)){

result.innerHTML=

"<p class='error'>Please enter a valid number.</p>";

return;

}

temp=parseFloat(temp);

let c,f,k;


/* Celsius */

if(unit==="c"){

if(temp<-273.15){

result.innerHTML=

"<p class='error'>Below Absolute Zero!</p>";

return;

}

c=temp;

f=(temp*9/5)+32;

k=temp+273.15;

}


/* Fahrenheit */

else if(unit==="f"){

if(temp<-459.67){

result.innerHTML=

"<p class='error'>Below Absolute Zero!</p>";

return;

}

f=temp;

c=(temp-32)*5/9;

k=c+273.15;

}


/* Kelvin */

else{

if(temp<0){

result.innerHTML=

"<p class='error'>Below Absolute Zero!</p>";

return;

}

k=temp;

c=temp-273.15;

f=(c*9/5)+32;

}



/* Background Theme */

let theme="";

let status="";


if(c<10){

theme="cold";

status="❄ Cold";

}

else if(c<25){

theme="pleasant";

status="🌤 Pleasant";

}

else if(c<35){

theme="warm";

status="☀ Warm";

}

else{

theme="hot";

status="🔥 Hot";

}


document.body.classList.remove(

'cold',
'pleasant',
'warm',
'hot'

);

document.body.classList.add(theme);



result.innerHTML=`

<div class="card">

<h3>Celsius</h3>

<h2>${c.toFixed(2)}°C</h2>

<p>${status}</p>

</div>


<div class="card">

<h3>Fahrenheit</h3>

<h2>${f.toFixed(2)}°F</h2>

<p>${status}</p>

</div>


<div class="card">

<h3>Kelvin</h3>

<h2>${k.toFixed(2)} K</h2>

<p>${status}</p>

</div>

`;

}