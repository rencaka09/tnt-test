import style from "./Navbar.module.css"
import logo from "../../assets/Img/Logo.svg"


const Navbar = () => {
	return (
		<div className={style.navbar}>
				<img className={style.img} src={logo} alt="" />
				<div className={style.navbarButton}>
					<div>About</div>
					<div>Services</div>
					<div>Portofolio</div>
					<dev>Team</dev>
					<div>Contact</div>
				</div>
		</div>
	)
}

export default Navbar;