const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('cómo te encuentras')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Estoy bien gracias...';
      texts.appendChild(p)
    }
    if (text.includes("cuál es tu nombre") || text.includes('what is your name')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Mi nombre es Benito Peña';
      texts.appendChild(p)
    }
    if (text.includes('abre linkenin')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'opening youtube channel';
      texts.appendChild(p)
      console.log('abre linkenin')
      window.open('https://www.linkedin.com/in/benito-pe%C3%B1a-aragon-b69577265/')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();