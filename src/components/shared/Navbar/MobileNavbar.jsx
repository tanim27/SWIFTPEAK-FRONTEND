'use client'

import '@/styles/globals.css'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import { useState } from 'react'
import NavDrawer from './NavDrawer'

const MobileNavbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}

	return (
		<>
			<div className='bg-primary w-full fixed top-0 left-0 right-0 z-10'>
				<NavDrawer
					isDrawerOpen={isDrawerOpen}
					toggleDrawer={toggleDrawer}
				/>

				<div className='block md:hidden flex flex-row justify-between items-end px-4 py-2'>
					<h1 className='font-helveticaNeue font-normal text-3xl md:text-4xl'>
						SwiftPeak
					</h1>

					<div
						className='flex justify-between items-center gap-1 cursor-pointer'
						onClick={toggleDrawer}
					>
						<p>Menu</p>
						<MoreHorizRoundedIcon />
					</div>
				</div>
			</div>
		</>
	)
}

export default MobileNavbar
