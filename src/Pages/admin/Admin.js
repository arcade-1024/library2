import React from "react";

import "./Admin.scss";

import user from "../../assets/icon/undraw_male_avatar_323b.svg";

import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import DashboardCard from "../../components/dashboardCard/DashboardCard";
const Admin = ({
	analytics,
	adminName,
	allBooks,
	/* setAllBooks, */
	collections,
	/* setCollections, */
	popularBooks,
}) => {
	return (
		<div className="admin">
			<AdminNavbar admin={adminName} />
			<div className="admin-grid">
				<div className="admin-grid-chart">
					<DashboardCard>
					
						<h1>chart</h1>
					</DashboardCard>
				</div>
				<div className="admin-grid-book">
					<DashboardCard color1={"#ff9a9e"} color2={"#fad0c4"}>
						<h1 className="dashboard-card-heading">{allBooks.length}</h1>
						<p className="dashboard-card-sub">No. of books</p>
					</DashboardCard>

					<DashboardCard color1={"#a18cd1"} color2={"#fbc2eb"}>
						<h1 className="dashboard-card-heading">{allBooks.length}</h1>
						<p className="dashboard-card-sub">No. of users</p>
					</DashboardCard>

					<DashboardCard color1={"#f6d365"} color2={"#fda085"}>
						<h1 className="dashboard-card-heading">{popularBooks.length}</h1>
						<p className="dashboard-card-sub">No. of popular books</p>
					</DashboardCard>

					<DashboardCard color1={"#84fab0"} color2={"#8fd3f4"}>
						<h1 className="dashboard-card-heading">{collections.length}</h1>
						<p className="dashboard-card-sub">No. of Collections</p>
					</DashboardCard>
				</div>
			</div>
			<div className="admin-activities">
				<div className="admin-activities-row">
					<button>Recent activities</button>
				</div>
				<div className="admin-activities-log">
					<div className="admin-activities-log-list">
						{allBooks.map((book) => (
							<div className="admin-activities-log-list-item">
								<div>
									<img
										src={book.photo}
										className="admin-activities-log-list-item-img"
										alt=""
									/>
									<p>{book.name}</p>
								</div>
								<div>
									<p className="booked-text">booked by</p>
									<img src={user} className="user-img" alt="" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
