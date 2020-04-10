"use strict";
var scenes;
(function (scenes) {
    var State;
    (function (State) {
        State[State["NO_SCENE"] = -1] = "NO_SCENE";
        State[State["START"] = 0] = "START";
        State[State["PLAY"] = 1] = "PLAY";
        State[State["END"] = 2] = "END";
        State[State["PLAY2"] = 3] = "PLAY2";
        State[State["PLAY3"] = 4] = "PLAY3";
        State[State["BOSS"] = 5] = "BOSS";
        State[State["NUM_OF_SCENES"] = 6] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map