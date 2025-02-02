function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date;
    const horas = now.getHours().toString().padStart(2,'0');
    const minutos = now.getMinutes().toString().padStart(2,'0');
    const secundos = now.getSeconds().toString().padStart(2,'0');

    const timeString = `${horas}:${minutos}:${secundos}`;
    timeElement.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();