document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino') //getting the dino div by its class
    const grid = document.querySelector('.grid') //getting the grid div by its class
    let isJumping = false
    let gravity = 0.9



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

    let position = 0
        function jump(){
            let count = 0
            let timeId = setInterval(function () {

                 //move down
            if (count === 150) {
                clearInterval(timeId)
                console.log('down')
                let downIntervalId = setInterval(function() {
                    if(count === 0 ){
                        clearInterval(downIntervalId)
                        isJumping = false //after clearing the interval isJumping returns to false so we can hit jump again 
                    }
                    position -= 5
                    count--
                    position = position * gravity 
                    dino.style.bottom = position + 'px'
                },20)
                
            }
                //move up
                console.log('up')
                position+=30
                count++
                position = position * gravity 
                dino.style.bottom = position + 'px'
                console.log(dino.style.bottom)

            },20)
        }


        //generating the obstacles
        function Obstacles(){
            let obstaclePosition = 1000
            const obstacle = document.createElement('div')
            obstacle.classList.add('obstacle')
            //adding the obstacle div to our grid div with dom
            grid.appendChild(obstacle)
            obstacle.style.left = obstaclePosition + 'px'



            let obstacleTimeId = setInterval(function() {
                    if(obstaclePosition === 0){
                        clearInterval(obstacleTimeId)
                        alert('GAME OVER!')
                    }


                obstaclePosition -= 10
                obstacle.style.left = obstaclePosition + 'px'
            },20) 
        }//every 20ms
        Obstacles()

})