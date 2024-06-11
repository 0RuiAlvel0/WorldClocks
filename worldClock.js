
    setInterval(() => {
    d = new Date(); //object of date()
	
	min = d.getMinutes();
    sec = d.getSeconds();
	
	
	//HK +8
    hr = d.getUTCHours() + 8;
	
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
	
    hour1.style.transform = `rotate(${hr_rotation}deg)`;
    minute1.style.transform = `rotate(${min_rotation}deg)`;
    second1.style.transform = `rotate(${sec_rotation}deg)`;

	//TOKYO +9
    hr = d.getUTCHours() + 9;
	
    hr_rotation = 30 * hr + min / 2; //converting current time
	
    hour2.style.transform = `rotate(${hr_rotation}deg)`;
    minute2.style.transform = `rotate(${min_rotation}deg)`;
    second2.style.transform = `rotate(${sec_rotation}deg)`;
	
	//DUBAI +4
    hr = d.getUTCHours() + 4;
	
    hr_rotation = 30 * hr + min / 2; //converting current time
	
    hour3.style.transform = `rotate(${hr_rotation}deg)`;
    minute3.style.transform = `rotate(${min_rotation}deg)`;
    second3.style.transform = `rotate(${sec_rotation}deg)`;
	
	//NYC -4
    hr = d.getUTCHours() - 4;
	
    hr_rotation = 30 * hr + min / 2; //converting current time
	
    hour4.style.transform = `rotate(${hr_rotation}deg)`;
    minute4.style.transform = `rotate(${min_rotation}deg)`;
    second4.style.transform = `rotate(${sec_rotation}deg)`;
	
	//London +1
    hr = d.getUTCHours() +1;
	
    hr_rotation = 30 * hr + min / 2; //converting current time
	
    hour5.style.transform = `rotate(${hr_rotation}deg)`;
    minute5.style.transform = `rotate(${min_rotation}deg)`;
    second5.style.transform = `rotate(${sec_rotation}deg)`;
	
    }, 1000);
