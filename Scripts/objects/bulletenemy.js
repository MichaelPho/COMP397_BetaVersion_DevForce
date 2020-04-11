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
var objects;
(function (objects) {
    var bulletenemy = /** @class */ (function (_super) {
        __extends(bulletenemy, _super);
        // CONSTRUCTOR
        function bulletenemy() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("bullet"), new objects.Vector2(0, 0), true) || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(bulletenemy.prototype, "start", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._start;
            },
            set: function (value) {
                this._start = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(bulletenemy.prototype, "angle", {
            get: function () {
                return this.vector;
            },
            set: function (newAngle) {
                this.vector = newAngle;
            },
            enumerable: true,
            configurable: true
        });
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
        bulletenemy.prototype._checkBounds = function () {
            if (this.y > 1000 || this.x > 720 || this.x < 0) {
                // console.log("changed x: "+position.x +" y: "+position.y);
                this.Reset();
            }
        };
        bulletenemy.prototype.CheckBounds = function () {
            if (this.y < 400 || this.y > 1000 || this.x > 720 || this.x < 0) {
                console.log("changed x: " + this.x + " y: " + this.y);
                return true;
            }
            return false;
        };
        bulletenemy.prototype._move = function () {
            //  this.position = Vector2.add(this.position, this.velocity);
            this.position = objects.Vector2.add(this.position, this.angle);
        };
        bulletenemy.prototype.StartRun = function (position) {
            if (position === void 0) { position = new objects.Vector2(370, 880); }
            this.position = position;
            this._verticalSpeed = 2;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            console.log("start run");
        };
        // PUBLIC METHODS
        bulletenemy.prototype.Start = function () {
            // curve bullet
            this.position = new objects.Vector2(0, 0);
            //initializa
            this.type = enums.GameObjectType.ENEMY;
            // let it stop if needed
            this.angle = new objects.Vector2(0, 0);
            this._verticalSpeed = 0;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        bulletenemy.prototype.Update = function (position) {
            if (position === void 0) { position = new objects.Vector2(0, 0); }
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this._move();
            this._checkBounds();
        };
        bulletenemy.prototype.Reset = function () {
            this._verticalSpeed = 0;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.angle = new objects.Vector2(0, 0);
            //let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            //  let randomY = util.Mathf.RandomRange(-this.height * 3, -this.height);
            this.position = new objects.Vector2(0, 0);
        };
        return bulletenemy;
    }(objects.GameObject));
    objects.bulletenemy = bulletenemy;
})(objects || (objects = {}));
//# sourceMappingURL=bulletenemy.js.map