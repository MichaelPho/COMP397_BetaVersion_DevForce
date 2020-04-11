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
    var background = /** @class */ (function (_super) {
        __extends(background, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function background(img) {
            if (img === void 0) { img = config.Game.ASSETS.getResult("background"); }
            var _this = _super.call(this, img) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        background.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        background.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        background.prototype.Start = function () {
            this.type = enums.GameObjectType.PLATFORM;
            this._verticalSpeed = 0; // 5 px per frame
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        background.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        background.prototype.Reset = function () {
            this.position = new objects.Vector2(0, 0);
        };
        return background;
    }(objects.GameObject));
    objects.background = background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map