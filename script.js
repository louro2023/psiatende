// Se você quiser adicionar algum comportamento JavaScript, você pode fazê-lo aqui.
// Por exemplo, para fazer o botão de WhatsApp abrir uma conversa no WhatsApp Web:
const whatsappButton = document.querySelector('.button-whatsapp');
whatsappButton.addEventListener('click', () => {
  window.open('https://web.whatsapp.com/send?phone=5521981682922', '_blank');
});
