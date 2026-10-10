// let div= document.querySelector("div") 
// console.dir(div);

// let heading=document.querySelector("h1")
// console.dir(heading);

// let h2=document.querySelector("h1")/

// console.dir(h2.innerText);
// h2.innerText= h2.innerText+ "from vardan saini"

// let divs=document.querySelectorAll(".box")

// let idx=1;
// for (div of divs) {
    // div.innerText= `new unique value ${idx}`;
    // idx++;
    // console.log(div.innerText);
    
// }


// divs[0].innerText="new value"
// divs[1].innerText="new box"
// divs[2].innerText="new container"

// console.dir(divs);

// let div=document.querySelector("div")
// console.log(div);

// let id=div.getAttribute("id")
// console.log(id);

// let idm=div.getAttribute("name")
// console.log(idm);

// let para=document.querySelector("p")
// console.log(para.setAttribute("class","new class"));

// let div=document.querySelector("div")
// console.log(div);
// div.style.backgroundcolor="green"

// let btn=document.createElement("button")
// btn.innerText="click me"
// console.log(btn);

// let div=document.querySelector("div")
// div.after(btn)

// let newheading=document.createElement("h1");
// newheading.innerHTML=" <i>hi, i am new!</i>";  

// document.querySelector("body").prepend(newheading)

// let para=document.querySelector("p")
// para.remove();

// let newbtn=document.createElement("button")
// newbtn.innerText="click me"

// newbtn.style.color="white"
// newbtn.style.backgroundColor="red"

// document.querySelector("body").prepend(newbtn)

// let para=document.querySelector("p")

// let btn1=document.querySelector("#btn1"); 

// btn1.onclick=(evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);


    
// }

// let div=document.querySelector("div")
// div.onmouseover=(evt ) => {
//      console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
    
// }

// let btn1=document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked");
    
// })

// btn1.addEventL istener("click", () => {
//     console.log("button1 was clicked- handler2");
    // 
// })

// let div=document.querySelector("div")

// let modebtn=document.querySelector("#mode")
// let body=document.querySelector("body")
// let currmode="light"  

// modebtn.addEventListener("click", () => {
//     // console.log("you are trying to change mode");
//     if(currmode==="light") {
//         currmode="dark"
//         body.classList.add("dark")
//         body.classList.remove("light")

//     }else{
//         currmode="light"
//         body.classList.add("light")
//         body.classList.remove("dark")

//     }
    
//     console.log(currmode);
    
// })



// Tic Tac Toe---------------=====>>>>>>>>>>>>>>>>>>>>>>>>


 let boxes=document.querySelectorAll(".box")
 let box=document.querySelectorAll(".box")
 let resetbtn=document.querySelector("#reset-btn")
 let newgamebtn=document.querySelector("#new-btn")
 let msgContainer=document.querySelector(".msg-container")
 let msg=document.querySelector("#msg")

 


 let turno= true;

 const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [0,1,2],

 ];

const resetgame= () => {
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}



 box.forEach((box) => {
box.addEventListener("click", () => {
    console.log("box was clicked");
    if(turno) {
        box.innerText="O"
        turno=false
    
    } else{
        box.innerText="X"
        turno=true
    }
    box.disabled=true;
    // /g/ box.innerText=""
    
    checkWinner();

})
 })

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes= () =>{
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}


 const showWinner= (winner) => {
    msg.innerHTML=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); 
 }

const checkWinner=() => {
    for(let pattern of winPatterns) {
        let pos1Val=box[pattern[0]].innerText;
        let pos2Val=box[pattern[1]].innerText;
        let pos3Val=box[pattern[2]].innerText;

        
        if(pos1Val !="" && pos2Val !="" && pos3Val !="") {
            if(pos1Val===pos2Val && pos2Val===pos3Val) {
                console.log("Winner",pos1Val,);  
                showWinner(pos1Val);
            }
        }
    } 
} 

newgamebtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)

