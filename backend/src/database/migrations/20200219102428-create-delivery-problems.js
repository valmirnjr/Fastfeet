module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("deliveryProblems", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      delivery_id: {
        type: Sequelize.INTEGER,
        references: { model: "deliveries", key: "id" },
        allowNull: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("deliveryProblems");
  },
};
