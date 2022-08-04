let selectCountry=document.querySelector(".selectCountry")
let global=document.querySelector(".global")




fetch('https://covid-api.mmediagroup.fr/v1/cases').then(response=>response.json())
.then(data=>{ 

    let select=document.querySelector('select').value;



  
            

})




fetch('https://covid-api.mmediagroup.fr/v1/cases').then(response=>response.json())
.then(data=>{
var value = data;
let btn=document.querySelector('.btn');
let select='Global';
write();

selectCountry.addEventListener('change',()=>{
    select=document.querySelector('select').value;
    console.log(select);
    remove();
    write();
    btn.innerHTML='View More';
})



for(let i in data) {
    let options=document.createElement("option");
    selectCountry.appendChild(options);
    if(data[i].All.country=='null'|| data[i].All.country==undefined){
        options.remove();
    }else{
    options.innerHTML=data[i].All.country;
}}

function remove(){
   global.innerHTML='';
}


function write(){
        let p1=document.createElement("p");
        let p2=document.createElement("p");
        let p3=document.createElement("p");
        let p4=document.createElement("p");
        global.append(p1, p2, p3, p4)
        p1.innerHTML=`CONFIRMED :${value[select].All.confirmed}`
        p2.innerHTML=`DEATH :${value[select].All.deaths}`
        if(value[select].All.population=='null'||value[select].All.population==undefined){
            p3.innerHTML='';
        }else{
            p3.innerHTML=`POPULATION :${value[select].All.population}`;
        }
        
        p4.innerHTML=`RECOVERED :${value[select].All.recovered}`
}

btn.addEventListener('click', viewMore);

function viewMore(){
    let select=document.querySelector('select').value;

            if(btn.innerHTML=='View More'){
            
                btn.innerHTML='View Less';
                btn.style.backgroundColor='rgb(111, 196, 218)';

            let p5=document.createElement("p");
            p5.classList.add('added-p');
            let p6=document.createElement("p");
            p6.classList.add('added-p');
            let p7=document.createElement("p");
            p7.classList.add('added-p');
            global.append(p5, p6, p7);

            if(value[select].All.life_expectancy){
                p5.innerHTML=`Life expentancy :${value[select].All.life_expectancy}`;
            }
            if(value[select].All.population/value[select].All.confirmed){
            p6.innerHTML=`Infection Rate :${value[select].All.population/value[select].All.confirmed}`;
            }
            if(value[select].All.population/value[select].All.deaths){
            p7.innerHTML=`Death Rate :${value[select].All.population/value[select].All.deaths}`;
            }
            }else{
            document.querySelectorAll('.added-p').forEach(element => {
                element.style.display='none';    
             });
             btn.innerHTML='View More';
             btn.style.backgroundColor='white';
            }
}

 });

