import {
	FetchData,
	ItemData,
	ItemDataString,
	SortData,
} from '../../../UIKit/CustomList/CustomListTypes'
import { ObjectItem } from '../../../UIKit/Filters/FiltersTypes'
import { FetchInputData } from '../../../UIKit/shared/types/types'
import { SelectTaskFilters } from '../../stores/SelectTaskContext'
import { SelectTaskData } from '../types'

/** Заглушка ожидания ответа сервера */
function randomDelay() {
	const delay = Math.random() * 1000
	return new Promise((resolve) => {
		setTimeout(resolve, delay)
	})
}

/** Получение списка задач */
async function getTasks(
	page: number,
	sortData?: SortData,
	searchData?: SelectTaskFilters
): Promise<FetchData<SelectTaskData>> {
	await randomDelay()

	console.log({
		page,
		sortData,
		searchData,
	})

	const mockData = {
		number: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		status: new ItemData({ value: 'В работе', info: 'test' }),
		type: new ItemData({ value: 'Медицинское', info: 'test' }),
		sort: new ItemData({ value: 'Запись к врачу', info: 'test' }),
		createdAt: new ItemDataString('06.12.2023 12:22'),
		controledAt: new ItemDataString('06.12.2023 12:22'),
		author: new ItemData({ value: 'Юрасов Сергей Олегович', info: 'test' }),
		executor: new ItemData({ value: 'Юрасов Сергей Олегович', info: 'test' }),
		request: new ItemData({ value: 'RQ00000025/23', info: 'test' }),
	}
	return {
		items: Array(20)
			.fill(0)
			.map((data, index) => {
				return {
					id: String(index),
					data: new SelectTaskData(mockData),
				}
			}),
		hasMore: true,
	}
}

/** Получение количества задач по фильтрам */
async function getTasksCount(searchData?: SelectTaskFilters): Promise<number> {
	return 1235
}

/** Получение статусов задач */
async function getStatuses(): Promise<ObjectItem[]> {
	await randomDelay()

	/** Статусы */
	const statuses: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'В очереди' }),
		new ObjectItem({ code: 'test1', value: 'В работе' }),
		new ObjectItem({ code: 'test2', value: 'Контроль' }),
		new ObjectItem({ code: 'test3', value: 'Отложено' }),
		new ObjectItem({ code: 'test4', value: 'Выполнено' }),
	]

	return statuses
}

/** Получение типов задач */
async function getTypes(): Promise<ObjectItem[]> {
	await randomDelay()

	/** Статусы */
	const types: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'Информационное' }),
		new ObjectItem({ code: 'test1', value: 'Негативное' }),
		new ObjectItem({ code: 'test2', value: 'Медицинское' }),
		new ObjectItem({ code: 'test3', value: 'Администрирование' }),
		new ObjectItem({ code: 'test4', value: 'Прочее' }),
	]

	return types
}

/** Получение видов задач */
async function getSorts(): Promise<ObjectItem[]> {
	await randomDelay()

	/** Статусы */
	const sorts: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'Согласование услуг' }),
		new ObjectItem({ code: 'test1', value: 'Запись к врачу' }),
		new ObjectItem({ code: 'test2', value: 'Помощь на дому' }),
		new ObjectItem({ code: 'test3', value: 'Скорая медицинская помощь' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
	]

	return sorts
}

/** Получение пользователей */
async function getUsers(page: number, query?: string | undefined): Promise<FetchInputData> {
	await randomDelay()

	/** Статусы */
	const sorts: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'Согласование услуг' }),
		new ObjectItem({ code: 'test1', value: 'Запись к врачу' }),
		new ObjectItem({ code: 'test2', value: 'Помощь на дому' }),
		new ObjectItem({ code: 'test3', value: 'Скорая медицинская помощь' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
	]

	return {
		items: sorts,
		hasMore: true,
	}
}

/** Получение групп пользователей */
async function getUserGroups(page: number, query?: string | undefined): Promise<FetchInputData> {
	await randomDelay()

	/** Статусы */
	const sorts: ObjectItem[] = [
		new ObjectItem({ code: 'test', value: 'Согласование услуг' }),
		new ObjectItem({ code: 'test1', value: 'Запись к врачу' }),
		new ObjectItem({ code: 'test2', value: 'Помощь на дому' }),
		new ObjectItem({ code: 'test3', value: 'Скорая медицинская помощь' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
		new ObjectItem({ code: 'test4', value: 'Госпитализация ' }),
	]

	return {
		items: sorts,
		hasMore: true,
	}
}

/** Получение id обращения по id задачи */
async function getRequestIdByTaskId(taskId: string): Promise<string> {
	return 'test'
}

/** Получение ссылки для перехода на страницу обращения */
async function getRequestLink(): Promise<string> {
	return '#test'
}

/** Уровни доступа */
enum AccessLevel {
	/** Нет доступа, даже не видим */
	noAccess = 0,
	/** Только видим, не можем писать или менять */
	readOnly = 1,
	/** Видим, читаем и можем писать или нажимать на кнопку/ссылку */
	writeRead = 2,
}

/** Настройки доступа формы отбора задач */
interface ISelectTaskAccessSettings {
	searchButton: AccessLevel
	appendResponsible: AccessLevel
}

/** Получить настройки доступа формы отбора задач */
function getSelectTaskAccessSettings(): ISelectTaskAccessSettings {
	return {
		'searchButton': 2,
		'appendResponsible': 2,
	}
}

/** Получить ссылку формы отбора обращений */
function getSelectRequestLink(): string {
	return '#selectRequestTest'
}

/** Получить ссылку формы отбора застрахованных */
function getSelectInsuredLink(): string {
	return '#selectRequestTest'
}

export default {
	getTasks,
	getTasksCount,
	getStatuses,
	getTypes,
	getSorts,
	getUsers,
	getUserGroups,
	getRequestIdByTaskId,
	getRequestLink,
	getSelectTaskAccessSettings,

	getSelectRequestLink,
	getSelectInsuredLink,
}
