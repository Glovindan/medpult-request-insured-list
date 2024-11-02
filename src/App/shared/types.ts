import { ItemData, ItemDataString } from '../../UIKit/CustomList/CustomListTypes'

export interface IInputData<DataType = any> {
	value: string
	data?: DataType
}

export class SelectTaskData {
	// Номер задачи - строчька
	number?: ItemData
	// Статус задачи - флажки
	status?: ItemData
	// Тип задачи - флажки
	type?: ItemData
	// Вид задачи - поиск по названию
	sort?: ItemData
	// Дата создания - дата с по
	createdAt?: ItemDataString
	// Дата контроля - дата с по
	controledAt?: ItemDataString
	// Автор - поиск по названию
	author?: ItemData
	// Исполнитель - поиск по названию
	executor?: ItemData
	// Обращение - формы отбора
	request?: ItemData
	// Застрахованный - формы отбора
	insured?: ItemData

	constructor({
		number,
		status,
		type,
		sort,
		createdAt,
		controledAt,
		author,
		executor,
		request,
		insured,
	}: SelectTaskData) {
		this.number = number
		this.status = status
		this.type = type
		this.sort = sort
		this.createdAt = createdAt
		this.controledAt = controledAt
		this.author = author
		this.executor = executor
		this.request = request
		this.insured = insured
	}
}
