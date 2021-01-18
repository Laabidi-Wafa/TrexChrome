document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino') //the class dino
    let isJumping = false






    function control(e){
        if (e.keyCode === 32) { //the spacebar  https://keycode.info/
        {
            if (!isJumping) // isJumping is false
            { //if the dino while pressing the spacebar isn't jumping make it jump
                isJumping = true
                jump()
            }
            
        }
       
    }

    }
    document.addEventListener('keyup', control) //if the keyup event is triggered the control function will roll


        function jump(){
            let position = 0

           
            
            let timeId = setInterval(function () {

                 //move down
            if (position === 150) {
                clearInterval(timeId)
                console.log('down')
                let downIntervalId = setInterval(function() {
                    if(position === 0 ){
                        clearInterval(downIntervalId)
                        isJumping = false //after clearing the interval isJumping returns to false so we can hit jump again 
                    }
                    position-=30
                    dino.style.bottom = position + 'px'
                },20)
                
            }



//move up
                console.log('up')
                position+=30
                dino.style.bottom = position + 'px'

            },20)
        }


})