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
    window.location.reload();
}

var blogNumber = 0;

function readBlog(blogNumber)
{
    window.location.href = "/blogs/blog" + blogNumber + "/";
}