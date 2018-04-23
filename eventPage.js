var menuItemOverbuffDirect = {
    "id": "OverbuffDirect",
    "title": "Overbuff",
    "contexts": ["selection"]
};

var menuItemOverbuffSearch = {
    "id": "OverbuffSearch",
    "title": "Overbuff Search",
    "contexts": ["selection"]
};

var menuItemBlizzDirect = {
    "id": "BlizzDirect",
    "title": "PlayOverwatch",
    "contexts": ["selection"]
};

var menuItemBlizzSearch = {
    "id": "BlizzSearch",
    "title": "PlayOverwatch Search",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItemOverbuffDirect);
chrome.contextMenus.create(menuItemOverbuffSearch);
chrome.contextMenus.create(menuItemBlizzDirect);
chrome.contextMenus.create(menuItemBlizzSearch);

chrome.contextMenus.onClicked.addListener(function(selection){   
    if(selection.selectionText)
    {
        var urlBase = "";
        var strUrl = "";
        switch(selection.menuItemId)
        {
            case "OverbuffSearch":
                urlBase = "https://www.overbuff.com/search?q=";
                strUrl = generateBattleTag(urlBase, selection.selectionText, "%23");
            break;
            case "OverbuffDirect":
                urlBase = "https://www.overbuff.com/players/pc/";
                strUrl = generateBattleTag(urlBase, selection.selectionText, "-");
            break;
            case "BlizzDirect":
                urlBase = "https://playoverwatch.com/en-us/career/pc/";
                strUrl = generateBattleTag(urlBase, selection.selectionText, "-");
            break;
            case "BlizzSearch":
                urlBase = "https://playoverwatch.com/en-us/search?q=";
                strUrl = generateBattleTag(urlBase, selection.selectionText, "-");
            break;
        }
        openInNewTab(strUrl);
    }
});

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function generateBattleTag(urlBase, battleTag, strReplace){
    var strUrl;
    strUrl = urlBase + battleTag.replace("#", strReplace);
    return strUrl;
}