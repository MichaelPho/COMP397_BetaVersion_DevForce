module scenes
{
    export class Level extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _startButton2: objects.Button;
        private _startButton3: objects.Button;
        private _ocean: objects.background;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
             //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Choose level", "80px", "Consolas", "#FFFF00", 370, 180, true);
            // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("level1pic"), 370, 400, true);
            this._startButton2 = new objects.Button(config.Game.ASSETS.getResult("level2pic"), 370, 530, true);
            this._startButton3 = new objects.Button(config.Game.ASSETS.getResult("level3pic"), 370, 660, true);
             //this._startButton3 = new objects.Button(config.Game.ASSETS.getResult("bosslevel"), 370, 790, true);
             this._ocean = new objects.background(config.Game.ASSETS.getResult("levelbackground"));
             
            this.Main();
        }        
        
        public Update(): void 
        {
           this._ocean.Update();
        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);
       
            this.addChild(this._welcomeLabel);

        
           this.addChild(this._startButton);
            this.addChild(this._startButton2);
            this.addChild(this._startButton3);

            this._startButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });
            this._startButton2.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY2;
            });
            this._startButton3.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY3;
            });

        }

        
    }
}