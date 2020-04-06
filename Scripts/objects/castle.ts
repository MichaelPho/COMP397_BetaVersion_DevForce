module objects
{
    export class Catsle extends GameObject
    {
        private _damage: number=0;
        private _score: number=0;
        // PRIVATE INSTANCE MEMBERS
        private _verticalPosition:number;
        private _horizonalPosition:number;
        private _angle?:number;
       
        // PUBLIC PROPERTIES
        get damage():number{
            return this._damage;
        }
        set damage(newDamage:number){
            this._damage=newDamage;
        }


        get score():number{
            return this._score;
        }
        set score(newScore:number){
            this._score=newScore;
        }

        // PUBLIC PROPERTIES
        get angle():number{
            return this._angle;
        }
        set angle(newAngle:number){
            this._angle=newAngle;
        }
        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("master"), 0, 0, true);
            
            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void 
        {


            this.x>720 ||this.x<0
           // left boundary
            if(this.x < 0)
            {
                this.position = new Vector2(-2, this.position.y);
                console.log("left bound");
            }

            // right boundary

            if(this.x >= 720)
            {
                this.position = new Vector2(config.Game.SCREEN_WIDTH+2, this.position.y);
                console.log("right bound");
            }
        }        

        private _move(): void
        {
            let center_x = (this.x)
          
            let center_y = (this.y) 
            let mouse_x = this.stage.mouseX;
            let mouse_y =this.stage.mouseY;
            let radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
            this.angle= (radians * (180 / Math.PI)*-1)+180;
           
            this.rotation=this.angle;
            
            // let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            // this.position = new Vector2(newPositionX, this._verticalPosition);
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {
            this.angle= 200;
            this.type = enums.GameObjectType.PLANE;
            this._verticalPosition = 880; // locked to the bottom of the screen
            this._horizonalPosition=370;
            let engineSound = createjs.Sound.play("engine");
            engineSound.loop = -1; // loop forever
            engineSound.volume = 0.1; // 10% volume
            this.position= new Vector2(this._horizonalPosition,this._verticalPosition)
          
            this.isCentered=true;
        }


        public Update(): void 
        {
            this._move();
            this._checkBounds();
        }

        public Reset(): void 
        {
            
        }

        
    }

}
