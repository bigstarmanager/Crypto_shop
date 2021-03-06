import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './OrderPending.module.scss';

import { IonDatetime } from '@ionic/react';
import { arrowBack, notificationsSharp } from "ionicons/icons";

const OrderPending = () => {

    return (
        <IonPage className={styles.orderPage}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} text="" className="custom-back" />
                    </IonButtons>

                    <IonButtons slot="end">
                        <IonRouterLink routerLink='/app/notification'>
                            <IonButton className="custom-button">
                                <IonIcon icon={notificationsSharp} />
                            </IonButton>
                        </IonRouterLink>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.orderContainer}>
                    <IonCard className={`ion-padding-top ion-no-margin ${styles.orderHeading}`}>
                        <IonRow className='ion-align-items-center'>
                            <IonCol className='ion-text-center'>
                                <IonRouterLink routerLink="/app/order-pending">
                                    <span className={styles.orderSelected}>PENDING</span>
                                </IonRouterLink>
                                <IonRouterLink routerLink="/app/order-completed">
                                    <span>COMPLETED</span>
                                </IonRouterLink>
                                <IonRouterLink routerLink="/app/order-freezed">
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
                                    Pending
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
                                    Pending
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
                                    Pending
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
                                    Pending
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
        </IonPage>
    );
};

export default OrderPending;