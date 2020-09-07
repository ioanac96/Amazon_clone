import React from 'react';
import "./Home.css";
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""
            />
            <div className="home__row">
                <Product 
                    id="1"
                    title="LALALALALA"
                    price={12.96}
                    rating={5}
                    image="https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Health/06June/CR-Health-Inlinehero-a2-milk-0619"
                />
                <Product 
                    id="2"
                    title="Mac OS"
                    price={12.96}
                    rating={5}
                    image="https://hintariu.ro/wp-content/uploads/2020/04/catalina-hero.png"
                />
            </div>
            <div className="home__row">
                <Product 
                        id="3"
                        title="LALALALALA"
                        price={12.96}
                        rating={5}
                        image="https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Health/06June/CR-Health-Inlinehero-a2-milk-0619"
                />
                 <Product 
                        id="4"
                        title="LALALALALA"
                        price={12.96}
                        rating={5}
                        image="https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Health/06June/CR-Health-Inlinehero-a2-milk-0619"
                />
                 <Product 
                        id="5"
                        title="LALALALALA"
                        price={12.96}
                        rating={5}
                        image="https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Health/06June/CR-Health-Inlinehero-a2-milk-0619"
                />     
            </div>
            <div className="home__row">
                <Product 
                            id="6"
                            title="LALALALALA"
                            price={12.96}
                            rating={5}
                            image="https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Health/06June/CR-Health-Inlinehero-a2-milk-0619"
                />
            </div>
            
            
        </div>
    )
}

export default Home;
