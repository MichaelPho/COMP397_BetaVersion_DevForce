module scenes {
    export class Play extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private platform?: objects.platform;
        //private _plane?: objects.Plane;
        private enemy2?: objects.enemy2;
        private master?: objects.Catsle;
        private bullet?: objects.bullet;
        private check?: boolean = true;
        private status: objects.Label;
        private enemy: Array<objects.enemy>;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void {

            this.platform = new objects.platform();
            this.bullet = new objects.bullet();
            this.status = new objects.Label("0/" + config.Game.FINISH_NUM, "40px", "Consolas", "#FFFF00", config.Game.SCREEN_WIDTH / 2, 30, true);

            //  this._plane = new objects.Plane();
            this.enemy2 = new objects.enemy2();
            this.master = new objects.Catsle();

            // create the cloud array
            this.enemy = new Array<objects.enemy>(); // empty container
            let i: number = 1;
            let temp: objects.enemy;
            // instantiating CLOUD_NUM clouds
            for (let index = 0; index < config.Game.ENEMY_NUM; index++) {
                temp = new objects.enemy();

                this.enemy.push(temp);


            }




            this.Main();
        }

        public Update(): void {
            // setTimeout(() => {
            //     console.log("tesr 3 second");  
            //   },1000 );
            //     setTimeout(() => { alert('Hello') }, 2000);
            //    this.platform.Update();
            //    let smallestDistance:number=0;

            //   this._plane.Update();

            //this.Kill(this.check);
           //changing
          this.check=false;
         
          this.master.Update();
          this.bullet.Update();
          this.enemy.forEach((en)=>{           
          en.Update();
        
               
        
            // managers.Collision.squaredRadiusCheck(this.master, en);
         });
       
         
         this.checkgun();

         this.checkDamage();
       
         const onClick = (e: MouseEvent) =>
          {
            if(this.bullet.position.y==this.master.position.y) {
                let x = this.master.x + 630 - e.clientX;
                let y = this.master.y - e.clientY;
                let l = Math.sqrt(x * x + y * y);

                // objects.Vector2.angle(new objects.Vector2(this.master.x,this.master.y),new objects.Vector2(this.master.x,this.master.y))
                this.bullet.angle.x = x / l * -10;
                this.bullet.angle.y = y / l * -10
                    ;

                this.bullet.StartRun();


                }   


            };

          this.status.text=this.master.score+"/"+config.Game.FINISH_NUM;
          


          window.addEventListener('click', onClick);
            

        }
        checkgun() {
            this.enemy.forEach((en) => {
                if (managers.Collision.AABBCheck(this.bullet, en)) {
                    en.Reset();
                    this.master.score += 1;
                    console.log("shoot small: " + this.master.score);

                }
            });
            if (managers.Collision.AABBCheck(this.bullet, this.enemy2)) {
                this.enemy2.Reset();
                this.master.score += 2;
                console.log("shoot big" + this.master.score);



            }

            if (this.master.score >= config.Game.FINISH_NUM) {
                config.Game.SCENE = scenes.State.PLAY2;
            }

        }


        public Main(): void {

            this.addChild(this.platform);

            this.addChild(this.enemy2);

            //  this.addChild(this._plane);
            let i: number = 1;
            for (const en of this.enemy) {
                setTimeout(() => {

                    en.StartRun();
                    this.addChild(en);
                    console.log("enemy out");
                }, i * 5000);
                i++;
            }
            this.addChild(this.master);
            this.addChild(this.bullet);
            this.addChild(this.status);
        }
        private Kill(a: boolean): boolean {


            if (a) {
                this.enemy.forEach(element => {
                    if (element.y > 400) {
                        element.Reset();
                        console.log("kill small");

                        return false;
                    }
                });
                if (this.enemy2.y > 400) {
                    this.enemy2.Reset();
                    console.log("kill big")

                    return false;
                }
            }
            else {

                return true;
            }




        }
        private checkDamage(): void {
            this.enemy.forEach((en) => {
                if (managers.Collision.AABBCheck(this.master, en)) {
                    this.master.damage += 5;
                    console.log("damage :" + this.master.damage);

                }
            });
            if (managers.Collision.AABBCheck(this.master, this.enemy2)) {
                this.master.damage += 10;
                console.log("damage :" + this.master.damage);

            }

            if (this.master.damage >= config.Game.DEATH_NUM) {
                config.Game.SCENE = scenes.State.END;
            }
        }
    }


}
