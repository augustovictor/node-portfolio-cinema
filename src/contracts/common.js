class CommonContract {
    constructor() {
        this._errors = [];
    }

    isRequired(val, message) {
        if (!val || val.length <= 0) {
            this._errors.push({ message });
        }
    }

    clear() {
        this._errors = [];
    }

    errors() {
        return this._errors;
    }

    isValid() {
        return this.errors().length === 0;
    }
}

module.exports = CommonContract;
