var currentDate = moment().format('MMMM Do, YYYY');
var now = moment();
var schedule = {};


$("#currentDay").text(currentDate);


$('.saveBtn').on('click', function () {
    var text = $(this).siblings(".description").val()
    var time = $(this).parent().attr("data-time")
    schedule[time] = text;
    var schedString = JSON.stringify(schedule);
    localStorage.setItem('schedule', schedString)
});

var storageSchedule = localStorage.getItem('schedule');

if (storageSchedule) {
    schedule = JSON.parse(storageSchedule);
} else {
    for (let i = 0; i <= 17; i++){
    schedule[i] = ''
    console.log("Nothing is saved in local storage.")
}};
