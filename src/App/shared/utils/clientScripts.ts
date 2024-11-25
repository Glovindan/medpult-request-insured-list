import { FetchData, ItemData, SortData } from '../../../UIKit/CustomList/CustomListTypes'
import { InsuredListData } from '../types'
/** Заглушка ожидания ответа сервера */
function randomDelay() {
	const delay = Math.random() * 1000
	return new Promise((resolve) => {
		setTimeout(resolve, delay)
	})
}

/** Получение списка задач */
async function getInsuredList(
	page: number,
	sortData?: SortData
): Promise<FetchData<InsuredListData>> {
	await randomDelay()

	console.log({
		page,
		sortData,
	})

	const mockData: InsuredListData = {
		fullname: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		birthdate: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		phone: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		email: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policy: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyStartDate: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyEndDate: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyTerm: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyRegion: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyProduct: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		plan: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		moreButton: new ItemData({ value: 'Подробнее', info: 'test' }),
	}

	return {
		items: Array(20)
			.fill(0)
			.map((data, index) => {
				return {
					id: String(index),
					data: new InsuredListData(mockData),
				}
			}),
		hasMore: true,
	}
}

/** Удалить застрахованных из списка */
async function removeInsured(contractorsIds: string[]) {
	// TODO
}

/** Получить путь к форме отбора застрахованных */
function getSelectInsuredPageLink(): string {
	// TODO
	return '#test'
}

export default {
	getInsuredList,
	removeInsured,
	getSelectInsuredPageLink,
}
