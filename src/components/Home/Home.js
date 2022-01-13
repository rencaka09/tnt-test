import style from "./Home.module.css";
import logo from "../../assets/Img/Web-design-icon.svg";
import logoNr2 from "../../assets/Img/Planning-icon.svg";
import logoNr3 from "../../assets/Img/Web-icon.svg";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.box}>
        <div className={style.helloWorld}>Hello World</div>
        <div className={style.hugeText}>
          We are creative agency. We build digital work that
        </div>
        <button className={style.button}>
          Explore out portofolio<i class="fas fa-arrow-right"></i>
        </button>
      </div>
      <div className={style.secondBox}>
        <div className={style.threeBox}>
          <div className={style.webDesign}>
            <div className={style.insideBox}>
              <img className={style.logo} src={logo} />
              <div className={style.textFont}>Web Design</div>
              <div className={style.smallText}>
                Sed ut perspiciatis unde omni iste natus error sit volunteer
                accusantum doloremque.
              </div>
              <div className={style.iconColor1}>
                <i class="far fa-arrow-alt-circle-right"></i>
              </div>
            </div>
          </div>
          <div className={style.digitalArtWork}>
            <div className={style.insideBox}>
              <img className={style.logo} src={logoNr2} />
              <div className={style.textFont2}>Digital ArtWork</div>
              <div className={style.smallText}>
                Sed ut perspiciatis unde omni iste natus error sit volunteer
                accusantum doloremque.
              </div>
              <div className={style.iconColor2}>
                <i class="far fa-arrow-alt-circle-right"></i>
              </div>
            </div>
          </div>
          <div className={style.website}>
            <div className={style.insideBox}>
              <img className={style.logo3} src={logoNr3} />
              <div className={style.textFont}>Website</div>
              <div className={style.smallText}>
                Sed ut perspiciatis unde omni iste natus error sit volunteer
                accusantum doloremque. Ut perspiciatis unde omni iste natus
                error sit volunteer accusantum doloremque.
              </div>
              <div className={style.iconColor3}>
                <i class="far fa-arrow-alt-circle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
