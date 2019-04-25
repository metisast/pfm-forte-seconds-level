import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.scss';
import 'daterangepicker/daterangepicker.css';
import $ from 'jquery';
import 'daterangepicker';

$('#datapicker').daterangepicker({
    timePicker: false,
    locale: {
        cancelLabel: 'Очистить',
        applyLabel: 'Искать',
        "daysOfWeek": [
            "Вс",
            "Пн",
            "Вт",
            "Сп",
            "Чт",
            "Пт",
            "Сб"
        ],
        "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        "firstDay": 1
    },
    opens: 'center',
});

$('#datapicker').on('apply.daterangepicker', (ev, picker) => {
    let start = picker.startDate.format('MM.DD.YYYY');
    let end = picker.endDate.format('MM.DD.YYYY');
    $('#datapicker h3').text(start + ' - ' + end);
})

