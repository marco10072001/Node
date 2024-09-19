const fs = require('fs');

// Créer welcome.txt avec « Hello Node »
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt has been created.');

  // Lire welcome.txt et afficher son contenu
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
