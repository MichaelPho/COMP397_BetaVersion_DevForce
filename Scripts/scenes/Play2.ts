module scenes
{
    export class Play2 extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private platform?: objects.platform;
        //private _plane?: objects.Plane;
        private enemy2?: Array<objects.enemy2>;
        private master?: objects.Catsle;
        private bullet?: objects.bullet;
       private check?: boolean= true;
        private status: objects.Label;
        private enemy: Array<objects.enemy>;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
          
            this.platform = new objects.platform(config.Game.ASSETS.getResult("background2"));
            
            this.bullet = new objects.bullet();
            this.status =new objects.Label("0/"+config.Game.FINISH_NUM2, "40px", "Consolas", "#FFFF00", config.Game.SCREEN_WIDTH/2, 30, true);
          
          //  this._plane = new objects.Plane();
            
            this.master = new objects.Catsle();
            
            // create the cloud array
            this.enemy = new Array<objects.enemy>(); // empty container
            this.enemy2 = new Array<objects.enemy2>(); // empty container
            let i: number =1;
           let temp : objects.enemy ;
            // instantiating CLOUD_NUM clouds
            for (let index = 0; index < config.Game.ENEMY_NUM2; index++) {
               temp= new objects.enemy();
              
                this.enemy.push(temp);
               
             
          }
          let temp2 : objects.enemy2 ;
          for (let index = 0; index < config.Game.ENEMY_NUM; index++) {
            temp2= new objects.enemy2();
           
             this.enemy2.push(temp2);
            
          
       }
             
            
       

             this.Main();
        }        
        
        public Update(): void 
        {
            // setTimeout(() => {
            //     console.log("tesr 3 second");  
            //   },1000 );
        //     setTimeout(() => { alert('Hello') }, 2000);
        //    this.platform.Update();
        //    let smallestDistance:number=0;
            
        //   this._plane.Update();




         //this.Kill(this.check);
         this.check = false;
       
         this.master.Update();
         this.bullet.Update();
         this.enemy.forEach((en) => {
             en.Update();



             // managers.Collision.squaredRadiusCheck(this.master, en);
         });
         this.enemy2.forEach((en)=>{           
            en.Update();
          
                 
          
              // managers.Collision.squaredRadiusCheck(this.master, en);
           });
  



           if(this.bullet.x!=0 &&this.bullet.y!=1000){
            this.checkgun();
            }

         this.checkDamage();

         const moving = (e: KeyboardEvent) => {
             // PRESS LEFT ARROW
             if (e.keyCode == 37 ) {
                 if(this.bullet.position.y==this.master.position.y)
                 {this.bullet.position.x-=0.03;}
                 this.master.x-=0.03;
                 console.log("go left ");
             }
             // // PRESS UP ARROW
             // else if (e.keyCode == 38) {
             //     window.alert("Up Key Pressed");
             // }
             // PRESS RIGHT ARROW
             else if (e.keyCode == 39) {
                 if(this.bullet.position.y==this.master.position.y)
                 {this.bullet.position.x+=0.03;}
                 this.master.x+=0.03;
                 console.log("go right ");
                
                
             }
             // // PRESS DOWN ARROW
             // else if (e.keyCode == 40) {
             //     window.alert("Down Key Pressed");
             // }
             // PRESS SPACE BAR
            //  else if (e.keyCode == 32) {
            //      window.alert("Space Key Pressed");
            //  }
           




         };
        
             // this.bullet.start=true;
             const onClick = (e: MouseEvent) => {
                 
                if(this.bullet.position.y==1000 && this.bullet.position.x==0) {
                 let x = this.master.x - e.clientX;
                 let y = this.master.y - e.clientY;
                 let l = Math.sqrt(x * x + y * y);

                 // objects.Vector2.angle(new objects.Vector2(this.master.x,this.master.y),new objects.Vector2(this.master.x,this.master.y))
                 this.bullet.angle.x = x / l * -10;
                 this.bullet.angle.y = y / l * -10
                     ;

                 this.bullet.StartRun(new objects.Vector2(this.master.x,this.master.y));


                 }   


             };

             this.status.text = this.master.score + "/" + config.Game.FINISH_NUM2;

             if (this.bullet.start) {
                 console.log("turn to true");
             }

             window.addEventListener('click', onClick);
             window.addEventListener('keydown', moving);
         

         
        }
        checkgun(){
            this.enemy.forEach((en)=>{    
                if(managers.Collision.AABBCheck(this.bullet, en)){
                    en.Reset();
                    this.master.score+=1;
                    console.log("shoot small: "+this.master.score);
                    this.bullet.Reset();
                }
                 });      
                 this.enemy2.forEach((en)=>{    
                    if(managers.Collision.AABBCheck(this.bullet, en)){
                        en.Reset();
                        this.master.score+=2;
                        console.log("shoot big"+this.master.score);
                        this.bullet.Reset();
                    }
                     });     
                
                   
                
                   
                if (this.master.score>= config.Game.FINISH_NUM2)
                {
                    config.Game.SCENE = scenes.State.END;
                }
        
        }
        
        
        public Main(): void 
        {
            
            this.addChild(this.platform);

            

          //  this.addChild(this._plane);
           let i :number=1;
            for (const en of this.enemy) {
                setTimeout(() => {
                   
                  en.StartRun();
                    this.addChild(en);
                    console.log("enemy out");
                }, i*5000);
            i++;
            for (const en of this.enemy2) {
                setTimeout(() => {
                   
                  en.StartRun();
                    this.addChild(en);
                    console.log("enemy out");
                }, i*8000);
            i++;
            for (const en of this.enemy2) {
                setTimeout(() => {
                   
                  en.StartRun();
                    this.addChild(en);
                    console.log("enemy out");
                }, i*10000);
            i++;
            }
              
            }  
            this.addChild(this.master);
            this.addChild(this.bullet);
            this.addChild(this.status);
        }}
        private Kill(a:boolean):boolean {
            
            
            if(a){
            this.enemy.forEach(element => {
              if(element.y>400)
              {
                element.Reset();
                console.log("kill small");
               
                return false;
              }
          });
          this.enemy2.forEach(element => {
            if(element.y>400)
            {
              element.Reset();
              console.log("kill big");
             
              return false;
            }
        });
    }
          else
          { 
              
               return true;}
        
         
        
        
        }
        private checkDamage():void {
            console.log("Start Checking" );
            this.enemy.forEach((en)=>{    
                if(managers.Collision.AABBCheck(this.master, en)){
                    this.master.damage+=5;
                    console.log("damage :" +this.master.damage);
                    en.Reset();
                }
                 });      
                 this.enemy2.forEach((en)=>{    
                    if(managers.Collision.squaredRadiusCheck(this.master, en)){
                        this.master.damage+=10;
                        console.log("damage :" +this.master.damage);
                        en.Reset();
                    }
                     });      
                
                   
                   if (this.master.damage >= config.Game.DEATH_NUM)
                   {
                       config.Game.SCENE = scenes.State.END;
                   }
        }}
       
        
    }
