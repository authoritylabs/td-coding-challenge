import createGetUserApiUsage from '../core/userApiUsage.js'

const apiUsageMockRepo = {
	getApiUsages: async (id, start, end) => {
		return [
			{ userId: 42, gets: 250, posts: 250, createdAt: new Date('2020-01-26') },
			{ userId: 42, gets: 500, posts: 500000, createdAt: new Date('2020-01-28') },
			{ userId: 42, gets: 0, posts: 200, createdAt: new Date('2020-01-31') },
			{ userId: 37, gets: 10, posts: 0, createdAt: new Date('2020-01-31') },
			{ userId: 42, gets: 300, posts: 0, createdAt: new Date('2020-02-01') },
			{ userId: 42, gets: 50, posts: 50, createdAt: new Date('2020-02-02') },
			{ userId: 24, gets: 500, posts: 350, createdAt: new Date('2020-02-02') },
			{ userId: 42, gets: 10, posts: 150, createdAt: new Date('2020-02-03') },
		].filter(({ userId, createdAt }) => userId === id && createdAt >= start && createdAt <= end);
	}
}

const getUserApiUsage = createGetUserApiUsage(apiUsageMockRepo)

test('should return 7 items with 0 gets and 0 posts for previous 7 days if no ApiUsage records are found for user', async () => {
	const user = { id: 10 };
	const dateReference = new Date('2020-01-31');

	const expected = [
		{ daysAgo: 0, gets: 0, posts: 0 },
		{ daysAgo: 1, gets: 0, posts: 0 },
		{ daysAgo: 2, gets: 0, posts: 0 },
		{ daysAgo: 3, gets: 0, posts: 0 },
		{ daysAgo: 4, gets: 0, posts: 0 },
		{ daysAgo: 5, gets: 0, posts: 0 },
		{ daysAgo: 6, gets: 0, posts: 0 },
	];

	const actual = await getUserApiUsage(user, dateReference);
	expect(actual).toEqual(expected);
})

test('should return 7 items with the expected number of gets and posts for the days with matching records', async () => {
	const user = { id: 42 };
	const dateReference = new Date('2020-02-02');

	const expected = [
		{ daysAgo: 0, gets: 50, posts: 50 },
		{ daysAgo: 1, gets: 300, posts: 0 },
		{ daysAgo: 2, gets: 0, posts: 200 },
		{ daysAgo: 3, gets: 0, posts: 0 },
		{ daysAgo: 4, gets: 0, posts: 0 },
		{ daysAgo: 5, gets: 500, posts: 500000 },
		{ daysAgo: 6, gets: 0, posts: 0 },
	];

	const actual = await getUserApiUsage(user, dateReference);
	expect(actual).toEqual(expected);
})
