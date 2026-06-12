document.getElementById('contact-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const res = document.getElementById('response');
  if(!name || !message){ res.textContent = 'Preencha todos os campos.'; return }
  res.textContent = `Obrigado, ${name}! Sua mensagem foi recebida.`;
  this.reset();
});
