// Script simple pour animer les boutons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Merci pour votre intérêt ! Nous vous contacterons rapidement.');
  });
});
