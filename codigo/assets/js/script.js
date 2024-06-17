document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-visible');
  });
  
  document.addEventListener('DOMContentLoaded', () => {
  const goalsList = document.getElementById('goalsList');
  
  const fetchUserGoals = async () => {
    try {
      const response = await fetch('/userGoals');
      const data = await response.json();
  
      if (response.ok) {
        displayUserGoals(data.userGoals);
      } else {
        console.error('Erro ao obter as metas do usuário:', data.message);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };
  
  const displayUserGoals = (userGoals) => {
    goalsList.innerHTML = '';
  
    userGoals.forEach(goal => {
      const goalDiv = document.createElement('div');
      goalDiv.classList.add('goal');
  
      goalDiv.innerHTML = `
        <h2>${goal.category}</h2>
        <p><strong>Descrição:</strong> ${goal.goalDescription}</p>
        <p><strong>Custo:</strong> ${goal.goalCost}</p>
        <p><strong>Valor Destinado:</strong> ${goal.amountAllocated}</p>
        <p><strong>Progresso:</strong> ${goal.progress}%</p>
      `;
  
      goalsList.appendChild(goalDiv);
    });
  };
  
  fetchUserGoals();
  });
  