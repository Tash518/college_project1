const btn_register_on_top= document.getElementById("GOTOREGISTER");
const btn_signin_on_top= document.getElementById("GOTOSIGNIN");

btn_register_on_top.addEventListener("click", ()=>{

    document.getElementById("sign-in-container").classList.add("onbottom");
    document.getElementById("sign-in-container").classList.remove("ontop");
    document.getElementById("sign-up-container").classList.add("ontop");
    document.getElementById("sign-up-container").classList.remove("onbottom");

});

btn_signin_on_top.addEventListener("click", ()=>{

    document.getElementById("sign-up-container").classList.add("onbottom");
    document.getElementById("sign-up-container").classList.remove("ontop");
    document.getElementById("sign-in-container").classList.add("ontop");
    document.getElementById("sign-in-container").classList.remove("onbottom");

});