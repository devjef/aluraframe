'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mensagem = function () {

    // constructor(texto='') {
    function Mensagem(texto) {
        _classCallCheck(this, Mensagem);

        this._texto = texto || '';
    }

    _createClass(Mensagem, [{
        key: 'texto',
        get: function get() {

            return this._texto;
        },
        set: function set(texto) {

            this._texto = texto;
        }
    }]);

    return Mensagem;
}();
//# sourceMappingURL=Mensagem.js.map