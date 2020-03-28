module objects
{
    export class enemy extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?:number;
        private _horizontalSpeed?:number;
      

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("enemy"), new Vector2(), true);

            this.Start();
        }

        // PRIVATE METHODS

        protected _checkBounds(): void 
        {
            if(this.y >= config.Game.SCREEN_HEIGHT + this.height)
            {
                this.Reset();
            }
        }       
        
        private _move():void
        {
            this.position = Vector2.add(this.position, this.velocity);
        }
        public StartRun(): void{
           this._verticalSpeed=2;
           this.velocity= new Vector2(0,this._verticalSpeed)
            console.log("start run");
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {
            this.type = enums.GameObjectType.ENEMY;
            // let it stop if needed
           this._verticalSpeed=0;
            this.velocity = new Vector2(0, this._verticalSpeed);
          
            this.Reset();
        }
        
        public Update(): void 
        { 
           
            this._move();
            this._checkBounds();
        }
        
        public Reset(): void 
        {
            
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
          //  let randomY = util.Mathf.RandomRange(-this.height * 3, -this.height);
            this.position = new Vector2(randomX,0);
        }

        
    }
}