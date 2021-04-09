class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.width = 750;
      this.height = 600;
      this.thickness = 10;
      this.image=loadImage("images/Plucking mangoes/tree.png");

      this.body = Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("white");
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  };