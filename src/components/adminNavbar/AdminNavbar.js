import React from "react";
import "./AdminNavbar.scss";
import Icon from "react-icons-kit";
import { plus } from "react-icons-kit/fa/plus";
import { users } from "react-icons-kit/fa/users";
import { gear } from "react-icons-kit/fa/gear";
import { signOut } from "react-icons-kit/fa/signOut";
const AdminNavbar = ({ admin }) => {
	let tempName = "";
	tempName = admin ? admin : "admin";
	return (
		<div className="admin-navbar">
			<p className="admin-navbar-greet">Hello {tempName}, Welcome Back</p>
			<nav className="admin-navbar-navigation">
				<h2 className="admin-navbar-navigation-header">Dashboard</h2>
				<div className="admin-navbar-navigation-row">
					<div className="admin-navbar-navigation-row-btn">
						<Icon icon={plus} />
					</div>
					<div className="admin-navbar-navigation-row-btn">
						<Icon icon={users} />
					</div>
					<div className="admin-navbar-navigation-row-btn">
						<Icon icon={gear} />
					</div>
					<div className="admin-navbar-navigation-row-btn">
						<Icon icon={signOut} />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default AdminNavbar;
