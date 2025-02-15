let blogs = [];

export const formatDateToWIB = (date) => {
    let monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    let day = date.getDate().toString().padStart(2, '0');
    let month = monthList[date.getMonth()];
    let year = date.getFullYear();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
  
    let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`;
    return formattedDate;
  }
  
export const getRelativeTime = (postTime) => {
    let now = new Date();
    console.log('Waktu Sekarang : ', now);
    console.log('Waktu User Post : ', postTime);
  
    let diffTime = now - postTime;
    console.log('selisih waktu : ', diffTime);
  
    let diffInSec = Math.floor((now - postTime) / 1000);
    console.log('selisih detik : ', diffInSec);
    if (diffInSec < 60) {
      return `${diffInSec} second${diffInSec === 1 ? '' : 's'} ago`;
    }
  
    let diffInMin = Math.floor(diffInSec / 60);
    console.log('selisih menit ', diffInMin);
    if (diffInMin < 60) {
      return `${diffInMin} minute${diffInMin === 1 ? '' : 's'} ago`;
    }
  
    let diffInHour = Math.floor(diffInMin / 60);
    console.log('selisih jam ', diffInHour);
    if (diffInHour < 24) {
      return `${diffInHour} hour${diffInHour === 1 ? '' : 's'} ago`;
    }
  
    let diffInDay = Math.floor(diffInHour / 24);
    console.log('selisih hari', diffInDay);
    if (diffInDay < 30) {
      return `${diffInDay} day${diffInDay === 1 ? '' : 's'} ago`;
    }
  
    let diffInMonth = Math.floor(diffInDay / 30);
    return `${diffInMonth} month${diffInMonth === 1 ? '' : 's'} ago`;
  }

  