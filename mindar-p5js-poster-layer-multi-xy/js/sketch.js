let arLayers = []

function setup() {
	noCanvas()

	arLayers.push(new Walker('canvas-ar2'))
	arLayers.push(new Walker('canvas-ar3'))
	arLayers.push(new Walker('canvas-ar4'))
	arLayers.push(new Walker('canvas-ar5'))
}

function draw() {
	for(let ar of arLayers){
		ar.display()
	}
}

function mousePressed() {
	for(let ar of arLayers){
		ar.arLayer.clear()
		ar.h = random(360)
	}
	
}

class Walker{
	constructor(canvasID){
		this.arLayer = createGraphics(895, 1280, document.getElementById(canvasID))
		this.arLayer.pixelDensity(1) // prevent 200+ PPI lag
		this.arLayer.colorMode(HSL)
		this.h = random(360)
		this.xSpeed = random(.001, .01)
		this.ySpeed = random(.001, .01)
		this.rotSpeed = random(.9, 1.5)
	}

	display(){
		let x = noise(frameCount * this.xSpeed) * this.arLayer.width
		let y = noise(frameCount * this.ySpeed) * this.arLayer.height
		let fc = this.h + sin(frameCount * .1) * 40

		this.arLayer.reset()
		this.arLayer.fill(fc, 50, 50)
		this.arLayer.noStroke()

		this.arLayer.translate(x, y)
		this.arLayer.rotate(radians(frameCount * this.rotSpeed))
		this.arLayer.rect(0, 0, this.arLayer.width, 3)
	}
}