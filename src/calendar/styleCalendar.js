/*
    Used for styling each day, separated into 3 categories
*/

function isSelected(day, selectedDay){
    return (selectedDay.isSame(day, "day") && selectedDay.isSame(day, "month")  && selectedDay.isSame(day, "year"));
}
function isBeforeToday(day, selectedDay){
    return (day.isBefore(new Date(), "day") || (day.isBefore(selectedDay.clone().startOf("month"), "day")));
}
function isNextMonth(day, selectedDay){
    return day.isAfter(selectedDay.clone().endOf("month"), "day");
}
function isToday(day){
    return day.isSame(new Date(), "day");
}

export default function dayStyles(day, selectedDay, select){
    if(isBeforeToday(day, selectedDay)) return "before";
    if(isNextMonth(day, selectedDay)) return "after";
    if(select && isSelected(day)) return "selected";
    if(isToday(day)) return "today";
    return "";
}