document.addEventListener("DOMContentLoaded", function () {


    const hamburgur = document.querySelector(".hamburgur");
    const left = document.querySelector(".left");
    const cross = document.querySelector(".cross")


    hamburgur.addEventListener("click", e => {
        if (left.classList.contains("max-md:hidden")) {

            left.classList.add("max-md:block")
            left.classList.remove("max-md:hidden")

            hamburgur.classList.remove("max-md:block")
            hamburgur.classList.remove("hidden")
            hamburgur.classList.add("max-md:hidden")

            cross.classList.remove("hidden")
            cross.classList.add("mx-md:block")

        }
        

    });
    cross.addEventListener("click",e=>{
        if(left.classList.contains("max-md:block")){
            console.log("works")
            left.classList.remove("max-md:block")
            left.classList.add("max-md:hidden")

            hamburgur.classList.add("max-md:block")
            hamburgur.classList.add("hidden")
            hamburgur.classList.remove("max-md:hidden")

            cross.classList.add("hidden")
            cross.classList.remove("mx-md:block")
            

        }
    })



})

