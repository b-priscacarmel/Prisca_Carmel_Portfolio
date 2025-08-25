const chartOptions = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  scales: { x: { beginAtZero: true, max: 100 } }
};

const blueColor = "#3b82f6";

new Chart(document.getElementById("skillsChart"), {
  type: "bar",
  data: {
    labels: ["Java", "Python", "HTML", "CSS", "JavaScript", "SQL"],
    datasets: [{
      label: "Proficiency (%)",
      data: [90, 80, 85, 80, 75, 70],
      backgroundColor: blueColor
    }]
  },
  options: chartOptions
});
