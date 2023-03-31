import figlet from "figlet";
export class Printer {
  static power() {
    // console.log([
    //     "  _   _           _      ____  ____        _",
    //     " | \ | | ___   __| | ___|___ \/ ___|  __ _| |",
    //     " |  \| |/ _ \ / _` |/ _ \ __) \___ \ / _` | |",
    //     " | |\  | (_) | (_| |  __// __/ ___) | (_| | |",
    //     " |_| \_|\___/ \__,_|\___|_____|____/ \__, |_|",
    //     "                                        |_|"
    //   ].join('\n'));
    figlet('node2sql', (err, data) => {
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