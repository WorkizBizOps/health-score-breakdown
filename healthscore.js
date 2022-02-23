
    function searchToObject() {
        var pairs = window.location.search.substring(1).split("&"),
            obj = {},
            pair,
            i;
    
        for (i in pairs) {
            if (pairs[i] === "") continue;
    
            pair = pairs[i].split("=");
            obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
    
        return obj;
    }
    
    const params = searchToObject()
    
    for (const key in params) {
       if (key !== "accountId") {document.getElementById(key).innerHTML = params[key]}
    }
    
    function ch() {
        switch (params.company_health) { 
    
            case "High":
                return "green"
                break;
    
            case "Medium":
                return "orange"
                break;
    
            case "Low":
                return "red"
                break;
    
        }
    }
    document.getElementById("customerAnalysisButton").setAttribute("onclick", "window.open('https://insights.workiz.com/app/main#/dashboards/5e95588485e0510ce4590ede?search=' + params.accountId,'_blank')");
    document.getElementById("company_health").style.color = ch();
