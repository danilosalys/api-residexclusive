const Customer = require("../models/CustomerModel");

module.exports = {
	getCustomerById: async (id) => {
		try {
			const customer = await Customer.findByPk(id);
			return customer;
		} catch (error) {
			throw new Error(
				`Erro ao obter o cliente no banco de dados: ${error.message}`
			);
		}
	},

	createCustomer: async (customerData) => {
		try {
			const newCustomer = await Customer.create(customerData);
			return newCustomer;
		} catch (error) {
			throw new Error(`Erro ao criar o cliente: ${error.message}`);
		}
	},

	updateCustomerById: async (customerId, updatedCustomerData) => {
		try {
			const existingCustomer = await Customer.findByPk(CustomerId);

			if (!existingCustomer) {
				throw new Error("Cliente não encontrado");
			}

			await Customer.update(updatedCustomerData, {
				where: { cus_id: customerId },
			});

			const updatedCustomer = await Customer.findByPk(customerId);
			return updatedCustomer;
		} catch (error) {
			throw new Error(`Erro ao atualizar o cliente: ${error.message}`);
		}
	},
};
