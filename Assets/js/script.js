//step 1: generating time blocks for each business hour
// * using javascript means using less code, easier to update design changes as well.

//declare variable with an array of each business hour required in the calendar
var businesshours = ["04:00", "05:00", "06:00", "07:00", "08:00", "09:00","10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]; 
//for loop to generate a time block for each hour 
for (var i = 1; i < businesshours.length; i++){
//create a copy of the element with id #template, assign it to new variable
var newBusinesshourElement = $('#template').clone();
    //attribute the id of the businesshours array to the variable
    newBusinesshourElement.attr("id", businesshours[i]);
    //find the businessHour element and give it the text of the array
    //paramater i makes it go to the next item in the array each iteration
    newBusinesshourElement.find(".businessHour").text(businesshours[i]); 
    //append the new template element with its 
    //unique time stamp to the container element
    newBusinesshourElement.appendTo(".container"); 
};

