document.addEventListener('DOMContentLoaded', function() {

    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const tableDays = document.getElementById('days');

    function getDaysCalendar(month, year) {

        document.getElementById('month').innerHTML = months[month];
        document.getElementById('year').innerHTML = year;

        let firstDayOfWeek = new Date(year, month, 1).getDay()-1;
        let getLastDayThisMonth = new Date(year, month+1, 0).getDate();

        for(let i = -firstDayOfWeek, index = 0; i < (42-firstDayOfWeek); i++, index++) {

            let date = new Date(year, month, i);
            let dayTable = tableDays.getElementsByTagName('td')[index];
            dayTable.classList.remove('prev-month');
            dayTable.classList.remove('next-month');
            dayTable.innerHTML = date.getDate();

            if (i < 1) {

                dayTable.classList.add('prev-month');

            } else if (i > getLastDayThisMonth) {

                dayTable.classList.add('next-month');
            }
        }
    }

    let now = new Date();
    let month = now.getMonth();
    let year = now.getFullYear();

    getDaysCalendar(month, year);

    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    nextButton.onclick = function() {
        month++;
        getDaysCalendar(month, year);      
    }

    prevButton.onclick = function() {
        month--;
        getDaysCalendar(month, year);
    }
});