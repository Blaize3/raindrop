/*eslint-disable*/
import rainDrop from "../src/app.js";
import chai from "chai";


describe("raindrop", () => {

    // Handle valid input
    describe("handle valid inputs", () => {
        it("should return Plong", () => {
            chai.assert.equal(rainDrop.stringProcessor(28), "Plong");
        });

        it("should return PlingPlang", () => {
            chai.assert.equal(rainDrop.stringProcessor(1755), "PlingPlang");
        });

        it("should return 2", () => {
            chai.assert.equal(rainDrop.stringProcessor(2), "2");
        });

        it("should return PlangPlong", () => {
            chai.assert.equal(rainDrop.stringProcessor(35), "PlangPlong");
        });

        it("should return Plang", () => {
            chai.assert.equal(rainDrop.stringProcessor(5), "Plang");
        });

        it("should return Pling", () => {
            chai.assert.equal(rainDrop.stringProcessor(9), "Pling");
        });

    });

    describe("handle invalid inputs", () => {
        it("should return 'sorry, not a number'", () => {
            chai.assert.equal(rainDrop.stringProcessor("r"), "sorry, not a number");
        });
        it("should return Pling 'sorry, not a number'", () => {
            chai.assert.equal(rainDrop.stringProcessor(null), "sorry, not a number");
        });
        it("should return Pling 'sorry, not a number'", () => {
            chai.assert.equal(rainDrop.stringProcessor(undefined), "sorry, not a number");
        });
        it("should return Pling 'sorry, not a number'", () => {
            chai.assert.equal(rainDrop.stringProcessor({}), "sorry, not a number");
        });
        it("should return Pling 'sorry, not a number'", () => {
            chai.assert.equal(rainDrop.stringProcessor([]), "sorry, not a number");
        });
        it("should return Pling 'sorry, not a number'", () => {
            chai.assert.equal(rainDrop.stringProcessor(true), "sorry, not a number");
        });
    });
});