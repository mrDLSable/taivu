//Displays the items in the items tab.
function showItems(){
    console.log("---Showing Items---");
    let itemText = "<ul>";

    for(item in itemData){
        itemText += getItemText(item);
    }

    itemText += "</ul>";
    $("#itemlist").html(itemText);
}

//Returns the item text for a given item.
function getItemText(itemID){
    console.log(itemID);
    let itemText = "<li>";

    itemText += "<b>" + i18next.t("items." + itemID + ".name") + "</b><br />";
    itemText += i18next.t("items." + itemID + ".desc");

    itemText += "</li>";
    return itemText;
}

//Adds a given amount to a given item.
function addItemToInventory(item, amount){
    if(items[item] == null){
        items[item] = {};
        items[item].amount = amount;
    }else{
        items[item].amount += amount;
    }
    displayInventory();
}

function displayInventory(){
    let invText = "";

    for(item in items){
        invText += "<li>" + items[item].amount + " " + i18next.t("items." + item + ".name") + "</li>";
    }

    $("#inventory").html(invText);
}