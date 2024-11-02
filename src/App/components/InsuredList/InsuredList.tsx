import React, { useEffect } from 'react';
import CustomList from '../../../UIKit/CustomList/CustomList';
import { ItemData, ListColumnData } from '../../../UIKit/CustomList/CustomListTypes';
import { InsuredListData } from '../../shared/types';
import Scripts from '../../shared/utils/clientScripts';
import { insuredListContext } from '../../stores/InsuredListContext';

/** Список застрахованных */
export default function InsuredList() {
	// const { data, setValue } = insuredListContext.useContext();

	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: "ФИО застрахованного", code: "fullname", fr: 1, isSortable: true, isLink: false }),
		new ListColumnData({ name: "Дата рождения", code: "birthdate", fr: 1, isSortable: true, isLink: false }),
		new ListColumnData({ name: "Телефон", code: "phone", fr: 1, isSortable: true, isLink: false }),
		new ListColumnData({ name: "Email", code: "email", fr: 1, isSortable: true, isLink: false }),
		new ListColumnData({ name: "Полис", code: "policy", fr: 1, isSortable: true, isLink: false }),
		new ListColumnData({ name: "Дата начала действия полиса", code: "policyStartDate", fr: 1, isSortable: true, isLink: false }),
		new ListColumnData({ name: "Дата окончания действия полиса", code: "policyEndDate", fr: 1, isSortable: true, isLink: false }),
		new ListColumnData({ name: "Срок действия полиса", code: "policyTerm", fr: 1, isSortable: true, isLink: false }),
		new ListColumnData({ name: "Регион действия полиса", code: "policyRegion", fr: 1, isSortable: true, isLink: false }),
		new ListColumnData({ name: "Продукт", code: "policyProduct", fr: 1, isSortable: true, isLink: false }),
		new ListColumnData({ name: "План страхования", code: "plan", fr: 1, isSortable: true, isLink: false }),
		new ListColumnData({ name: "", code: "moreButton", fr: 1, isSortable: false, isLink: true, onClick: (props) => { console.log(props) } }),
	]

	return (
		<div className="select-task-list">
			<CustomList<undefined, InsuredListData> columnsSettings={columns} getDataHandler={Scripts.getInsuredList} isSelectable={true} isMultipleSelect={false} height='70vh' listWidth={2000} />
		</div>
	)
}