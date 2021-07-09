import { apiUsagesTable } from './mockDbTables/apiUsagesTable.js';

// Required parameters:
// `userId` number
// `startDate` Date object
// `endDate` Date object
//
// Returns array of all ApiUsage records for the associated User where
// `createdAt` property is between the `startDate` and `endDate`
// inclusively.
async function getApiUsages(userId, startDate, endDate) {
	const isAfterStart = (date) => date >= startDate;
	const isBeforeEnd = (date) => date <= endDate;

	return apiUsagesTable.filter(({ userId: id, createdAt }) => {
		return id === userId && isAfterStart(createdAt) && isBeforeEnd(createdAt);
	})
}

export default { getApiUsages };
