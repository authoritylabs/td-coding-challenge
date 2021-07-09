// THIS IS A STATIC REPRESENTATION OF DB RECORDS RETURNED BY ORM.
// DO NOT MAKE CHANGES TO THIS FILE

function createRecord(userId, getRateInCents, postRateInCents) {
	return { userId, getRateInCents, postRateInCents };
}

const userRatesTable = [
	createRecord(3, 100, 100),
	createRecord(18, 20, 500),
	createRecord(27, 20, 550),
	createRecord(37, 150, 250),
	createRecord(42, 25, 300),
	createRecord(71, 40, 60),
	createRecord(76, 20, 100),
	createRecord(77, 50, 200),
	createRecord(78, 30, 150),
	createRecord(99, 24, 76),
	createRecord(103, 15, 50),
	createRecord(123, 0, 1000),
	createRecord(309, 60, 240),
].map(createRecord);

export { userRatesTable };
