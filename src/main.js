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

obj.attr = {
  x: 0
}

obj.onUpdate(function(){
  this.attr = {
    x: this.attr.x + 1
  }
})

obj.onDraw(function(ctx){
  ctx.fillStyle = "#000"
  ctx.fillRect(this.__attr.x,0,50,50)
})

scene.addGameObject(obj)

scene.addMap('map')

world.addScene(scene)

world.init()