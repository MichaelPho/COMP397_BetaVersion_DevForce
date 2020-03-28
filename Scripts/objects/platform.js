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
    var platform = /** @class */ (function (_super) {
        __extends(platform, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function platform(first) {
            if (first === void 0) { first = config.Game.ASSETS.getResult("platform"); }
            var _this = _super.call(this, first) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        platform.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        platform.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        platform.prototype.Start = function () {
            this.type = enums.GameObjectType.PLATFORM;
            this._verticalSpeed = 0; // 5 px per frame
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        platform.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        platform.prototype.Reset = function () {
            this.position = new objects.Vector2(0, 0);
        };
        return platform;
    }(objects.GameObject));
    objects.platform = platform;
})(objects || (objects = {}));
//# sourceMappingURL=platform.js.map