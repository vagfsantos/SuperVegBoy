import { Game, Assets, World, Scene, GameObject, Events} from '../lib/index';

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
  x: 0,
  y: 0,
  width: 50,
  height: 50
}

obj.onUpdate(function(){

  let velocity = 4;

  if( Events.keyIsPressed('RIGHT_ARROW') ) {
    
    this.attr = {
      x: this.attr.x + velocity
    }
  }
  
  if( Events.keyIsPressed('LEFT_ARROW') ) {
    
    this.attr = {
      x: this.attr.x - velocity
    }
  }

  if( Events.keyIsPressed('UP_ARROW') ) {
    
    this.attr = {
      y: this.attr.y - velocity
    }
  }

  if( Events.keyIsPressed('DOWN_ARROW') ) {
    
    this.attr = {
      y: this.attr.y + velocity
    }
  }
})


obj.onDraw(function(ctx){
  ctx.fillStyle = "#000"
  ctx.fillRect(this.attr.x, this.attr.y, this.attr.width, this.attr.height)
})


obj.addColiderBox({
  x: 10,
  y: 10,
  width: 30,
  height: 30
})

obj.activeDebugMode()

scene.addGameObject(obj)

scene.addMap('map')

scene.setCamera(obj)

world.addScene(scene)


world.init()