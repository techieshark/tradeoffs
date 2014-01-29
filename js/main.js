
function setUpTangle () {

    var element = document.getElementById("scenario");

    var tangle = new Tangle(element, {
        initialize: function () {
            this.acres = 3.5;
            this.spaces_per_acre = 100; // units: car parking spaces

            this.parking_demand = 25; // max number of spaces needed. Based on observation.

            // editable (see update function):
            this.parking_coverage = 25; // % of site covered with parking
        },
        update: function () {
            this.parking_spaces = Math.floor((this.parking_coverage / 100) * this.acres * this.spaces_per_acre);
            this.empty_spaces = this.parking_spaces - this.parking_demand;

            if (this.empty_spaces < 0) {
                console.log("But there may be as many as ".concat(Math.abs(this.empty_spaces)).concat(" angry neighbors."));
                this.empty_spaces = 0;
            }
        }
    });
}
