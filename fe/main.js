document.addEventListener('DOMContentLoaded', async () => {
    const taskId = 'your-task-id'; // Replace with the actual task ID
    const response = await fetch(`/api/task/${taskId}/deployed-form`);
    const data = await response.json();
  
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = JSON.stringify(data, null, 2);
  });
  