var currentTime = moment().hours(),
    task = "",
    powerHour = "";

console.log(currentTime);

//sets text for current date for the calendar
$("#currentDay").text(moment().format("dddd, MMMM Do"));

$(document).ready(function() {
    renderText();
    timeChange();

    //creating a function to change colors of each time block, dynamic javascript feature of calendar
    function timeChange (){
        
        console.log(this);

        $(".hrBlock").each(function () {
        var testTime = parseInt($(this).attr("id"));
        console.log(this);
        console.log(testTime);
        
        //changes when currentTime is passed hrBlock adding past class, removing other classes that may have been applied previously
        if (currentTime > testTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");            
        } 
        //changes class of hrblcok to Future for hours that have yet to come
        else if (currentTime < testTime) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
            
        } 
        //adds present class to hr block and removes other classes
        else {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        });

    }

    //creating event listener to save text within related hrblock to local storage
    $(".saveBtn").click(function() {
        console.log(this);

        task = $(this).siblings(".hrBlock").val();
        powerHour = $(this).siblings(".hour").text();
        localStorage.setItem(powerHour, JSON.stringify(task));

        console.log(task);
        console.log(powerHour);

        renderText();
        timeChange();

    });

    //function to save translated text to local storage
    function renderText () {
        var saveTask = JSON.parse(localStorage.getItem("9am"));
        $("#9").val("");
        $("#9").val(saveTask);
        var saveTask2 = JSON.parse(localStorage.getItem("10am"));
        $("#10").val("");
        $("#10").val(saveTask2);
        var saveTask3 = JSON.parse(localStorage.getItem("11am"));
        $("#11").val("");
        $("#11").val(saveTask3);
        var saveTask4 = JSON.parse(localStorage.getItem("12pm"));
        $("#12").val("");
        $("#12").val(saveTask4);
        var saveTask5 = JSON.parse(localStorage.getItem("1pm"));
        $("#13").val("");
        $("#13").val(saveTask5);
        var saveTask6 = JSON.parse(localStorage.getItem("2pm"));
        $("#14").val("");
        $("#14").val(saveTask6);
        var saveTask7 = JSON.parse(localStorage.getItem("3pmm"));
        $("#15").val("");
        $("#15").val(saveTask7);
        var saveTask8 = JSON.parse(localStorage.getItem("4pm"));
        $("#16").val("");
        $("#16").val(saveTask8);
        var saveTask9 = JSON.parse(localStorage.getItem("5pm"));
        $("#17").val("");
        $("#17").val(saveTask9);
        }
})