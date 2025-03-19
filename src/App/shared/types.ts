import { ItemData, ItemDataString } from '../../UIKit/CustomList/CustomListTypes'

export interface IInputData<DataType = any> {
	value: string
	data?: DataType
}

export class InsuredListData {
	/** ФИО застрахованного */
	fullname?: ItemData
	/** Дата рождения */
	birthdate?: ItemData
	/** Телефон */
	phone?: ItemData
	/** Email */
	email?: ItemData
	/** Полис */
	policy?: ItemData
	/** Дата начала действия полиса */
	policyStartDate?: ItemData
	/** Дата окончания действия полиса */
	policyEndDate?: ItemData
	/** Срок действия полиса */
	//policyTerm?: ItemData
	/** Регион действия полиса */
	policyRegion?: ItemData
	/** Продукт */
	policyProduct?: ItemData
	/** План страхования */
	plan?: ItemData
	/** Кнопка Подробнее, при нажатии на которую происходит переход на форму данного Контрагента (по аналогии с кнопкой Подробнее в текущей реализации) */
	moreButton?: ItemData

	constructor({
		fullname,
		birthdate,
		phone,
		email,
		policy,
		policyStartDate,
		policyEndDate,
		//policyTerm,
		policyRegion,
		policyProduct,
		plan,
		moreButton,
	}: InsuredListData) {
		this.fullname = fullname
		this.birthdate = birthdate
		this.phone = phone
		this.email = email
		this.policy = policy
		this.policyStartDate = policyStartDate
		this.policyEndDate = policyEndDate
		//this.policyTerm = policyTerm
		this.policyRegion = policyRegion
		this.policyProduct = policyProduct
		this.plan = plan
		this.moreButton = moreButton
	}
}
