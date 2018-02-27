import { Game, Assets } from '../lib/index';

let game = Game.create({
  name: 'game',
  selector: 'body',
  width: 600,
  height: 450
})

Assets.loadImage(
  'name:../assets/imgs.jpg')
console.log(game)