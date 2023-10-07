let arLayer
let h = 0

function setup() {
	noCanvas()

	arLayer = createGraphics(895, 1280, document.getElementById('canvas-ar'))
	arLayer.pixelDensity(1) // prevent 200+ PPI lag
	arLayer.colorMode(HSL)
}

function draw() {
	let x = noise(frameCount * .007) * arLayer.width
	let y = noise(frameCount * .005) * arLayer.height
	let fc = h + sin(frameCount * .1) * 40

	arLayer.reset()
	arLayer.fill(fc, 50, 50)
	arLayer.noStroke()

	arLayer.translate(x, y)
	arLayer.rotate(radians(frameCount * 1.1))
	arLayer.rect(0, 0, 300, 3)
}

function mousePressed() {
	arLayer.clear()
	h = random(360)
}