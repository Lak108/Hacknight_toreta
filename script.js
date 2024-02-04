function submitForm() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const stress = document.getElementById('stress').value;
    const fatigue = document.getElementById('fatigue').value;

    const symptoms = [];
    if (document.getElementById('headache').checked) symptoms.push('Headache');
    if (document.getElementById('nausea').checked) symptoms.push('Nausea');
    if (document.getElementById('muscleAches').checked) symptoms.push('Muscle Aches');
    if (document.getElementById('increasedHeartbeat').checked) symptoms.push('Increased Heartbeat');
    if (document.getElementById('otherSymptoms').checked) {
        const otherSymptomsInput = document.getElementById('otherSymptomsInput').value;
        symptoms.push(otherSymptomsInput);
    }

    const sleepDuration = document.getElementById('sleepDuration').value;
    const studyDuration = document.getElementById('studyDuration').value;
    const screenTime = document.getElementById('screenTime').value;
    const feelings = document.getElementById('feelings').value;

    // Check if fatigue level is more than 7 and show a warning
    if (parseInt(fatigue) > 7) {
        showFatigueWarning();
    }

    // Show pop-up message with doctors and counselors' numbers
    showHelpNumbers();


function showFatigueWarning() {
    alert('Warning: Your fatigue level is high. Consider taking a break!');
}

function showHelpNumbers() {
    alert('If you need assistance, here are the numbers:\nDoctors: 123-456-7890\nCounselors: 987-654-3210');
}



saveDataToFile({
    name,
    age,
    gender,
    stress,
    fatigue,
    symptoms,
    sleepDuration,
    studyDuration,
    screenTime,
    feelings,
})

function saveDataToFile(data) {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'userData.json';
    a.click();
};


function downloadUserData() {
    // Trigger the submitForm function to ensure the latest data is included in the download
    submitForm();
    
    // You can add additional actions here if needed
    
    // Optionally, scroll to the top of the page
    window.scrollTo(0, 0);
}



// Create a chart
createDataChart(fatigue, screenTime, studyDuration);


function createDataChart(fatigue, screenTime, studyDuration) {
    const canvas = document.getElementById('dataChart');
    const ctx = canvas.getContext('2d');

    const data = {
        labels: ['Fatigue Level', 'Screen Time', 'Study Duration'],
        datasets: [{
            label: 'Data Visualization',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [parseInt(fatigue), parseInt(screenTime), parseInt(studyDuration)]
        }]
    }

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
    
}
}
