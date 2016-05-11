module.exports = {

    getDate: function(date) {
        var unixDate = getUnix(date);
        console.log("unixDate = ", unixDate)
        if (unixDate !== null) {
            var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var month = monthArray[unixDate.getMonth()];
            var day = unixDate.getDate();
            var year = unixDate.getFullYear();
            return {
                "unix": Number(date),
                "natural": month + " " + day + ", " + year
            };
        }
        var humanDate = getHuman(date);
        console.log("humanDate = ", humanDate)
        if (humanDate != null) {
            return {
                "unix": Number(humanDate.getTime() / 1000),
                "natural": date
            };
        }
        return {
            "unix": null,
            "natural": null
        };
    }

};
 
function parseHumanDate(date) {

    var splittedDate = date.split(",");
    if (splittedDate.length!=2) return ["None",-1,-1];
    var monthAndDay = splittedDate[0].split(" ");
    var month = monthAndDay[0];
    var day = monthAndDay[1];
    var year = splittedDate[1].slice(1);
    return [month, day, year];
}

function checkHumanDate(date) {
    var parsedDate = parseHumanDate(date);
    console.log("parsedDate = ", parsedDate);
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var filteredMonth = month.filter(function(val) {
        return (parsedDate[0].toLowerCase() == val.toLowerCase());
    });
    console.log("filteredMonth = ", filteredMonth);
    if (filteredMonth.length == 0) return false;
    if (Number(parsedDate[1] < 1) || Number(parsedDate[1] > 31)) return false;
    if (!Number(parsedDate[2]) || parsedDate[2].length != 4) return false;
    return true;
}

function checkUnixDate(date) {
    if (date.length != 10) return false;
    if (Number(date)) return true;
    return false;
}


function getUnix(date) {
    if (checkUnixDate(date)) {
        var stDate = new Date(Number(date) * 1000);
        console.log("stDate = ", stDate)
        return stDate;
    }
    return null;
}


function getHuman(date) {
    if (checkHumanDate(date)) {
        return new Date(date);
    }
    return null;
}
