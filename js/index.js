var menuList = ["cake", "pastry", "bread", "dessert"]
var selectedMenu = null

function chooseMenu(menuType){
    if(selectedMenu == menuType){
        selectedMenu = null
    } else {
        selectedMenu = menuType
    }
    hideMenus()
}

function hideMenus(){
    var menuType, menu
    for (var i = 0; i < menuList.length; i++){
        menuType = menuList[i];
        menu = document.getElementById(menuType)
        if (selectedMenu === menuType){
            menu.style.display = "block"
        } else{
            menu.style.display = "none"
        }
    }
}