export const istokenValid = () => {

    let prevTime = new Date(localStorage.getItem('tokenDate'));


    let currentTime = new Date();
 

    let timeDiff = currentTime.getTime() - prevTime.getTime();


    let hoursPassed = timeDiff / (1000 * 60 * 60);

    return hoursPassed > 24;

}


