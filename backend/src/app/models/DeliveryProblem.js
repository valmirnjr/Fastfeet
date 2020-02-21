import Sequelize, { Model } from "sequelize";

class DeliveryProblem extends Model {
  static init(sequelize) {
    super.init(
      {
        delivery_id: Sequelize.INTEGER,
        description: Sequelize.TEXT,
      },
      {
        sequelize,
        tableName: "deliveryProblems",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: "delivery_id", as: "delivery" });
  }
}

export default DeliveryProblem;
