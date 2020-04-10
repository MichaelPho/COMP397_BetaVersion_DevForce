module config
{
    export class Game
    {
        public static SCREEN_WIDTH:number = 720;
        public static SCREEN_HEIGHT:number = 1002;
        public static SCENE: scenes.State;
        public static ASSETS: createjs.LoadQueue;
        public static FPS: number = 60; // 60 Frames per second
        public static CLOUD_NUM: number = 4;
        public static ENEMY_NUM: number = 5;
        public static ENEMY_NUM2: number = 15;
        public static FINISH_NUM: number = 10;
        public static FINISH_NUM2: number = 100;
        public static DEATH_NUM: number = 500;
        public static SCORE: number = 0;
        public static HIGH_SCORE: number = 0;
        public static SCORE_BOARD: managers.ScoreBoard;
        public static LIVES: number = 15;
    }
}