const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
	{
		type: { type: String, enum: ['Point'], default: 'Point', required: true },
		coordinates: {
			type: [
				{
					type: 'Number',
					min: -180,
					max: 180
				},
				{
					type: 'Number',
					min: -90,
					max: 90
				}
			],
			index: '2dsphere',
			required: true
		}
	},
	{ _id: false }
);

const propertySchema = new mongoose.Schema({
	name: { type: String, minlength: 10, maxlength: 45, required: true },
	// description: { type: String, minlength: 200, maxlength: 500, required: true },
	price: { type: Number, min: 1, required: true },
	location: locationSchema
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
