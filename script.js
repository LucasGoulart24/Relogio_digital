function updateTime() {
    const timeElement = document.getElementById('time');
    const dataElement = document.getElementById('data');
    const now = new Date;

    const horas = now.getHours().toString().padStart(2,'0');
    const minutos = now.getMinutes().toString().padStart(2,'0');
    const secundos = now.getSeconds().toString().padStart(2,'0');
    
    const dia = now.getDate().toString().padStart(2, '0');
    const mes = (now.getMonth() + 1).toString().padStart(2, '0');
    const ano = now.getFullYear();

    const timeString = `${horas}:${minutos}:${secundos}`;
    const dateString = `${dia}/${mes}/${ano}`;
    timeElement.textContent = timeString;
    dataElement.textContent = dateString;
}

setInterval(updateTime, 1000);
updateTime();