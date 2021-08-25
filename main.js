// input
const dateofbirth= document.querySelector("#dob");
const lucky_no= document.querySelector("#lucky-no");
const button= document.querySelector(".btn");
const outputbox= document.querySelector("#output-container");

function calculatesum(date){
    let sum=0;
    date= date.replaceAll("-","");
    
    for(i=0;i<date.length;i++){

        sum=sum+Number(date.charAt(i));

    }
     console.log(sum);
     return sum;
}

function checkIsNumberLucky(lucky_no,sum)
{
    if (sum==lucky_no.value)
    {
        outputbox.innerText="Your Birthday is Lucky";
    }
    else
    {
        outputbox.innerText="Your Birthday is Not Lucky";
    }
}


button.addEventListener("click", function checkNuber(){
    // console.log(dateofbirth.value,lucky_no.value);
    const date = dateofbirth.value;
    
    const sum =calculatesum(date);

    if(date&&lucky_no.value)
    {
        checkIsNumberLucky(lucky_no,sum);
    }
    else
    {
        outputbox.innerText="Please Enter Both the Fields";

    }


    






})


