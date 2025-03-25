"use client"

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link href="/" className="logo">Posts</Link>
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><a href="/">List</a></li>
                <li><a href="/posts/create">Add Post</a></li>
            </ul>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            <ThemeToggle /> {/* Aquí agregas el componente para cambiar de tema */}
        </nav>
    );
};

export default Navbar;