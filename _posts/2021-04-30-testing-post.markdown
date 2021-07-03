---
title: What is recursion?
date: 2021-04-30 11:53:00 Z
excerpt: Testing
---

![3y9pghpnsf19nlvivn2r.jpeg](/uploads/3y9pghpnsf19nlvivn2r.jpeg)

Comme on pouvait s’y attendre, le roi des cryptos s’y est vendu comme des petits pains. Les 11 lots proposés sont bien sûrs tous partis, pour un total de 487 000 dollars comme le rapporte The Block.

Cela donne une moyenne globale de prix par bitcoin de près de 51 535 dollars, ce qui est déjà une bonne affaire, avec un cours du BTC déjà revenu aux environs des 55 000 dollars au moment d’écrire ces lignes. Dans le détails, certains ont même réalisé un sacré coup.

```function paintFill (image, point, newColor) {

  // 1. we want to store the value at POINT index (2D) in a variable
  // 2. change this point value to the newColor value
  // 3. check above, to the left, to right, and below if value matches, if it does call function on that point
  // 4. return result (new image)



  let x = point[0];
  let y =point[1];

  console.log('initial', '\n', image);

  let selectColor = image[x][y];

  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] == selectColor) {
        image[i][j] = newColor;
      }
    }
  }
  console.log('final', '\n', image);
  return image;


}```



