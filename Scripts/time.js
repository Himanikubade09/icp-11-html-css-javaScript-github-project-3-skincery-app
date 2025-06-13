function showTime()
{
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const currenttime = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerHTML = currenttime ;
}


    showTime();

    setInterval(showTime , 1000)
