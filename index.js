//to display a nav when clicked
document.getElementById("open").onclick=()=>{
    document.getElementById("movies-section").style.height = "400px";    
    document.getElementById("close").style.display = "inline";
    document.getElementById("open").style.display = "none";
} 
//to close the nav
document.getElementById("close").onclick=()=>{
    document.getElementById("movies-section").style.height = "0";    
    document.getElementById("open").style.display = "inline";  
    document.getElementById("close").style.display = "none";
} 
//display only one triangle
const c_s = document.getElementById("movies-section");
if(c_s.style.height="400px"){
    document.getElementById("close").style.display = "none";
}
//to make sure the nav isn't displayed 
const c_op = document.getElementById("open");
if(c_op.style.display="inline"){
    document.getElementById("movies-section").style.height = "0"; 
} 
   

//to display the answer
document.getElementById("fopen1").onclick=()=>{
    document.getElementById("FAQ_ans1").style.height = "fit-content";
    document.getElementById("FAQ_ans1").style.padding = "20px";
    document.getElementById("fopen1").style.display = "none";
    document.getElementById("fclose1").style.display = "inline";
}
 
//to close the answer the answer
document.getElementById("fclose1").onclick=()=>{
    document.getElementById("FAQ_ans1").style.height = "0";
    document.getElementById("FAQ_ans1").style.padding = "0";
    document.getElementById("fclose1").style.display = "none";
    document.getElementById("fopen1").style.display = "inline";
}

//display only one symbol
const ans_section = document.getElementById("FAQ_ans1");
if(ans_section .style.height="0"){
    document.getElementById("fclose1").style.display = "none";
}

//to display the answer
document.getElementById("fopen2").onclick=()=>{
    document.getElementById("FAQ_ans2").style.height = "fit-content";
    document.getElementById("FAQ_ans2").style.padding = "20px";
    document.getElementById("fopen2").style.display = "none";
    document.getElementById("fclose2").style.display = "inline";
}
 
//to close the answer the answer
document.getElementById("fclose2").onclick=()=>{
    document.getElementById("FAQ_ans2").style.height = "0";
    document.getElementById("FAQ_ans2").style.padding = "0";
    document.getElementById("fclose2").style.display = "none";
    document.getElementById("fopen2").style.display = "inline";
}

//display only one symbol
const ans_section2 = document.getElementById("FAQ_ans2");
if(ans_section2 .style.height="0"){
    document.getElementById("fclose2").style.display = "none";
}

//to display the answer
document.getElementById("fopen3").onclick=()=>{
    document.getElementById("FAQ_ans3").style.height = "fit-content";
    document.getElementById("FAQ_ans3").style.padding = "20px";
    document.getElementById("fopen3").style.display = "none";
    document.getElementById("fclose3").style.display = "inline";
}
 
//to close the answer the answer
document.getElementById("fclose3").onclick=()=>{
    document.getElementById("FAQ_ans3").style.height = "0";
    document.getElementById("FAQ_ans3").style.padding = "0";
    document.getElementById("fclose3").style.display = "none";
    document.getElementById("fopen3").style.display = "inline";
}

//display only one symbol
const ans_section3 = document.getElementById("FAQ_ans3");
if(ans_section3 .style.height="0"){
    document.getElementById("fclose3").style.display = "none";
}


//to display the answer
document.getElementById("fopen4").onclick=()=>{
    document.getElementById("FAQ_ans4").style.height = "fit-content";
    document.getElementById("FAQ_ans4").style.padding = "20px";
    document.getElementById("fopen4").style.display = "none";
    document.getElementById("fclose4").style.display = "inline";
}
 
//to close the answer the answer
document.getElementById("fclose4").onclick=()=>{
    document.getElementById("FAQ_ans4").style.height = "0";
    document.getElementById("FAQ_ans4").style.padding = "0";
    document.getElementById("fclose4").style.display = "none";
    document.getElementById("fopen4").style.display = "inline";
}

//display only one symbol
const ans_section4 = document.getElementById("FAQ_ans4");
if(ans_section4 .style.height="0"){
    document.getElementById("fclose4").style.display = "none";
}

//to display the answer
document.getElementById("fopen5").onclick=()=>{
    document.getElementById("FAQ_ans5").style.height = "fit-content";
    document.getElementById("FAQ_ans5").style.padding = "20px";
    document.getElementById("fopen5").style.display = "none";
    document.getElementById("fclose5").style.display = "inline";
}
 
//to close the answer the answer
document.getElementById("fclose5").onclick=()=>{
    document.getElementById("FAQ_ans5").style.height = "0";
    document.getElementById("FAQ_ans5").style.padding = "0";
    document.getElementById("fclose5").style.display = "none";
    document.getElementById("fopen5").style.display = "inline";
}

//display only one symbol
const ans_section5 = document.getElementById("FAQ_ans5");
if(ans_section5 .style.height="0"){
    document.getElementById("fclose5").style.display = "none";
}

//to display the answer
document.getElementById("fopen6").onclick=()=>{
    document.getElementById("FAQ_ans6").style.height = "fit-content";
    document.getElementById("FAQ_ans6").style.padding = "20px";
    document.getElementById("fopen6").style.display = "none";
    document.getElementById("fclose6").style.display = "inline";
}
 
//to close the answer the answer
document.getElementById("fclose6").onclick=()=>{
    document.getElementById("FAQ_ans6").style.height = "0";
    document.getElementById("FAQ_ans6").style.padding = "0";
    document.getElementById("fclose6").style.display = "none";
    document.getElementById("fopen6").style.display = "inline";
}

//display only one symbol
const ans_section6 = document.getElementById("FAQ_ans6");
if(ans_section6 .style.height="0"){
    document.getElementById("fclose6").style.display = "none";
}


let index = 0;
 
function sideLeft(){
    const container = document.getElementById("img-trending1");
    const totalImages = container.children.length;

    //prevent going out of bounds
    if(index>0){
        index--;
        container.style.transform = `translateX(-${index*90}px)`; 
    } 
}

function sideRight(){
    const container = document.getElementById("img-trending1");
    const totalImages = container.children.length;

    //prevent going out of bounds
    if(index<totalImages-1){
        index++;
        container.style.transform = `translateX(-${index*95}px)`; 
    }
}
 


let index2 = 0;
 
function sideLeft2(){
    const container2 = document.getElementById("img-trending2");
    const totalImages2 = container2.children.length;

    //prevent going out of bounds
    if(index2>0){
        index2--;
        container2.style.transform = `translateX(-${index2*90}px)`; 
    } 
}

function sideRight2(){
    const container2 = document.getElementById("img-trending2");
    const totalImages2 = container2.children.length;

    //prevent going out of bounds
    if(index2<totalImages2-1){
        index2++;
        container2.style.transform = `translateX(-${index2*95}px)`; 
    }
}
yy
document.getElementById("menu-button").onclick=()=>{
    document.getElementById("side-nav").style.width = "100%";
}
document.getElementById("close-side-nav").onclick=()=>{
    document.getElementById("side-nav").style.width = "0";
}
