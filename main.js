

function program() {
    
    title("");
    size(600, 600);
    
    // All code goes here

				    
				function coll(x1, y1, w1, h1, x2, y2, w2, h2){
				    return x1 + w1 > x2 && x2 + w2 > x1 && y1 + h1 > y2 && y2 + h2 > y1
				}
				    
				function dist(x1, y1, x2, y2) {
				    return Math.hypot(x2 - x1, y2 - y1);
				}
				
				
				class Block {
				    constructor(x, y, w, h){
				    this.x = x
				    this.y = y
				    this.w = w
				    this.h = h
				    }
				}
				
				class Rock extends Block{
				constructor(x, y, w, h) {
				    super(x, y, w, h)
				}
				draw() {
				    fill(0)
				    rect(this.x, this.y, this.w, this.h)
				}
				
				update() {
				    this.draw();
				}
				}
				
				
				class Lava extends Block{
				constructor(x, y, w, h) {
				    super(x, y, w, h)
				}
				
				draw() {
				    fill(255, 0, 0)
				    rect(this.x, this.y, this.w, this.h)
				}
				
				update() {
				    this.draw();
				}
				}
				
				
				
				let Ai;
				let blocks = [];
				let dirs = [];
				
				function norm(x, y, w, h){
				    blocks.push(new Rock(x, y, w, h));
				}
				function lava(x, y, w, h){
				    blocks.push(new Lava(x, y, w, h));
				}
				
				    let level = 1;
				    
				
				             norm(200,200,200,20);
				             norm(235,180,65,20);
				
				
				             norm(300,180,200,20);
				             norm(0,180,200,20);
				             norm(-176,0,200,20);
				             norm(392,97,65,20);
				             norm(502,42,65,20);
				             norm(533,-47,65,20);
				             norm(502,-162,65,20);
				             norm(422,-225,65,20);
				
				
				    
				    
				    
				class Player{
				constructor(x, y) {
				    this.x = x
				    this.y = y
				    this.w = 25
				    this.h = 40
				    this.speed = 4
				    this.jump_power = this.speed * 1.3
				    this.grav = 0.1
				    this.can_jump = false;
				    this.x_vel = 0
				    this.y_vel = 0
				}
				
				draw() {
				    fill(100, 100, 255)
				    rect(this.x, this.y, this.w, this.h);
				}
				
				move() {
				    this.x_vel = 0
				    this.y_vel += this.grav;
				
				    if(keys.a || keys.ArrowLeft){
				        this.x_vel = -this.speed
				    }
				    if(keys.d || keys.ArrowRight){
				        this.x_vel = this.speed
				    }
				    if(keys.w && this.can_jump || keys.ArrowUp && this.can_jump){
				        this.y_vel = -this.jump_power
				    }
				
				}
				
				
				coll(obj){
				    if(coll(obj.x, obj.y, obj.w, obj.h, this.x, this.y, this.w, this.h)){
				    
				            // ctx.fillStyle = "red"
				            // ctx.fillRect(0,0,600,600)
				        if (this.prev_y + this.h <= obj.y) {
				            this.y = obj.y - this.h;
				            this.y_vel = 0;
				            this.can_jump = true;
				        } else if (this.prev_y >= obj.y + obj.h) {
				            this.y = obj.y + obj.h;
				            this.y_vel = 0;
				        } else if (this.prev_x + this.w <= obj.x) {
				            this.x = obj.x - this.w;
				            this.x_vel = 0;
				        } else if (this.prev_x >= obj.x + obj.w) {
				            this.x = obj.x + obj.w;
				            this.x_vel = 0;
				        }
				    }
				}
				
				
				
				
				update() {
				    this.prev_x = this.x;
				    this.prev_y = this.y;
				    this.draw();
				    this.move();
				    this.x += this.x_vel;
				    this.y += this.y_vel;
				    this.can_jump = false;
				}
				}
				
				
				
				
				
				const player = new Player(200, 100);
				

				
				function draw(){
				    background(255, 255, 255);
				    
				    
				    
				    pushMatrix();
				    
				    translate(-player.x + 300, - player.y + 200);
				    
				    player.update();
				
				    
				    for(let i = 0; i < blocks.length; i ++){
				        player.coll(blocks[i])
				        blocks[i].update();
				    }
				
				    popMatrix();
				    
				}
				
}

runPJS(program);

// Add reload button on KA --> <script>
