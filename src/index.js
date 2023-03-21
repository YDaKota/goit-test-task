const followBtn = document.querySelector('.follow-btn');
const followerCount = document.querySelector('.followers-count');
const tweetsCount = document.querySelector('.tweets-count');

let count = 100500;

function followBtnClickHandler() {
    if (followBtn.textContent === 'Follow') {
        followBtn.textContent = 'Following';
        followBtn.style.backgroundColor = '#5CD3A8';
        count += 1;
    } else {
        followBtn.textContent = 'Follow';
        followBtn.style.backgroundColor = '#EBD8FF';
        count -= 1;
    }

    followerCount.textContent = count.toLocaleString('en-US');
    localStorage.setItem('followerCount', count);
}

if (localStorage.getItem('followerCount')) {
    count = Number(localStorage.getItem('followerCount'));
    followerCount.textContent = count.toLocaleString('en-US');
    if (count > 100500) {
        followBtn.textContent = 'Following';
        followBtn.style.backgroundColor = '#5CD3A8';
    } 
}

followBtn.addEventListener('click', followBtnClickHandler);