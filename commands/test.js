module.exports.run = async (bot, message, args) => {
  let btn = new bot.disbut.MessageButton()
    .setStyle('red')
    .setLabel('AMONGUS !!! SO SUS !!!!')
    .setID('amogus');
  let msg = await message.channel.send('Click for AMOGUS 😳', {
    button: btn
  });

  //if u want 2 buttons, just look at this example:

  /*
  let btn = new bot.disbut.MessageButton()
    .setStyle('red')
    .setLabel('AMONGUS !!! SO SUS !!!!')
    .setID('amogus');
  let btn2 = new bot.disbut.MessageButton()
    .setStyle('green')
    .setLabel('AMONGUS !!! SO SUS !!!!')
    .setID('amogus2');
  let msg = await message.channel.send('Click for AMOGUS 😳', {
    button: btn, btn2
  });
  */

  //of course you need to add the 2nd button id to the event inside of index.js so it will work when clicking.

}

module.exports.config = {
  name: "test",
  aliases: []
}
