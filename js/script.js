document.addEventListener('DOMContentLoaded', function() {

    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    function getDaysCalendar(month, year) {
        document.getElementById('month').innerHTML = months[month];
        document.getElementById('year').innerHTML = year;
    }
    getDaysCalendar(2, 2001);
});