import figlet from "figlet";
import path from 'path';

export default class Printer {
  static power(root) {
    console.log(root, 2222);
    
    figlet('Enjoy Quark', (err, data) => {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);

      console.log(`\nScaffolding project in ${root}...`);

      console.log(`
        \n cd ${path.basename(root)}
        npm install
        npm run dev
      `);

      console.log('Done! Enjoy it!');
    });
  }
}