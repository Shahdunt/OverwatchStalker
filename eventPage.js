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

chrome.contextMenus.create(menuItemOverbuffDirect);
chrome.contextMenus.create(menuItemOverbuffSearch);

chrome.contextMenus.onClicked.addListener(function(selection){   
    if(selection.selectionText)
    {
        var urlBase = "";
        var strUrl = "";
        switch(selection.menuItemId)
        {
            case "OverbuffSearch":
            urlBase = "https://www.overbuff.com/search?q=";
            strUrl = urlBase + selection.selectionText.replace("#", "%23");
            break;

            case "OverbuffDirect":
            urlBase = "https://www.overbuff.com/players/pc/";
            strUrl = urlBase + selection.selectionText.replace("#", "-");
            break;
        }
        openInNewTab(strUrl);
    }
});

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}