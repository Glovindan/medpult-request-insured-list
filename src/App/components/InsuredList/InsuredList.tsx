import React from 'react';
import Header from '../Header/Header';
import SelectTaskFiltersForm from '../SelectTaskFiltersForm/SelectTaskFiltersForm';
import SelectTaskList from '../SelectTaskList/SelectTaskList';

/** Список застрахованных */
export default function InsuredList() {

	return (
		<div className="select-task-form">
			<div className="select-task-form__header">
				<Header clickFilterHandler={toggleShowFilters} elementsCount={data.elementsCount} title='Форма отбора задач' />
			</div>
			<div className="select-task-form__content" ref={contentWrapperRef}>
				<div className={`select-task-form__filters${!isShowFilters ? " select-task-form__filters_hidden" : ""}`}>
					<SelectTaskFiltersForm />
				</div>
				<div className="select-task-form__list">
					<div>
						<SelectTaskList width={listWidth} />
					</div>
				</div>
			</div>
		</div>
	)
}