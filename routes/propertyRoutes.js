const router = require('express').Router();
const mongoose = require('mongoose');
const Property = require('../models/property.model');

router.get('/bounds', async (req, res) => {
	const geoBounds = {
		type: 'Polygon',
		coordinates: [
			[
				[41.8297, 18.4337921],
				[43.558743, 18.4337921],
				[43.558743, 20.352926],
				[41.8297, 18.4337921]
			]
		]
	};

	const properties = await Property.find({
		location: { $geoWithin: { $geometry: geoBounds } }
	});

	res.json(properties);
});

router.post('/new', async (req, res) => {
	const newProperty = new Property({
		name: 'Some Really Cool Name',
		price: 1800,
		location: {
			coordinates: [42.291149, 18.840296]
		}
	});

	await newProperty.save();

	res.send('success');
});

module.exports = router;
