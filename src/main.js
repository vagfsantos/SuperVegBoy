import { Game, Assets, World, Scene, GameObject} from '../lib/index';

let game = Game.create({
  name: 'game',
  selector: 'body',
  width: 600,
  height: 450
})

Assets.loadImage(
  'name:../assets/imgs.jpg')

let world = new World('World 1')

let scene = new Scene(game)

let obj = new GameObject()

scene.addGameObject(obj)

world.addScene(scene)

world.init()