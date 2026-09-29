import one from "../../assets/one.jpg";
import style from "./Home.module.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="page">

      <section className={style.hero}>

        <div className={style.heroText}>
          <h1 className="font-lobster">
            <span className="font-lobster">New</span>
            <br />
            Arrival
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus ab ipsa maxime deserunt illum dignissimos accusamus
            quis expedita ex provident? Provident mollitia dolore magnam
            repellendus suscipit placeat incidunt dolor, sapiente harum,
            consectetur saepe sed aperiam earum doloremque fugiat, natus
            voluptate explicabo?
          </p>

          <button onClick={() => window.location.href = "/ourproducts"}>
            Shop Now ❯
          </button>
        </div>

        <div className={style.heroImg}>
          <img src={one} alt="New Arrival" />
        </div>

      </section>

      <div className={style.grayLine}></div>

      <section className={style.categories}>

        <Link to="/mensclothing">
        <div className={style.category}>       
          <div className="icon">👕</div>
          <h3>Men's Clothing</h3>
        </div>
        </Link>

        <Link to="/womensclothing">
        <div className={style.category}>         
          <div className="icon">♧</div>
          <h3>Women's Clothing</h3>         
        </div>
        </Link>
        
        <Link to="/jewelery">
        <div className={style.category}>
          <div className="icon">♢</div>
          <h3>Jewelery</h3>
        </div>
        </Link>

        <Link to="/electronics">
        <div className={style.category}>
          <div className="icon">♧</div>
          <h3>Electronics</h3>
        </div>
        </Link>

      </section>

    </div>
  );
}

export default Home;
