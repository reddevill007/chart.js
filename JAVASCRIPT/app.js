var myChart = document.getElementById('myChart').getContext('2d');

const graph = new Chart(myChart, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['1951', '1961', '1971', '1981', '1991', '2001', '2011'],
        datasets: [{
            label: 'Population of India in last 7 decades',
            data: [361088003, 439235000, 548160000, 683329000, 846387888, 1028737436, 1210726932],
            backgroundColor: [
                '#00ffff',
                '#663399',
                '#d87093',
                '#9acd32',
                '#ffa500',
                '#ccc',
                '#fff'
            ]
        }],
    },
});