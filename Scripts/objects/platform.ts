module objects
{
    export class platform extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?:number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
     
        constructor(first: Object = config.Game.ASSETS.getResult("platform"))
        {
            super(first);

            this.Start();
        }

        // PRIVATE METHODS

        protected _checkBounds(): void 
        {
            if(this.y >= 0)
            {
                this.Reset();
            }
        }       
        
        private _move():void
        {
            this.position = Vector2.add(this.position, this.velocity);
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {
            this.type = enums.GameObjectType.PLATFORM;
            this._verticalSpeed=0; // 5 px per frame
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
            this.position = new Vector2(0,0);
        }

        
    }
}