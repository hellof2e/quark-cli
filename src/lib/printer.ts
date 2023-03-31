import figlet from "figlet";
export class Printer {
  static power() {
    figlet('Hello Quark', (err, data) => {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
      console.log('Please let me know if you have any questions or concerns @xushunfa.');
      console.log('Done! Enjoy it!');
    });
  }
}