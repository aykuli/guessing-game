class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.round((this.max - this.min) / 2 + this.min);
    }

    lower() {
        this.max = this.guess();
        return Math.round((this.max - this.min) / 2 + this.min);
    }

    greater() {
        this.min = this.guess();
        return Math.round((this.max - this.min) / 2 + this.min);
    }
}

module.exports = GuessingGame;
