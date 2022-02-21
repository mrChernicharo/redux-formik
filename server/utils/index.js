// prettier-ignore
const generateAvailabilityTable = () => {
	const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ]
	const timeSlots = {};
	let minutes = 0;
	let hour = '';
	while (minutes < (60 * 24)) {
		hour = `${Math.floor(minutes / 60)}:${minutes % 60 === 0 ? '00' : '30'}`

		timeSlots[hour] = {
			status:  minutes >= 360 && minutes <= 1290 ? 'OPEN' : 'BLOCKED',
			appointment: null,
			minutes,
		}

		minutes += 30
	}

	const availabilityTable = new Map()
	weekdays.forEach(day => availabilityTable.set(day, timeSlots))

	return availabilityTable
}
export const DEFAULT_AVAILABILITY = generateAvailabilityTable();
