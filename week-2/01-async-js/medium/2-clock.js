const pad = (num) => num.toString().padStart(2, "0");

const clock = () => {
    setInterval(() => {
        const date = new Date();        
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        // display in HH:MM::SS format
        const format1 = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

        // display in HH:MM:SS AM/PM format
        const isAM = hours < 12;
        const _hoursAM = isAM ? hours : hours - 12;
        const hoursAM = _hoursAM === 0 ? 12 : _hoursAM;

        const format2 = `${pad(hoursAM)}:${pad(minutes)}:${pad(seconds)} ${isAM ? "AM" : "PM"}`;

        // log both
        console.log(`${format1} === ${format2}`);
    }, 1000);
};

clock();
