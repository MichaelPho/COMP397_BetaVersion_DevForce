"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.check = true;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this.platform = new objects.platform();
            this.bullet = new objects.bullet();
            this.status = new objects.Label("0/" + config.Game.FINISH_NUM, "40px", "Consolas", "#FFFF00", config.Game.SCREEN_WIDTH / 2, 30, true);
            //  this._plane = new objects.Plane();
            this.enemy2 = new objects.enemy2();
            this.master = new objects.Catsle();
            // create the cloud array
            this.enemy = new Array(); // empty container
            var i = 1;
            var temp;
            // instantiating CLOUD_NUM clouds
            for (var index = 0; index < config.Game.ENEMY_NUM; index++) {
                temp = new objects.enemy();
                this.enemy.push(temp);
            }
            this.Main();
        };
        Play.prototype.Update = function () {
            // setTimeout(() => {
            //     console.log("tesr 3 second");  
            //   },1000 );
            //     setTimeout(() => { alert('Hello') }, 2000);
            //    this.platform.Update();
            //    let smallestDistance:number=0;
            var _this = this;
            //   this._plane.Update();
            //this.Kill(this.check);
            //changing
            this.check = false;
            this.master.Update();
            this.bullet.Update();
            this.enemy.forEach(function (en) {
                en.Update();
                // managers.Collision.squaredRadiusCheck(this.master, en);
            });
            this.checkgun();
            this.checkDamage();
            var onClick = function (e) {
                if (_this.bullet.position.y == _this.master.position.y) {
                    var x = _this.master.x + 630 - e.clientX;
                    var y = _this.master.y - e.clientY;
                    var l = Math.sqrt(x * x + y * y);
                    // objects.Vector2.angle(new objects.Vector2(this.master.x,this.master.y),new objects.Vector2(this.master.x,this.master.y))
                    _this.bullet.angle.x = x / l * -10;
                    _this.bullet.angle.y = y / l * -10;
                    _this.bullet.StartRun();
                }
            };
            this.status.text = this.master.score + "/" + config.Game.FINISH_NUM;
            window.addEventListener('click', onClick);
        };
        Play.prototype.checkgun = function () {
            var _this = this;
            this.enemy.forEach(function (en) {
                if (managers.Collision.AABBCheck(_this.bullet, en)) {
                    en.Reset();
                    _this.master.score += 1;
                    console.log("shoot small: " + _this.master.score);
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
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this.platform);
            this.addChild(this.enemy2);
            //  this.addChild(this._plane);
            var i = 1;
            var _loop_1 = function (en) {
                setTimeout(function () {
                    en.StartRun();
                    _this.addChild(en);
                    console.log("enemy out");
                }, i * 5000);
                i++;
            };
            for (var _i = 0, _a = this.enemy; _i < _a.length; _i++) {
                var en = _a[_i];
                _loop_1(en);
            }
            this.addChild(this.master);
            this.addChild(this.bullet);
            this.addChild(this.status);
        };
        Play.prototype.Kill = function (a) {
            if (a) {
                this.enemy.forEach(function (element) {
                    if (element.y > 400) {
                        element.Reset();
                        console.log("kill small");
                        return false;
                    }
                });
                if (this.enemy2.y > 400) {
                    this.enemy2.Reset();
                    console.log("kill big");
                    return false;
                }
            }
            else {
                return true;
            }
        };
        Play.prototype.checkDamage = function () {
            var _this = this;
            this.enemy.forEach(function (en) {
                if (managers.Collision.AABBCheck(_this.master, en)) {
                    _this.master.damage += 5;
                    console.log("damage :" + _this.master.damage);
                }
            });
            if (managers.Collision.AABBCheck(this.master, this.enemy2)) {
                this.master.damage += 10;
                console.log("damage :" + this.master.damage);
            }
            if (this.master.damage >= config.Game.DEATH_NUM) {
                config.Game.SCENE = scenes.State.END;
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map