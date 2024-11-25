import React, { useEffect, useReducer, useRef, useState } from 'react'
import Loader from '../../../UIKit/Loader/Loader';

type TabButtonProps = {
	svg: any,
	title: string
	clickHandler?: any
}

function TabButton(props: TabButtonProps) {
	const { svg, clickHandler, title } = props;

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleButtonClick = async () => {
		setIsLoading(true)
		await clickHandler()
		setIsLoading(false)
	}

	return (
		<>
			{!isLoading
				? (
					<button
						className='tab-button'
						onClick={handleButtonClick}
					>
						<div className='tab-button__icon'>
							{svg}
						</div>
						<div className='tab-button__title'>
							{title}
						</div>
					</button>
				)
				: (
					<div className='tab-button__loader'>
						<Loader />
					</div>
				)
			}
		</>
	)
}

export default TabButton
