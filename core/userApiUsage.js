function createRange(size) {
	return [...Array.from({ length: size }).keys()];
}

function getUsageLookupDates(date) {
	const endDate = new Date(date)
	endDate.setUTCHours(0, 0, 0, 0);

	const startDate = new Date(endDate)
	startDate.setUTCDate(startDate.getUTCDate() - 6)

	return { startDate, endDate };
}

function isMatchingUsageDate({ createdAt }, date) {
	const usageDate = new Date(createdAt).setUTCHours(0, 0, 0, 0);

	return usageDate === date;
}

export default function createGetUserApiUsageLast7Days(apiUsageRepo) {
	return ({ id: userId }, referenceDate) => {
		const { startDate, endDate } = getUsageLookupDates(referenceDate);

		const usages = apiUsageRepo.getApiUsages(userId, startDate, endDate);

		return createRange(7)
			.map((daysAgo) => {
				const currentDate = new Date(endDate).setDate(endDate.getDate() - daysAgo);
				const findUsage = (usage) => isMatchingUsageDate(usage, currentDate);
				const { gets, posts } = usages.find(findUsage) || { gets: 0, posts: 0 };

				return { daysAgo, gets, posts };
			})
	}
}
