(function (){
    var newWeek = document.createElement('div');
    var weekNum = 1;
    var str1 = "week-"
    var str2 = weekNum.toString();
    var className = str1.concat(str2);
    console.log('className', className);
    newWeek.appendChild(className);
})();


/*
    var newDay = document.createElement('div');
    var dayNum = document.innerHTML(1);
    newDay.appendChild(dayNum);
    document.getElementsByClassName('week-1').appendChild(newDay);
*/