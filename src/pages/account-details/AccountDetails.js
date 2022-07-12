import { IonBackButton, IonButton, IonButtons, IonDatetime, IonCheckbox, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonToolbar, IonCardTitle, IonCardContent } from '@ionic/react';
import styles from './AccountDetails.module.scss';

import { arrowBack, chatbubbleEllipses, notificationsSharp } from "ionicons/icons";
import { home, checkbox, rocket, mail, personCircle, logoUsd, card, gitBranch } from "ionicons/icons";


const AccountDetails = () => {

    return (
        <IonPage className={styles.accountDetailsPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol>
                            <IonButtons>
                                <IonBackButton icon={arrowBack} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol size='8'>
                            <h5 className='ion-text-center ion-no-margin'>ACCOUNT DETAILS</h5>
                        </IonCol>
                        <IonCol>
                            <IonButtons className='ion-justify-content-end'>
                                <IonRouterLink className='ion-text-right' routerLink="/notification">
                                    <IonIcon icon={notificationsSharp} />
                                </IonRouterLink>
                            </IonButtons>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.accountDetailsContainer}>
                    <IonCard className={`ion-padding ${styles.accountDetailsContent}`}>
                        <IonCardTitle color='light' className='ion-margin-bottom'>
                            ACCOUNT DETAILS
                        </IonCardTitle>
                        <IonCardContent className='ion-no-padding ion-no-margin'>
                            <div className={styles.accountDetailsItem}>
                                <IonRow className='ion-justify-content-between ion-align-items-center'>
                                    <IonCol>
                                        <IonDatetime
                                            value="2022-04-21 00:00:00"
                                            displayFormat='YYYY-MM-DD HH:mm	'
                                            className={`ion-no-padding-start ${styles.accountDate}`}
                                            disabled
                                        ></IonDatetime>
                                        <span className={styles.accountStatusCommission}>
                                            Commission return order
                                        </span>
                                    </IonCol>
                                    <IonCol className='ion-text-right'>
                                        <span className={styles.accountAmount}>
                                            $ 6523.00
                                        </span>
                                    </IonCol>
                                </IonRow>
                            </div>
                            <div className={styles.accountDetailsItem}>
                                <IonRow className='ion-justify-content-between ion-align-items-center'>
                                    <IonCol>
                                        <IonDatetime
                                            value="2022-04-21 00:00:00"
                                            displayFormat='YYYY-MM-DD HH:mm	'
                                            className={`ion-no-padding-start ${styles.accountDate}`}
                                            disabled
                                        ></IonDatetime>
                                        <span className={styles.accountStatusOrder}>
                                            Customer orders
                                        </span>
                                    </IonCol>
                                    <IonCol className='ion-text-right'>
                                        <span className={styles.accountAmount}>
                                            $ 6523.00
                                        </span>
                                    </IonCol>
                                </IonRow>
                            </div>
                            <div className={styles.accountDetailsItem}>
                                <IonRow className='ion-justify-content-between ion-align-items-center'>
                                    <IonCol>
                                        <IonDatetime
                                            value="2022-04-21 00:00:00"
                                            displayFormat='YYYY-MM-DD HH:mm	'
                                            className={`ion-no-padding-start ${styles.accountDate}`}
                                            disabled
                                        ></IonDatetime>
                                        <span className={styles.accountStatusWithdraw}>
                                            Withdraw by users
                                        </span>
                                    </IonCol>
                                    <IonCol className='ion-text-right'>
                                        <span className={styles.accountAmount}>
                                            $ 6523.00
                                        </span>
                                    </IonCol>
                                </IonRow>
                            </div>
                            <div className={styles.accountDetailsItem}>
                                <IonRow className='ion-justify-content-between ion-align-items-center'>
                                    <IonCol>
                                        <IonDatetime
                                            value="2022-04-21 00:00:00"
                                            displayFormat='YYYY-MM-DD HH:mm	'
                                            className={`ion-no-padding-start ${styles.accountDate}`}
                                            disabled
                                        ></IonDatetime>
                                        <span className={styles.accountStatusCommission}>
                                            Commission return order
                                        </span>
                                    </IonCol>
                                    <IonCol className='ion-text-right'>
                                        <span className={styles.accountAmount}>
                                            $ 6523.00
                                        </span>
                                    </IonCol>
                                </IonRow>
                            </div>
                        </IonCardContent>
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

export default AccountDetails;