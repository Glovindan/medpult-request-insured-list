import React, { useEffect, useState } from 'react';
import CustomList from '../../../UIKit/CustomList/CustomList';
import { ItemData, ListColumnData } from '../../../UIKit/CustomList/CustomListTypes';
import { InsuredListData } from '../../shared/types';
import Scripts from '../../shared/utils/clientScripts';
import { insuredListContext } from '../../stores/InsuredListContext';
import icons from '../../../UIKit/shared/icons';
import TabButton from '../TabButton/TabButton';
import { redirectSPA } from '../../shared/utils/utils';

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
		new ListColumnData({ name: "", code: "moreButton", fr: 1, isSortable: false, isLink: true, onClick: (props) => { Scripts.openContractorById(props.info) } }),
	]

	/** Идентификаторы выбранных контрагентов */
	const [selectedContractorsIds, setSelectedContractorsIds] = useState<string[]>([]);
	useEffect(() => console.log(selectedContractorsIds), [selectedContractorsIds])

	const handleAddClick = async () => {
		// Открыть форму отбора застрахованных с множественным выбором
		const selectInsuredPage = Scripts.getSelectInsuredPageLink();
		const href = `${selectInsuredPage}?field_id=medpult-request-insured-list&select_multiple`
		redirectSPA(href)
	}

	const [reloadHandler, setReloadHandler] = useState<() => void>(() => { });

	/** Установка обработчика нажатия на поиск */
	const setSearchHandler = (callback: () => void) => {
		setReloadHandler(() => callback);
	};

	const handleRemoveClick = async () => {
		// Убрать пользователей из обращения
		await Scripts.removeInsured(selectedContractorsIds);
		setSelectedContractorsIds([])
		// Обновить список
		reloadHandler()
	}

	return (
		<div className="insured-list">
			<div className='insured-list__actions'>
				<TabButton svg={icons.Add} clickHandler={handleAddClick} title='добавить' />
				{Boolean(selectedContractorsIds.length) && <TabButton svg={icons.Delete} clickHandler={handleRemoveClick} title={`удалить: ${selectedContractorsIds.length}`} />}
			</div>
			<div className='insured-list__list'>
				<CustomList<undefined, InsuredListData>
					columnsSettings={columns}
					getDataHandler={Scripts.getInsuredList}
					isSelectable={true}
					isMultipleSelect={true}
					height='500px'
					listWidth={2000}
					setSelectedItems={(ids: string[]) => setSelectedContractorsIds(ids)}
					selectedItems={selectedContractorsIds}
					setSearchHandler={setSearchHandler}
				/>
			</div>
		</div>
	)
}