// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function counter(){
    setInterval(() => {
        const now = new Date();
        let ampm = 'AM';
        let hours = now.getHours();
        if(hours >= 12){
            ampm = 'PM';
        }
        hours = parseInt(hours-12).toString().padStart(2, '0');
        const minute = now.getMinutes().toString().padStart(2,'0');
        const second = now.getSeconds().toString().padStart(2,'0');
    
        const current = `${hours}:${minute}:${second} ${ampm}`
        console.log(current);
    },  1000);
}

counter();