document.addEventListener('DOMContentLoaded', function() {

    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const tableDays = document.getElementById('days');

    function getDaysCalendar(month, year) {
        document.getElementById('month').innerHTML = months[month];
        document.getElementById('year').innerHTML = year;

        let firstDayOfWeek = new Date(year, month, 1).getDay()-1;
        let getLastDayThisMonth = new Date(year, month+1, 0).getDate();

        for(let i = -firstDayOfWeek; i < (42-firstDayOfWeek); i++) {
            let date = new Date(year, month, i);
        }
    }
    getDaysCalendar(2, 2001);
});