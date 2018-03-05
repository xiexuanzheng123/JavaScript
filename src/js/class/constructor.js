class CoolGuy {
    specialTrick = 'nothing';

    CoolGuy(trick) {
        this.specialTrick = trick;
    }

    showOff() {
        console.log('Here is my trick: ' + this.specialTrick);
    }
}

var Joe = new CoolGuy('jumping rope');
Joe.showOff();