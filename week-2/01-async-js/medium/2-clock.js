function HHMMSSClock() {
    const date = new Date();
    const hr = String(date.getHours()).padStart(2,'0');
    const min = String(date.getMinutes()).padStart(2,'0');
    const sec = String(date.getSeconds()).padStart(2,'0');
    console.log(hr+":"+min+":"+sec);
}
setInterval(HHMMSSClock,1000);
HHMMSSClock();

function HHMMSSAMPMClock() {
    const date = new Date();
    let hr = date.getHours();
    let ampm = hr >= 12 ? 'pm' : 'am';
    hr = (hr % 12);
    hr = hr ? hr : 12;
 
    hr = String(hr).padStart(2,'0');
    
    const min = String(date.getMinutes()).padStart(2,'0');
    const sec = String(date.getSeconds()).padStart(2,'0');
    console.log(hr+":"+min+":"+sec+ " " + ampm);
}
setInterval(HHMMSSAMPMClock,1000);
HHMMSSAMPMClock();