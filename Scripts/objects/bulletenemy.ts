module objects
{
    export class bulletenemy extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _start?: boolean;
      
        
        private _verticalSpeed?:number;
        private _horizontalSpeed?:number;
        private vector?:Vector2;


        
        // PUBLIC PROPERTIES
        public get start(): boolean {
            return this._start;
        }
        public set start(value: boolean) {
            this._start = value;
        }
        get angle():Vector2{
            return this.vector;
        }
        set angle(newAngle:Vector2){
            this.vector=newAngle;
        }

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("bullet"), new Vector2(0,0), true);

            this.Start();
        }

        // PRIVATE METHODS

        // protected _checkBounds(): void 
        // {
        //     if(this.y >= config.Game.SCREEN_HEIGHT + this.height)
        //     {
                
        //         this.Reset();
        //     }
        // }       
        
        // private _move():void
        // {
        //     this.position = Vector2.add(this.position, this.velocity);
        // }


        // public StartRun(): void{
        //    this._verticalSpeed=2;
        //    this.velocity= new Vector2(0,this._verticalSpeed)
        //     console.log("start run");
        // }
        
        // // PUBLIC METHODS
        // public Start(): void 
        // {
        //     // curve bullet
          
        //     //initializa
        //     this.type = enums.GameObjectType.ENEMY;
        //     // let it stop if needed
          
        //    this._verticalSpeed=2;
        //     this.velocity = new Vector2(0, this._verticalSpeed);
          
        //     this.Reset();
        // }
        
        // public Update(): void 
        // { 
            
        //     this.velocity = new Vector2(0, this._verticalSpeed);
        //     this._move();
        //     this._checkBounds();
        // }
        
        // public Reset(): void 
        // {
        //     //let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
        //   //  let randomY = util.Mathf.RandomRange(-this.height * 3, -this.height);
        //     this.position = new Vector2(370,880);
        // }
        protected _checkBounds(): void 
        {
            if(this.y >1000 || this.x>720 ||this.x<0)
            {
               // console.log("changed x: "+position.x +" y: "+position.y);
                this.Reset();
            }
        }       
        public CheckBounds(): boolean 
        {
            if(this.y <400 || this.y >1000 || this.x>720 ||this.x<0)
            {
                console.log("changed x: "+this.x +" y: "+this.y);
               return true;
            }
           
            return false;
        }       
        
        private _move():void
        {
          //  this.position = Vector2.add(this.position, this.velocity);
        
            this.position =Vector2.add(this.position,this.angle);
           
        }


        public StartRun(position :Vector2= new Vector2(370,880)): void{
           
            this.position = position
           this._verticalSpeed=2;
           
           this.velocity= new Vector2(0,this._verticalSpeed)
            console.log("start run");
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {
            // curve bullet
            this.position =new Vector2(0,0)
            //initializa
            this.type = enums.GameObjectType.ENEMY;
            // let it stop if needed
          this.angle= new Vector2(0,0);
            this._verticalSpeed=0;
            this.velocity = new Vector2(0, this._verticalSpeed);
          
            this.Reset();
        }
        
        public Update(position:Vector2 =new Vector2(0,0)): void 
        { 
            
            this.velocity = new Vector2(0, this._verticalSpeed);
            
            this._move();
            this._checkBounds();
            
        }
        
        public Reset(): void 
        {
            
            this._verticalSpeed=0;
            this.velocity = new Vector2(0, this._verticalSpeed);
            this.angle= new Vector2(0,0);
            //let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
          //  let randomY = util.Mathf.RandomRange(-this.height * 3, -this.height);

          
            this.position = new Vector2(0,0);
        }


        
    }
}