const { DataTypes } = require("sequelize");
const db = require("../database");
const Address = require("./AddressModel");

const Project = db.define(
	"Project",
	{
		prj_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		cus_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		add_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Address,
				key: "add_id",
			},
		},
		prj_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		prj_description: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		prj_start_date: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		prj_end_date: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		prj_status: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		prj_category: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		prj_area: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		prj_cno: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		prj_art: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		prj_technical_lead_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		prj_architect_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		prj_contract_value: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		usr_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		usr_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "project",
		timestamps: true,
		underscored: true,
	}
);

Project.belongsTo(Address, {
	foreignKey: "add_id",
	as: "address",
	constraints: false,
});

module.exports = Project;
