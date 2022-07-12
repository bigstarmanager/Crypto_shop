import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './OrderCompleted.module.scss';

import { IonDatetime } from '@ionic/react';
import { arrowBack, notificationsSharp } from "ionicons/icons";
import { home, checkbox, rocket, mail, personCircle, logoUsd, card, gitBranch } from "ionicons/icons";


const OrderCompleted = () => {

    return (
        <IonPage className={styles.orderPage}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} text="" className="custom-back" />
                    </IonButtons>

                    <IonButtons slot="end">
                        <IonButton className="custom-button">
                            <IonIcon icon={notificationsSharp} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.orderContainer}>
                    <IonCard className={`ion-padding-top ion-no-margin ${styles.orderHeading}`}>
                        <IonRow className='ion-align-items-center'>
                            <IonCol className='ion-text-center'>
                                <IonRouterLink routerLink="/order-pending">
                                    <span>PENDING</span>
                                </IonRouterLink>
                                <IonRouterLink routerLink="/order-completed">
                                    <span className={styles.orderSelected}>COMPLETED</span>
                                </IonRouterLink>
                                <IonRouterLink routerLink="/order-freezed">
                                    <span>FREEZED</span>
                                </IonRouterLink>
                            </IonCol>
                        </IonRow>
                        <IonRow className='ion-padding-start'>
                            <p className='ion-padding-start'>Account Balance : 10000.00 USD</p>
                        </IonRow>
                    </IonCard>
                    <IonCard className={styles.orderContent}>
                        <IonRow className='ion-justify-content-between'>
                            <IonCol>
                                <IonDatetime
                                    value="2022-04-21 00:00:00"
                                    displayFormat='YYYY-MM-DD HH:mm	'
                                    className={`ion-no-padding-start ${styles.orderDate}`}
                                    disabled
                                ></IonDatetime>
                            </IonCol>
                            <IonCol className={styles.orderStatusBtnContent}>
                                <span className={styles.orderStatusBtn}>
                                    COMPLETED
                                </span>
                            </IonCol>
                        </IonRow>
                        <IonRow className='ion-justify-contect-between ion-align-items-center'>
                            <IonCol size='3'>
                                <IonImg src="/assets/img/product/laptop.jpg" />
                            </IonCol>
                            <IonCol size='9'>
                                <p className={styles.orderProductDescription}>
                                    PIXELARTZ Laptop Skin GTA Stickers Collage 15.6 inches-Dell, Lenovo, Acer, HP and Sony Laptops
                                </p>
                            </IonCol>
                        </IonRow>
                        <IonRow class='ion-justify-content-between ion-margin'>
                            <span className={styles.orderProductDetail}>Total Amount: </span>
                            <span>$ 599.00</span>
                        </IonRow>
                        <IonRow class='ion-justify-content-between ion-margin'>
                            <span className={styles.orderProductDetail}>Commission: </span>
                            <span>$ 1.50</span>
                        </IonRow>
                        <IonRow class='ion-justify-content-between ion-margin'>
                            <span className={styles.orderProductDetail}>Return Amount: </span>
                            <span>$ 600.50</span>
                        </IonRow>
                    </IonCard>
                    <IonCard className={styles.orderContent}>
                        <IonRow className='ion-justify-content-between'>
                            <IonCol>
                                <IonDatetime
                                    value="2022-04-21 00:00:00"
                                    displayFormat='YYYY-MM-DD HH:mm	'
                                    className={`ion-no-padding-start ${styles.orderDate}`}
                                    disabled
                                ></IonDatetime>
                            </IonCol>
                            <IonCol className={styles.orderStatusBtnContent}>
                                <span className={styles.orderStatusBtn}>
                                    COMPLETED
                                </span>
                            </IonCol>
                        </IonRow>
                        <IonRow className='ion-justify-contect-between ion-align-items-center'>
                            <IonCol size='3'>
                                <IonImg src="/assets/img/product/laptop.jpg" />
                            </IonCol>
                            <IonCol size='9'>
                                <p className={styles.orderProductDescription}>
                                    PIXELARTZ Laptop Skin GTA Stickers Collage 15.6 inches-Dell, Lenovo, Acer, HP and Sony Laptops
                                </p>
                            </IonCol>
                        </IonRow>
                        <IonRow class='ion-justify-content-between ion-margin'>
                            <span className={styles.orderProductDetail}>Total Amount: </span>
                            <span>$ 599.00</span>
                        </IonRow>
                        <IonRow class='ion-justify-content-between ion-margin'>
                            <span className={styles.orderProductDetail}>Commission: </span>
                            <span>$ 1.50</span>
                        </IonRow>
                        <IonRow class='ion-justify-content-between ion-margin'>
                            <span className={styles.orderProductDetail}>Return Amount: </span>
                            <span>$ 600.50</span>
                        </IonRow>
                    </IonCard>
                    <IonCard className={styles.orderContent}>
                        <IonRow className='ion-justify-content-between'>
                            <IonCol>
                                <IonDatetime
                                    value="2022-04-21 00:00:00"
                                    displayFormat='YYYY-MM-DD HH:mm	'
                                    className={`ion-no-padding-start ${styles.orderDate}`}
                                    disabled
                                ></IonDatetime>
                            </IonCol>
                            <IonCol className={styles.orderStatusBtnContent}>
                                <span className={styles.orderStatusBtn}>
                                    COMPLETED
                                </span>
                            </IonCol>
                        </IonRow>
                        <IonRow className='ion-justify-contect-between ion-align-items-center'>
                            <IonCol size='3'>
                                <IonImg src="/assets/img/product/laptop.jpg" />
                            </IonCol>
                            <IonCol size='9'>
                                <p className={styles.orderProductDescription}>
                                    PIXELARTZ Laptop Skin GTA Stickers Collage 15.6 inches-Dell, Lenovo, Acer, HP and Sony Laptops
                                </p>
                            </IonCol>
                        </IonRow>
                        <IonRow class='ion-justify-content-between ion-margin'>
                            <span className={styles.orderProductDetail}>Total Amount: </span>
                            <span>$ 599.00</span>
                        </IonRow>
                        <IonRow class='ion-justify-content-between ion-margin'>
                            <span className={styles.orderProductDetail}>Commission: </span>
                            <span>$ 1.50</span>
                        </IonRow>
                        <IonRow class='ion-justify-content-between ion-margin'>
                            <span className={styles.orderProductDetail}>Return Amount: </span>
                            <span>$ 600.50</span>
                        </IonRow>
                    </IonCard>
                    <IonCard className={styles.orderContent}>
                        <IonRow className='ion-justify-content-between'>
                            <IonCol>
                                <IonDatetime
                                    value="2022-04-21 00:00:00"
                                    displayFormat='YYYY-MM-DD HH:mm	'
                                    className={`ion-no-padding-start ${styles.orderDate}`}
                                    disabled
                                ></IonDatetime>
                            </IonCol>
                            <IonCol className={styles.orderStatusBtnContent}>
                                <span className={styles.orderStatusBtn}>
                                    COMPLETED
                                </span>
                            </IonCol>
                        </IonRow>
                        <IonRow className='ion-justify-contect-between ion-align-items-center'>
                            <IonCol size='3'>
                                <IonImg src="/assets/img/product/laptop.jpg" />
                            </IonCol>
                            <IonCol size='9'>
                                <p className={styles.orderProductDescription}>
                                    PIXELARTZ Laptop Skin GTA Stickers Collage 15.6 inches-Dell, Lenovo, Acer, HP and Sony Laptops
                                </p>
                            </IonCol>
                        </IonRow>
                        <IonRow class='ion-justify-content-between ion-margin'>
                            <span className={styles.orderProductDetail}>Total Amount: </span>
                            <span>$ 599.00</span>
                        </IonRow>
                        <IonRow class='ion-justify-content-between ion-margin'>
                            <span className={styles.orderProductDetail}>Commission: </span>
                            <span>$ 1.50</span>
                        </IonRow>
                        <IonRow class='ion-justify-content-between ion-margin'>
                            <span className={styles.orderProductDetail}>Return Amount: </span>
                            <span>$ 600.50</span>
                        </IonRow>
                    </IonCard>
                </div>
            </IonContent>

            <IonFooter className='ion-padding-top ion-padding-bottom'>
                <IonGrid className='ion-no-padding' >
                    <IonRow className='ion-justify-content-around'>
                        <IonRouterLink routerLink="/home">
                            <IonIcon icon={home} />
                        </IonRouterLink>
                        <IonRouterLink routerLink="/order-pending">
                            <IonIcon icon={checkbox} />
                        </IonRouterLink>
                        <IonRouterLink routerLink="/cart">
                            <IonIcon icon={rocket} />
                        </IonRouterLink>
                        <IonRouterLink routerLink="/support">
                            <IonIcon icon={mail} />
                        </IonRouterLink>
                        <IonRouterLink routerLink="/profile">
                            <IonIcon icon={personCircle} />
                        </IonRouterLink>
                    </IonRow>
                </IonGrid>
            </IonFooter>
        </IonPage>
    );
};

export default OrderCompleted;