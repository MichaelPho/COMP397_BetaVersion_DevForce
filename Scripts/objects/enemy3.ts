module objects
{
    export class enemy3 extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?:number;
        private _horizontalSpeed?:number;
        private _health?:number =3;
        private _enemybullet?: objects.bulletenemy;

        // PUBLIC PROPERTIES
        public get Health(): number {
            return this._health;
        }
        public set Health(value: number) {
            this._health = value;
        }
        public get enemyBullet(): objects.bulletenemy {
            return this._enemybullet;
        }
        public set enemyBullet(value: objects.bulletenemy) {
            this._enemybullet = value;
        }

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("enemy3"), new Vector2(), true);
            this.Start();
        }

        // PRIVATE METHODS

        protected _checkBounds(): void 
        {
            if(this.y >= config.Game.SCREEN_HEIGHT/2 -50)
            {
                this.position = new Vector2(this.x, config.Game.SCREEN_HEIGHT/2 -50);
              
             
            }
        }       
        public CheckBounds(): boolean 
        {
           
            if(this.y >= config.Game.SCREEN_HEIGHT/2 - 50)
            {
             
                return true
            }
           
            return false;
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
            this.enemyBullet= new objects.bulletenemy();
            
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
            this.Health=3;
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
          //  let randomY = util.Mathf.RandomRange(-this.height * 3, -this.height);
            this.position = new Vector2(randomX,0);
        }

        
    }
}