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
    var Level = /** @class */ (function (_super) {
        __extends(Level, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Level() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Level.prototype.Start = function () {
            //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Choose level", "80px", "Consolas", "#FFFF00", 370, 180, true);
            // buttons
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("level1pic"), 370, 400, true);
            this._startButton2 = new objects.Button(config.Game.ASSETS.getResult("level2pic"), 370, 530, true);
            this._startButton3 = new objects.Button(config.Game.ASSETS.getResult("level3pic"), 370, 660, true);
            //this._startButton3 = new objects.Button(config.Game.ASSETS.getResult("bosslevel"), 370, 790, true);
            this._ocean = new objects.background(config.Game.ASSETS.getResult("levelbackground"));
            this.Main();
        };
        Level.prototype.Update = function () {
            this._ocean.Update();
        };
        Level.prototype.Main = function () {
            this.addChild(this._ocean);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._startButton2);
            this.addChild(this._startButton3);
            this._startButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
            this._startButton2.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY2;
            });
            this._startButton3.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY3;
            });
        };
        return Level;
    }(objects.Scene));
    scenes.Level = Level;
})(scenes || (scenes = {}));
//# sourceMappingURL=Level.js.map