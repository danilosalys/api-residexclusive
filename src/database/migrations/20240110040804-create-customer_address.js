"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("customer_address", {
			cua_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			cua_description: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			cus_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "customer",
					key: "cus_id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			},
			add_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "address",
					key: "add_id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			},
			usr_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			usr_name: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal(
					"CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
				),
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("customer_address");
	},
};
