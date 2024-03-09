import React from 'react'
import Logo from '../assets/Logo.webp'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    //NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { Button } from './ui/button'

const Navbar: React.FC = () => {
    return (
        <nav className='hidden w-full bg-primary border-b-divider lg:flex items-center justify-between '>
            <div className='p-4'>
                <img src={Logo} width={181} />
            </div>
            <div className='flex gap-4 md:w-[700px] justify-between items-center'>
                <NavigationMenu>
                    <NavigationMenuList className='gap-12'>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuIndicator />
                                <ul className='grid gap-3 p-6 md:w-[200px]'>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a className='block rounded-md px-3 py-2 transition hover:bg-accent focus:outline-none focus:bg-accent'>
                                                Product 1
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    {/* Add more product menu items as needed */}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuIndicator />
                                <ul className='grid gap-3 p-6 md:w-[400px]'>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a className='block rounded-md px-3 py-2 transition hover:bg-accent focus:outline-none focus:bg-accent'>
                                                Solution 1
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    {/* Add more solution menu items as needed */}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuIndicator />
                                <ul className='grid gap-3 p-6 md:w-[400px]'>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a className='block rounded-md px-3 py-2 transition hover:bg-accent focus:outline-none focus:bg-accent'>
                                                Solution 1
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    {/* Add more solution menu items as needed */}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Add more menu items as needed */}
                    </NavigationMenuList>
                </NavigationMenu>
                <h2 className='text-white'>Pricing</h2>
                <h2 className='text-white'>Changelog</h2>
            </div>
            <div className='text-white flex gap-4 justify-between items-center'>
                <h2>Sign In</h2>

                <Button className='hover:bg-hoverCTAButton bg-primary border-2 border-gradient2 rounded-full  font-bold cursor-pointer'>
                    Book a Demo
                </Button>
            </div>
        </nav>
    )
}

export default Navbar
