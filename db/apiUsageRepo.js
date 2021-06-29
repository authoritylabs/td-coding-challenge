import { apiUsageDb } from './_db.js';

// Required parameters:
// `userId` number
// `startDate` Date object
// `endDate` Date object
//
// Returns array of all ApiUsage records for the associated User where
// `createdAt` property is between the `startDate` and `endDate`
// inclusively.
function getApiUsages(userId, startDate, endDate) {
	const isAfterStart = (createdAt) => createdAt >= startDate;
	const isBeforeEnd = (createdAt) => createdAt <= endDate;

	return apiUsageDb.filter(({ userId: id, createdAt }) => {
		return id === userId && isAfterStart(createdAt) && isBeforeEnd(createdAt);
	})
}

export default { getApiUsages };
