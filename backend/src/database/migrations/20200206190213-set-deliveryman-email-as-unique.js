module.exports = {
  up: queryInterface => {
    return queryInterface.addConstraint("deliverymen", ["email"], {
      type: "unique",
    });
  },

  down: queryInterface => {
    return queryInterface.removeConstraint("deliverymen", "unique", {
      column: "email",
    });
  },
};
