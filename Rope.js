class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:600
     
        }
       this.pointB=pointB;
       this.bodyA=bodyA;
       this.rope=Constraint.create(options);
       World.add(world,this.rope);
        
    }
 
    display(){
        if(this.rope.bodyA){
           var pointA=this.rope.bodyA.position
           var pointB=this.pointB
 
        push()
        //stroke("white");
        //strokeWeight(1);
        line (pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}
    
}