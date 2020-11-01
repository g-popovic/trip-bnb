const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Property = require('../models/property.model');

router.get('/register', async (req, res) => {
	const newProperty = new Property({
		name: 'Amazing apartmend',
		price: 3500,
		location: {
			coordinates: [-35.231, 42.6341]
		}
	});

	try {
		await newProperty.save();
		res.send('saved');
	} catch (err) {
		res.send(err);
	}
});

router.get('/test', async (req, res) => {
	res.send(
		await Property.find({
			location: {
				$nearSphere: {
					$maxDistance: 100000,
					$geometry: { type: 'Point', coordinates: [-35.2, 42.6] }
				}
			}
		})
	);
});

module.exports = router;
