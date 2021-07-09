import apiUsageRepo from './db/apiUsageRepo.js'
import createGetUser7DaysApiUsage from './core/userApiUsage.js'

const getUser7DaysApiUsage = createGetUser7DaysApiUsage(apiUsageRepo);
const user = { id: 77, name: 'M. Smith' }
const date = new Date('2021-07-01 03:30:00');

async function printUsages() {
	const result = await getUser7DaysApiUsage(user, date);
	console.info(result);
}

printUsages()
