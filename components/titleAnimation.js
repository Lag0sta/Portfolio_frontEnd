

export function titleAnimation(text, setRandomText) {
  //Fonction permettant d'animer le titre par changements de lettres
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  let iteration = 0;

  const interval = setInterval(() => {

      const newText = text.split('').map((char, index) => {
        if (index < iteration) {
          return char;
        } else {
          return letters[Math.floor(Math.random() * letters.length)];
        }
      }).join('');
      setRandomText(newText);
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1;
      }, 85);

}
