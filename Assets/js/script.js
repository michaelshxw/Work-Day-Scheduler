//step 1: generating time blocks for each business hour
// * using javascript means using less code, easier to update design changes as well.

//declare variable and give it an array of each business hour required in the calendar
var businessHours = ["04:00", "05:00", "06:00", "07:00", "08:00", "09:00","10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]; 
var businessHoursId = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 , 18, 19]
//for loop to generate a time block for each hour 
//(use 1 instead of 0 as the first timeblock is already there)
for (var i = 0; i < businessHours.length; i++){
//create a copy of the element with id #template, assign it to new variable
var newBusinessHourElement = $('#template').clone()
    //give each created element an id of the time 
    newBusinessHourElement.attr("id", businessHoursId[i])
    //find the businessHour element and give it the text of the array
    //paramater i makes it go to the next item in the array each iteration
    newBusinessHourElement.find(".businessHour").text(businessHours[i]); 
    //append the new template element with its unique time stamp to the container element
    newBusinessHourElement.appendTo(".container"); 
};

// step 2: current time and date

var now = moment().format('dddd Do of MMM YYYY LT');
document.querySelector('#currentDay').textContent = now;

// step #: populate saved events on load'

function populateSchedule(){
    $(".input-group").each(function(){
        var id  = $(this).attr('id');
        var schedule = localStorage.getItem(id)
        
        if(schedule !== null) {
            $(this).find(".form-control").val(schedule)
        }
    })
}

populateSchedule();

// step #: save user inputs to local storage when user clicks save 

var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".form-control").val();
    var formControl = document.querySelector("input")
    console.log(formControl); 
        localStorage.setItem(time, schedule);
        console.log("Time: " + time + ":00", "Event: " + schedule + " is saved :)");
});

// step #: clear all user inputs from local storage when user clicks clear

var deleteBtn = $(".deleteBtn");
deleteBtn.on("click", function() {
    confirmBox = confirm("Are you sure you would like to delete ALL events? If you would like to delete individual events, simply overwrite their data and click 'save'")
    console.log(confirmBox);
    if (confirmBox){
        localStorage.clear();
        alert("Thanks, reload the page and your events will disappear")
    } else {
        alert("Your events have NOT been deleted.")
    };
    
});

//past present future code

var time = moment();
function pastPresentFuture() {
    hour = time.hours();
    console.log("Current time: " + hour + ":00");
    $(".input-group").each(function () {
        var thisHour = parseInt($(this).attr("id"));
        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();
