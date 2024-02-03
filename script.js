document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


document.querySelectorAll('.internship-box').forEach(box => {
  box.addEventListener('mouseover', function () {
      highlightBox(this);
  });

  box.addEventListener('mouseout', function () {
      removeHighlight(this);
  });
});

function showDetails(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "flex";

  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          hideDetails(modalId);
      }
  });
}

function hideDetails(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function highlightBox(box) {
  box.style.backgroundColor = "#000";
  box.style.color = "#fff";
}

function removeHighlight(box) {
  box.style.backgroundColor = "#fff";
  box.style.color = "#000";
}

function toggleAnswer(box) {
  var answer = box.querySelector('.answer'); 
  var button = box.querySelector('.toggle-answer'); 

  answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';

  button.textContent = button.textContent === '+' ? '-' : '+';
}




