module objects
{
    export class Plane extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _verticalPosition:number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("plane"), 0, 0, true);

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void 
        {
            // left boundary
            if(this.position.x <= this.halfWidth)
            {
                this.position = new Vector2(this.halfWidth, this.position.y);
            }

            // right boundary

            if(this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth)
            {
                this.position = new Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        }        

        private _move(): void
        {
            let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            this.position = new Vector2(newPositionX, this._verticalPosition);
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {
            this.type = enums.GameObjectType.PLANE;
            this._verticalPosition = 890; // locked to the bottom of the screen
            let engineSound = createjs.Sound.play("engine");
            engineSound.loop = -1; // loop forever
            engineSound.volume = 0.1; // 10% volume
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
