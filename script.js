const canvas=document.getElementById("canvas")
const increase=document.getElementById("increase")
const decrease=document.getElementById("decrease")
const sizeEl=document.getElementById("size")
const colorEl=document.getElementById("color")
const clear=document.getElementById("clear")
const ctx=canvas.getContext("2d")
let size=20
let x= undefined
let y= undefined
isPressed=false
canvas.addEventListener("mouseup", (e)=>{
    isPressed=false
    let x= undefined
    let y= undefined
    
})
canvas.addEventListener("mousedown", (e)=>{
    isPressed=true
    x=e.offsetX
    y=e.offsetY
})

 canvas.addEventListener("mousemove",(e)=>{
     if (isPressed) {
    const x2=e.offsetX
    const y2=e.offsetY
    drawcircle(x,y)
    drawline(x,y, x2,y2) 
    x=x2
    y=y2
     }
 })

function drawcircle(x,y){
    ctx.beginPath()
    ctx.arc(x,y,size,0,Math.PI * 2)
    ctx.fillStyle=color
    ctx.fill()
} 
increase.addEventListener("click",()=>{
    size=size+5
    if (size>50) {
        size=50 
    }
    showSize()
})
clear.addEventListener("click",()=>{
    ctx.clearRect(0,0, canvas.width,canvas.height)
})
function drawline(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle=color
    ctx.lineWidth=size*2
    ctx.stroke()
}
decrease.addEventListener("click",()=>{
    size=size-5
    if (size<5) {
        size=5 
    }
    showSize()
})
colorEl.addEventListener("change",(e)=>{
    color=e.target.value
})
function showSize(){
    sizeEl.textContent=size
}
