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
    var Catsle = /** @class */ (function (_super) {
        __extends(Catsle, _super);
        // CONSTRUCTOR
        function Catsle() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("master"), 0, 0, true) || this;
            _this._damage = 0;
            _this._score = 0;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Catsle.prototype, "damage", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._damage;
            },
            set: function (newDamage) {
                this._damage = newDamage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Catsle.prototype, "score", {
            get: function () {
                return this._score;
            },
            set: function (newScore) {
                this._score = newScore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Catsle.prototype, "angle", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._angle;
            },
            set: function (newAngle) {
                this._angle = newAngle;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        Catsle.prototype._checkBounds = function () {
            this.x > 720 || this.x < 0;
            // left boundary
            if (this.x < 0) {
                this.position = new objects.Vector2(-2, this.position.y);
                console.log("left bound");
            }
            // right boundary
            if (this.x >= 720) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH + 2, this.position.y);
                console.log("right bound");
            }
        };
        Catsle.prototype._move = function () {
            var center_x = (this.x);
            var center_y = (this.y);
            var mouse_x = this.stage.mouseX;
            var mouse_y = this.stage.mouseY;
            var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
            this.angle = (radians * (180 / Math.PI) * -1) + 180;
            this.rotation = this.angle;
            // let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            // this.position = new Vector2(newPositionX, this._verticalPosition);
        };
        // PUBLIC METHODS
        Catsle.prototype.Start = function () {
            this.angle = 200;
            this.type = enums.GameObjectType.PLANE;
            this._verticalPosition = 880; // locked to the bottom of the screen
            this._horizonalPosition = 370;
            var engineSound = createjs.Sound.play("engine");
            engineSound.loop = -1; // loop forever
            engineSound.volume = 0.1; // 10% volume
            this.position = new objects.Vector2(this._horizonalPosition, this._verticalPosition);
            this.isCentered = true;
        };
        Catsle.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Catsle.prototype.Reset = function () {
        };
        return Catsle;
    }(objects.GameObject));
    objects.Catsle = Catsle;
})(objects || (objects = {}));
//# sourceMappingURL=castle.js.map