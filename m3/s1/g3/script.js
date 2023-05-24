/*
da 0 a 15.000 euro: aliquota del 23%
da 15.001 a 28.000 euro: aliquota del 25%
da 28.001 a 50.000 euro: aliquota del 35%
oltre 50.001 euro: aliquota del 43%
sui primi 15.000 euro (corrispondenti al primo scaglione di reddito) applicherò l’aliquota del 23%. Otterrò quindi 3.450 euro;
sui restanti 10.000 euro (25.000 euro – 15.000 euro) applicherò l’aliquota del 25%, cioè quella relativa al secondo scaglione. Otterrò 2.500 euro;
l’IRPEF lorda ammonterà a 5.950 euro (3.450 euro + 2.500 euro).
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LavoratoreTasseApplicate = /** @class */ (function () {
    function LavoratoreTasseApplicate(redditoannuolordo, codredd, tasseinps, tasseirpef) {
        this.redditoannuolordo = redditoannuolordo;
        this.codredd = this.getUtileTasse();
        this.tasseinps = this.getTasselnps();
        this.tasseirpef = this.getTasselrpef();
    }
    return LavoratoreTasseApplicate;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(redditoannuolordo, codredd, tasseinps, tasseirpef, redditoNetto) {
        if (codredd === void 0) { codredd = 0; }
        if (tasseinps === void 0) { tasseinps = 0; }
        if (tasseirpef === void 0) { tasseirpef = 0; }
        if (redditoNetto === void 0) { redditoNetto = ''; }
        var _this = _super.call(this, redditoannuolordo, codredd, tasseinps, tasseirpef) || this;
        _this.redditoNetto = "Il reddito netto del lavoratore \u00E8 ".concat(_this.getRedditoAnnuoNetto(), "\u20AC");
        return _this;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        var coefficienteRedditivita = [40, 54, 62, 67, 78, 86];
        var randomPick = Math.floor(Math.random() * coefficienteRedditivita.length);
        return (this.redditoannuolordo / 100) * coefficienteRedditivita[randomPick];
    };
    Lavoratore.prototype.getTasselnps = function () {
        var aliquotaINPS = 0.09;
        var tassazioneINPS = this.codredd * aliquotaINPS;
        console.log("🚀 ~ file: script.ts:54 ~ Lavoratore ~ getTasselnps ~ tassazioneINPS:", tassazioneINPS);
        return tassazioneINPS;
    };
    Lavoratore.prototype.getTasselrpef = function () {
        var aliquoteIRPEF = [0.23, 0.25, 0.35];
        var soglieReddito = [15000, 28000, 50000];
        var tassazioneIRPEF = 0;
        for (var i = 0; i < aliquoteIRPEF.length; i++) {
            if (this.codredd <= soglieReddito[i]) {
                tassazioneIRPEF += this.codredd * aliquoteIRPEF[i];
                break;
            }
            else {
                var redditoTranche = soglieReddito[i + 1] - soglieReddito[i];
                tassazioneIRPEF += redditoTranche * aliquoteIRPEF[i];
            }
        }
        console.log("🚀 ~ file: script.ts:71 ~ Lavoratore ~ getTasselrpef ~ tassazioneIRPEF:", tassazioneIRPEF);
        return tassazioneIRPEF;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        var utile = this.redditoannuolordo - this.tasseinps - this.tasseirpef;
        console.log("🚀 ~ file: script.ts:73 ~ Lavoratore ~ getRedditoAnnuoNetto ~ utile:", utile);
        return utile;
    };
    return Lavoratore;
}(LavoratoreTasseApplicate));
var marioRossi = new Lavoratore(10000);
console.log("🚀 ~ file: script.ts:78 ~ marioRossi:", marioRossi);
