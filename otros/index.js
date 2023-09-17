var menuList = document.getElementById("menu-list");

menuList.style.maxHeight = "0px";

function toggleMenu()
{
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "130px";
    }
    else
    {
        menuList.style.maxHeight = "0px";
    }
}

function tochoIncBarIconAction()
{
    window.location.href = "../";
}

function playCalculadoraTocha()
{
    window.location.href = "/otros/calculadoraTocha/";
}