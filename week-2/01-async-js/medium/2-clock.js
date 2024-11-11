// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the following formats - 
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)




//  By using setInterval
function tellTime1(){
//  Defined a tellTime function which will print the current time
    const currentDate = new Date();
    //  Created a new instance of Date object and named it CurrentDate 
    console.log(currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds());
    //  With the help of console.log and instace of Date Object(i.e. currentDate) printed the current time
}
setInterval(tellTime1,1000);
//  With the help of setInterval called tellTime function after interval of 1 sec (1000 milliseconds)




//  By using setTimeout
function tellTime2(){
//  Defined a tellTime2 function which will print the current time
    const currentDate = new Date();
    //  Created a new instance of Date object and named it currentDate
    console.log(currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds());
    //  With the help of console.log and instance of Date Object(i.e. currentDate) printed the current time
    setTimeout(tellTime2,1000);
    //  With the help of setTimeout inside the tellTime2 function we make it recursive and it is recursive for every 1 second
}
tellTime2();
// Called the tellTime2() function to start the recursive call. 




//  To tell the time in AM and PM format
function tellTime3(){
//  Defined a tellTime3 function which will print the current time
    const currentDate = new Date();
    //  Created a new instance of Date Object and named it currentTime
    let hours = currentDate.getHours();
    //  let hours equals to current Hour
    let minutes = currentDate.getMinutes();
    //  let minutes equals to current Minute
    let seconds = currentDate.getSeconds();
    //  let seconds equal to current Second
    let ampM = hours >= 12 ? 'PM' : 'AM';
    //  If the hours is greater then 12 then use PM else use AM
    hours=hours%12;
    //  It is to convert 24 hours format to 12 hours format
    hours = hours ? hours : 12 ;
    //  It is to over come the case of midnight which is 0 hours in 24 hours format . If 0 hours case comes it will convert it to 12
    console.log(hours+":"+minutes+":"+seconds+" "+ampM);
    //  With the help of console.log, hours, minutes, seconds, amPm printed the current time in 12 hours format
}
setInterval(tellTime3,1000);
//  Whith the help of setInterval function called tellTime3 after every 1 second