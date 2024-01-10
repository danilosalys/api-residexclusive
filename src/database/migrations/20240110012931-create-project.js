"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return await queryInterface.createTable("project", {
			prj_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			cus_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			add_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: "address",
					key: "add_id",
				},
			},
			prj_name: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			prj_description: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			prj_start_date: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			prj_end_date: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			prj_status: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			prj_category: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			prj_area: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			prj_cno: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			prj_art: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			prj_technical_lead_name: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			prj_architect_name: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			prj_contract_value: {
				type: Sequelize.INTEGER,
				allowNull: true,
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
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		return await queryInterface.dropTable("project");
	},
};