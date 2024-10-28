import React from "react";
import { Dropdown, Navbar, Avatar, DarkThemeToggle, } from "flowbite-react";
export default function NavbarComponent() {
    const isAdmin = localStorage.getItem('Role');
    function signOut() {
        localStorage.clear();
        window.location.href = "/"
    }
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/landingPage">
                    <img
                        src="./Images/shoppingmall.avif"
                        className="mr-3 h-6 sm:h-9"
                        alt="Smart_Trolley logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white italic">
                        Mangalore Mall
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_1280.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {localStorage.getItem('username')}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {localStorage.getItem('email')}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={signOut}>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                {
                    isAdmin === 'admin'
                        ? (
                            <Navbar.Collapse>
                                <Navbar.Link
                                    href="/landingPage"
                                    active={true}>
                                    Home
                                </Navbar.Link>
                                <Navbar.Link href="/about">
                                    About
                                </Navbar.Link>
                                <Navbar.Link href="/cart">
                                    Cart<i className="fa-thin fa-cart-shopping"></i>
                                </Navbar.Link>
                                <Navbar.Link href="/previousbill">
                                    Previous Bills
                                </Navbar.Link>
                                <Navbar.Link href="/addproduct">
                                    Add products
                                </Navbar.Link>
                                
                            </Navbar.Collapse>
                        )
                        : (
                            <Navbar.Collapse>

                                <Navbar.Link
                                    href="/landingPage"
                                    active={true}>
                                    Home
                                </Navbar.Link>
                                <Navbar.Link href="/about">
                                    About
                                </Navbar.Link>
                                <Navbar.Link href="/cart">
                                    Cart<i className="fa-thin fa-cart-shopping"></i>
                                </Navbar.Link>
                                <Navbar.Link href="/previousbill">
                                    Previous Bills
                                </Navbar.Link>
                                
                            </Navbar.Collapse>
                        )
                }
                <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
            </Navbar>
        </>
    );
}