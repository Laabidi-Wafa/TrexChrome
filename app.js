document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino') //the class dino

    function control(e){
        if (e.keyCode === 32) { //the spacebar  https://keycode.info/
        {
            console.log('pressed') //verification
        }
       
    }
    }
    document.addEventListener('keyup', control) //if the keyup event is triggered the control function will roll




})