const ctx = document.getElementById('progressChart').getContext('2d');

// Create a gradient fill for the background
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(153, 19, 19, 0.8)'); // Darker at the top
gradient.addColorStop(0.25, 'rgba(153, 19, 19, 0.6)'); // Darker at the top
gradient.addColorStop(0.5, 'rgba(153, 19, 19, 0.4)'); // Darker at the top
gradient.addColorStop(0.75, 'rgba(153, 19, 19, 0.2)'); // Darker at the top
gradient.addColorStop(1, 'rgba(153, 19, 19, 0)'); // Fades out at the bottom

const progressChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['May24', 'Jun24', 'Jul24', 'Aug24'], // Replace with your data labels
        datasets: [{
            label: 'Progress',
            data: [107.5, 97, 90, 85], // Replace with your data points
            fill: true,
            borderColor: '#991313',
            tension: 0.1,
            pointBackgroundColor: '#b70909',
            pointBorderColor: '#b70909',
            pointRadius: 3,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2,
            pointHitRadius: 10,
            pointStyle: 'rectRounded',
            backgroundColor: gradient // Apply the gradient background
        }]
    },
    options: {
        scales: {
            x: {
                type: 'category',
                title: {
                    display: false,
                    text: 'Time'
                }
            },
            y: {
                beginAtZero: false,
                min: 40, // Set the minimum value of the y-axis
                max: 120, // Set the maximum value of the y-axis
                title: {
                    display: false,
                    text: 'Progress'
                }
            }
        },
        plugins: {
            legend: {
                display: false // Hide the legend
            },
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        yMin: 76,
                        yMax: 76,
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderDash: [5, 5], // Dotted line
                        label: {
                            content: 'min',
                            enabled: true,
                            position: 'end',
                            color: 'gray'
                        }
                    },
                    line2: {
                        type: 'line',
                        yMin: 54,
                        yMax: 54,
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderDash: [5, 5], // Dotted line
                        label: {
                            content: 'max',
                            enabled: true,
                            position: 'end',
                            color: 'gray'
                        }
                    },
                }
            }
        }
    }
});