document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino') //the class dino

    function control(e){
        if (e.keyCode === 32) { //the spacebar  https://keycode.info/
        {
            jump()
        }
       
    }

    }
    document.addEventListener('keyup', control) //if the keyup event is triggered the control function will roll


        function jump(){
            let position = 0
            


            //move up
            let timeId = setInterval(function () {
                console.log('up')
                position+=30
                dino.style.bottom = position + 'px'

            },20)
        }


})