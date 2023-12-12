let val=1


const buttons=document.querySelectorAll('.btn')
const result = document.querySelector('.result')
const newGame = document.querySelector('.button')



buttons.forEach((item)=>{
        
        item.addEventListener('click',()=>{
            console.log("check")
            newGame.style.display="block"

            if(val==1&& item.innerText==''){
                
                item.innerText="O"
                item.style.color="yellow"
                val=2
    
            }else if(val==2 && item.innerText==''){
                item.innerText='X'
                item.style.color="green"
                
               
                val=1
            }
            
            
            if((buttons[0].innerText!='') && (buttons[0].innerHTML==buttons[1].innerHTML && buttons[0].innerHTML==buttons[2].innerHTML)){
                checkWinner(0)
            }else if((buttons[0].innerText!='') && (buttons[0].innerText==buttons[3].innerHTML && buttons[0].innerHTML==buttons[6].innerHTML)){
                checkWinner(0)
            }else if((buttons[0].innerText!='') && (buttons[0].innerHTML==buttons[4].innerHTML && buttons[0].innerHTML==buttons[8].innerHTML)){
                checkWinner(0)
            }else if((buttons[3].innerText!='') &&(buttons[3].innerHTML==buttons[4].innerHTML&&buttons[3].innerHTML==buttons[5].innerHTML)){
                checkWinner(3)
            }else if((buttons[6].innerText!='') && (buttons[6].innerHTML==buttons[7].innerHTML && buttons[6].innerHTML==buttons[8].innerHTML)){
                checkWinner(6)
            }else if((buttons[1].innerText!='') && (buttons[1].innerHTML==buttons[4].innerHTML && buttons[1].innerHTML==buttons[7].innerHTML)){
               checkWinner(1)
            }else if((buttons[2].innerText!='') &&(buttons[2].innerHTML==buttons[5].innerHTML && buttons[2].innerHTML==buttons[8].innerHTML)){
                checkWinner(2)
            }else if ((buttons[2].innerText!='') &&(buttons[2].innerHTML==buttons[4].innerHTML && buttons[2].innerHTML==buttons[6].innerHTML)){
                checkWinner(2)
            }else if(buttons[0].innerText!=''&&buttons[1].innerText!=''&&buttons[2].innerText!=''&&buttons[3].innerText!=''&&buttons[4].innerText!=''&&buttons[5].innerText!=''&&buttons[6].innerText!=''&&buttons[7].innerText!=''&&buttons[8].innerText!=''){
                result.innerHTML="IT'S A DRAW"
            }
                
            
    })
   

})
newGame.addEventListener('click',()=>{
    buttons.forEach((item)=>{
        item.innerHTML=''
    })
    val=1
    result.innerHTML=''
    newGame.style.display="none"
})

const checkWinner=(index)=>{
    
    result.innerHTML=`game over ! ${buttons[index].innerHTML} wins!`
    buttons.forEach((ite)=>{
    val=9
    })
}










