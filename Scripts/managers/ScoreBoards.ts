module managers
{
    export class ScoreBoard
    {
        // private  instance members
        private _lives : number;
        private _score : number;
        private _highScore : number;
        private _livesLabel : objects.Label;
        private _scoreLabel : objects.Label;
        private _highScoreLabel : objects.Label;

        // public properties
        
        public get Lives() : number 
        {
            return this._lives;
        }
        
        public set Lives(v : number) 
        {
            this._lives = v;
            config.Game.LIVES = this._lives;
            this.LivesLabel.text = "Lives: " + this._lives;
        }
        
        public get Score() : number 
        {
            return this._score;
        }
        
        public set Score(v : number) 
        {
            this._score = v;
            config.Game.SCORE = this._score;
            this.ScoreLabel.text = "Score: " + this._score;
        }

        public get HighScore() : number 
        {
            return this._highScore;
        }

        public set HighScore(v : number) 
        {
            this._highScore = v;
            config.Game.HIGH_SCORE = this._highScore;
            this.highScoreLabel.setText("High Score: " + this._highScore);
        }
        
        public get LivesLabel() : objects.Label 
        {
            return this._livesLabel;
        }
        
        public get ScoreLabel() : objects.Label 
        {
            return this._scoreLabel;
        }

        public get highScoreLabel() : objects.Label 
        {
            return this._highScoreLabel;
        }

        // constructor
        constructor()
        {
            this._initialize();
        }

        // private methods
        private _initialize():void
        {
            this._livesLabel = new objects.Label("Lives: 99", "20px", "Consolas", "#FFFF00", 0, 0);
            this._scoreLabel = new objects.Label("Score: 99999", "20px", "Consolas", "#FFFF00", 0, 0);
            this._highScoreLabel = new objects.Label("High Score: 99999", "40px", "Consolas", "#FFFF00", 0, 0);
            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
            this.HighScore = config.Game.HIGH_SCORE;
        }

        // public methods
    }
}