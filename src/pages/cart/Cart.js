import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Cart.module.scss';

import { arrowBack, notificationsSharp } from "ionicons/icons";
import { home, checkbox, rocket, mail, personCircle, logoUsd, card, gitBranch } from "ionicons/icons";


const Cart = () => {

    return (
        <IonPage className={styles.cartPage}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} text="" className="custom-back" />
                    </IonButtons>

                    <IonButtons slot="end">
                        <IonRouterLink routerLink='/notification'>
                            <IonButton className="custom-button">
                                <IonIcon icon={notificationsSharp} />
                            </IonButton>
                        </IonRouterLink>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.cartContainer}>
                    <IonCard className={`ion-padding-start ion-padding-end ion-no-margin ${styles.cartHeading}`}>
                        <IonRow className='ion-align-items-center'>
                            <IonCol>
                                <h1>$ 10000.00</h1>
                                <p>Account Funds</p>
                            </IonCol>
                            <IonCol className='ion-text-right'>
                                <IonRouterLink href="https://direct.lc.chat/14101083/">
                                    <span>+</span>
                                </IonRouterLink>
                            </IonCol>
                        </IonRow>
                    </IonCard>
                    <IonCard className={`ion-padding-start ion-padding-end ${styles.cartContent}`}>
                        <IonCard >
                            <h1 className='ion-text-center'>
                                Ordinary member
                            </h1>
                            <p className='ion-text-center'>
                                commission 0.4% | 60 Order
                            </p>
                            <h1 className='ion-text-center'>
                                5 / 60
                            </h1>
                        </IonCard>
                        <IonRow>
                            <IonCol>
                                <h6>$ 100.00</h6>
                                <p>Get commission</p>
                            </IonCol>
                            <IonCol className='ion-text-right'>
                                <h6>$ 50.00</h6>
                                <p>Frozen amount</p>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <h6>3</h6>
                                <p>Order quantity</p>
                            </IonCol>
                            <IonCol className='ion-text-right'>
                                <h6>$ 15350.00</h6>
                                <p>Available balance</p>
                            </IonCol>
                        </IonRow>
                        <IonButton expand='block' className='ion-margin'>
                            Start grabbing orders
                        </IonButton>
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
                        <IonRouterLink routerLink="/account">
                            <IonIcon icon={personCircle} />
                        </IonRouterLink>
                    </IonRow>
                </IonGrid>
            </IonFooter>
        </IonPage>
    );
};

export default Cart;