import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {message: "Type in your url",
     name: "url",},
  ])
  .then((answers) => {
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('user_url.png'));

    fs.writeFile('user_url.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });