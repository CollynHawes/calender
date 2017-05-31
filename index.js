// the following code was used to generate an A day B day schedule for my school.
var calendars = document.getElementsByClassName("calendar");
var monthel = document.getElementById("month");
var yearel = document.getElementById("year");
var gregrion = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var gregrionL = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//startdays lists what day of the week the first day of each month starts on, the code I used to generate the code is commented later down.
var startdays = [
  [1, 4, 4, 7, 2, 5, 7, 3, 6, 1, 4, 6],
  [2, 5, 5, 1, 3, 6, 1, 4, 7, 2, 5, 7],
  [3, 6, 6, 2, 4, 7, 2, 5, 1, 3, 6, 1],
  [4, 7, 1, 4, 6, 2, 4, 7, 3, 5, 1, 3],
  [6, 2, 2, 5, 7, 3, 5, 1, 4, 6, 2, 4],
  [7, 3, 3, 6, 1, 4, 6, 2, 5, 7, 3, 5],
  [1, 4, 4, 7, 2, 5, 7, 3, 6, 1, 4, 6],
  [2, 5, 6, 2, 4, 7, 2, 5, 1, 3, 6, 1],
  [4, 7, 7, 3, 5, 1, 3, 6, 2, 4, 7, 2],
  [5, 1, 1, 4, 6, 2, 4, 7, 3, 5, 1, 3],
  [6, 2, 2, 5, 7, 3, 5, 1, 4, 6, 2, 4],
  [7, 3, 4, 7, 2, 5, 7, 3, 6, 1, 4, 6],
  [2, 5, 5, 1, 3, 6, 1, 4, 7, 2, 5, 7],
  [3, 6, 6, 2, 4, 7, 2, 5, 1, 3, 6, 1],
  [4, 7, 7, 3, 5, 1, 3, 6, 2, 4, 7, 2],
  [5, 1, 2, 5, 7, 3, 5, 1, 4, 6, 2, 4],
  [7, 3, 3, 6, 1, 4, 6, 2, 5, 7, 3, 5],
  [1, 4, 4, 7, 2, 5, 7, 3, 6, 1, 4, 6],
  [2, 5, 5, 1, 3, 6, 1, 4, 7, 2, 5, 7],
  [3, 6, 7, 3, 5, 1, 3, 6, 2, 4, 7, 2]
];
var math = "";
//for changing the day thats clicked
function changeday(el) {
  if (el.classList.contains("Bday")) {
    el.classList.remove("Bday");
  } else if (el.classList.contains("Aday")) {
    el.classList.remove("Aday");
    el.classList.add("Bday");
  } else {
    el.classList.add("Aday");
  }
}
//2017 starts on a sunday.
function calendarinfo() {
  var month = monthel.options[monthel.selectedIndex].value;
  var year = parseInt(yearel.options[yearel.selectedIndex].value);
  //Convert month into a integer for math.
  var monthN = "";
  switch (month) {
    case "January":
      monthN = 0;
      break;
    case "February":
      monthN = 1;
      break;
    case "March":
      monthN = 2;
      break;
    case "April":
      monthN = 3;
      break;
    case "May":
      monthN = 4;
      break;
    case "June":
      monthN = 5;
      break;
    case "July":
      monthN = 6;
      break;
    case "August":
      monthN = 7;
      break;
    case "September":
      monthN = 8;
      break;
    case "October":
      monthN = 9;
      break;
    case "November":
      monthN = 10;
      break;
    case "December":
      monthN = 11;
      break;
  }
  // Finding out what the first day of the week the months first day is. How many days are in this month and how many days were in last month
  math = year - 2017;
 // I could of used code here to figure out what firday should be. I decided to make an array of the first days of each month elsewear so that my code would run faster. the code I used is below
  /*
  var years = [];
var gregrion = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var gregrionL = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var Startday = 0;
for (var cy = 0; cy < 20; cy++) {
  years[cy] = new Array();
  if ((cy + 17) % 4 === 0) {
    for (var cm = 0; cm < 12; cm++) {
      years[cy][cm] = (Startday % 7) + 1;
      Startday = (gregrionL[cm] % 7) + Startday  % 7;
    }
  } else {
    for (var cm = 0; cm < 12; cm++) {
      years[cy][cm] = (Startday % 7) + 1;
      Startday = (gregrion[cm] % 7) + Startday  % 7;
    }
  }
}
var yearsj = JSON.stringify(years);
console.log(yearsj);
console.log(years[3][4]);
*/
  var firstday = startdays[math][monthN];
  var daysin = 0;
  var dayslast = 0;
  // find out if its a leap year.
  if (year % 4 === 0) {
    daysin = gregrionL[monthN];
    math = monthN - 1;
    dayslast = gregrionL[math];
  } else {
    daysin = gregrion[monthN];
    math = monthN - 1;
    dayslast = gregrion[math];
  }
  //putting all this information into an array which is sent to makecalendar().
  var EnteredData = [firstday, daysin, month, dayslast, year];
  //I could have entered 4 items into the the function instead of an array, but I wanted to demonstrate my understanding of arrays.
  makecalendar(EnteredData);
}
//making the calendar itself
function makecalendar(Monthdata) {
  var ThisMonthsContent =
    "<div class='month'><ul><li>" +
    Monthdata[2] +
    "<br><span style='font-size:18px'>" +
    Monthdata[4] +
    "<span class='legend'><div class='Aday daykey'></div>A day<div class='Bday daykey'></div>B day</span></span></li></ul></div></b></div> <ul class='weekdays'><li>sun</li><li>mon</li><li>tue</li><li>wed</li><li>thu</li><li>fri</li><li>sat</li></ul><ul class='days'>";
  for (var firstweek = 0; firstweek < 7; firstweek++) {
    switch (firstweek) {
      case 0: //1
        if (Monthdata[0] === 1) {
          ThisMonthsContent += "<li onclick='changeday(this)'>1</li>";
        } else if (Monthdata[0] === 2) {
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            Monthdata[3] +
            "</li>";
        } else {
          math = Monthdata[3] - Monthdata[0] + 2;
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            math +
            "</li>";
        }
        break;
      case 1: //2
        if (Monthdata[0] === 1) {
          ThisMonthsContent += "<li onclick='changeday(this)'>2</li>";
        } else if (Monthdata[0] === 2) {
          ThisMonthsContent += "<li onclick='changeday(this)'>1</li>";
        } else if (Monthdata[0] === 3) {
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            Monthdata[3] +
            "</li>";
        } else if (Monthdata[0] === 4) {
          math = Monthdata[3] - 1;
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            math +
            "</li>";
        } else if (Monthdata[0] === 5) {
          math = Monthdata[3] - 2;
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            math +
            "</li>";
        } else if (Monthdata[0] === 6) {
          math = Monthdata[3] - 3;
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            math +
            "</li>";
        } else if (Monthdata[0] === 7) {
          math = Monthdata[3] - 4;
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            math +
            "</li>";
        } else {
          alert("Missing day of week");
        }
        break;
      case 2: //3
        if (Monthdata[0] === 1) {
          ThisMonthsContent += "<li onclick='changeday(this)'>3</li>";
        } else if (Monthdata[0] === 2) {
          ThisMonthsContent += "<li onclick='changeday(this)'>2</li>";
        } else if (Monthdata[0] === 3) {
          ThisMonthsContent += "<li onclick='changeday(this)'>1</li>";
        } else if (Monthdata[0] === 4) {
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            Monthdata[3] +
            "</li>";
        } else if (Monthdata[0] === 5) {
          math = Monthdata[3] - 1;
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            math +
            "</li>";
        } else if (Monthdata[0] === 6) {
          math = Monthdata[3] - 2;
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            math +
            "</li>";
        } else if (Monthdata[0] === 7) {
          math = Monthdata[3] - 3;
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            math +
            "</li>";
        }
        break;
      case 3: //4
        if (Monthdata[0] === 1) {
          ThisMonthsContent += "<li onclick='changeday(this)'>4</li>";
        } else if (Monthdata[0] === 2) {
          ThisMonthsContent += "<li onclick='changeday(this)'>3</li>";
        } else if (Monthdata[0] === 3) {
          ThisMonthsContent += "<li onclick='changeday(this)'>2</li>";
        } else if (Monthdata[0] === 4) {
          ThisMonthsContent += "<li onclick='changeday(this)'>1</li>";
        } else if (Monthdata[0] === 5) {
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            Monthdata[3] +
            "</li>";
        } else if (Monthdata[0] === 6) {
          math = Monthdata[3] - 1;
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            math +
            "</li>";
        } else if (Monthdata[0] === 7) {
          math = Monthdata[3] - 2;
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            math +
            "</li>";
        }
        break;
      case 4: //5
        if (Monthdata[0] === 1) {
          ThisMonthsContent += "<li onclick='changeday(this)'>5</li>";
        } else if (Monthdata[0] === 2) {
          ThisMonthsContent += "<li onclick='changeday(this)'>4</li>";
        } else if (Monthdata[0] === 3) {
          ThisMonthsContent += "<li onclick='changeday(this)'>3</li>";
        } else if (Monthdata[0] === 4) {
          ThisMonthsContent += "<li onclick='changeday(this)'>2</li>";
        } else if (Monthdata[0] === 5) {
          ThisMonthsContent += "<li onclick='changeday(this)'>1</li>";
        } else if (Monthdata[0] === 6) {
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            Monthdata[3] +
            "</li>";
        } else if (Monthdata[0] === 7) {
          math = Monthdata[3] - 1;
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            math +
            "</li>";
        }
        break;
      case 5: //6
        if (Monthdata[0] === 1) {
          ThisMonthsContent += "<li onclick='changeday(this)'>6</li>";
        } else if (Monthdata[0] === 2) {
          ThisMonthsContent += "<li onclick='changeday(this)'>5</li>";
        } else if (Monthdata[0] === 3) {
          ThisMonthsContent += "<li onclick='changeday(this)'>4</li>";
        } else if (Monthdata[0] === 4) {
          ThisMonthsContent += "<li onclick='changeday(this)'>3</li>";
        } else if (Monthdata[0] === 5) {
          ThisMonthsContent += "<li onclick='changeday(this)'>2</li>";
        } else if (Monthdata[0] === 6) {
          ThisMonthsContent += "<li onclick='changeday(this)'>1</li>";
        } else if (Monthdata[0] === 7) {
          ThisMonthsContent +=
            "<li onclick='changeday(this)' class='anothermonth'>" +
            Monthdata[3] +
            "</li>";
        }
        break;
      case 6: //7
        if (Monthdata[0] === 1) {
          ThisMonthsContent += "<li onclick='changeday(this)'>7</li>";
        } else if (Monthdata[0] === 2) {
          ThisMonthsContent += "<li onclick='changeday(this)'>6</li>";
        } else if (Monthdata[0] === 3) {
          ThisMonthsContent += "<li onclick='changeday(this)'>5</li>";
        } else if (Monthdata[0] === 4) {
          ThisMonthsContent += "<li onclick='changeday(this)'>4</li>";
        } else if (Monthdata[0] === 5) {
          ThisMonthsContent += "<li onclick='changeday(this)'>3</li>";
        } else if (Monthdata[0] === 6) {
          ThisMonthsContent += "<li onclick='changeday(this)'>2</li>";
        } else if (Monthdata[0] === 7) {
          ThisMonthsContent += "<li onclick='changeday(this)'>1</li>";
        }
        break;
    }
  }
  var dayafter = 1;
  for (var days = 7; days < 42; days++) {
    math = days - Monthdata[0] + 1; //if Monthdata[0]===2 then math should === 7
    if (math < Monthdata[1]) {
      math = days + 2 - Monthdata[0]; //if Monthdata[0]===2 then math should === 7
      ThisMonthsContent += "<li onclick='changeday(this)'>" + math + "</li>";
    } else {
      ThisMonthsContent +=
        "<li onclick='changeday(this)' class='anothermonth'>" +
        dayafter +
        "</li>";
      dayafter++;
    }
  }
  ThisMonthsContent += "</ul>";
  for (var C = 0; C < calendars.length; C++) {
    calendars[C].innerHTML = ThisMonthsContent;
  }
}
//The Json was used with an external application I can't showcase (I didn't make the application anyways).
function collectJson() {
  var calendarSTR = calendars[0].innerHTML;
  //removing the onclick from the divs
  var calendarfirst =      calendarSTR.replace(/[()]|onclick=|this|changeday/g, "");
  var calendarfinal = calendarfirst.replace(/""/g, "");
  document.getElementById("jsonplace").value = "<div class='calendar'>" + calendarfinal + "</div>";
}
