import React from 'react';

const Footer: React.FC = ({  }) => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <section className="footer__container">
                    <div className="footer__container__list">
                        <section className="footer__container__list__characteristic">
                            <div className="footer__container__list__characteristic__item">ROTATION TIME</div>
                            <div className="footer__container__list__characteristic__content">
                                
                                    DAYS
                                
                                     HOURS
                                
                            </div>
                        </section>

                        <section className="footer__container__list__characteristic">
                            <div className="footer__container__list__characteristic__item">REVOLUTION TIME</div>
                            <div className="footer__container__list__characteristic__content">
                                
                                     DAYS
                                
                                     YEARS
                                
                            </div>
                        </section>

                        <section className="footer__container__list__characteristic">
                            <div className="footer__container__list__characteristic__item">Radius</div>
                            <div className="footer__container__list__characteristic__content">
                                 KM
                            </div>
                        </section>

                        <section className="footer__container__list__characteristic">
                            <div className="footer__container__list__characteristic__item">AVERAGE TEMP.</div>
                            <div className="footer__container__list__characteristic__content">
                                °C
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
