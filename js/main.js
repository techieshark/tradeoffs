
function setUpTangle () {

    var element = document.getElementById("scenario");

    var tangle = new Tangle(element, {
        initialize: function () {
            this.acres = 3.5;
            this.spaces_per_acre = 100; // units: car parking spaces

            this.parking_demand = 25; // max number of spaces needed. Based on observation.
            // editable (see update function):
            this.parking_coverage = 100; // % of site covered with parking
        },
        update: function () {
            this.parking_spaces = Math.floor((this.parking_coverage / 100) * this.acres * this.spaces_per_acre);
            this.empty_spaces = this.parking_spaces - this.parking_demand;


            if (this.empty_spaces < 0) {
                this.banana_merchants = Math.abs(this.empty_spaces);
                this.angry_mjs = "few";     
                console.log("But there may be as many as " + Math.abs(this.empty_spaces) + " angry neighbors.");
                this.empty_spaces = 0;
            }

            else
            {
              this.banana_merchants = "no";
               this.angry_mjs = this.parking_spaces;

            }

            /* Update the percentage of each image shown based on the parking_coverage % chosen by user. */
            /*
                | ----------------------------- 100 % ------------------------------- |
                | ------- parking_coverage% ---   |   ---------  Park Img  ---------- |
                | ------------------------------------------------------------------- |
            */
            var width = $("#img-slider .right img").width();
            var left = (this.parking_coverage/100 * width);
            $("#img-slider .right").css("clip", "rect(0, 1000px, 1000px, " + left + "px)"); /* top, right, bottom, left */

        }
    });
}
