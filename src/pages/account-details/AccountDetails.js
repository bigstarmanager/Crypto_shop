import { IonBackButton, IonButtons, IonDatetime, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar, IonCardTitle, IonCardContent } from '@ionic/react';
import styles from './AccountDetails.module.scss';

import { arrowBack, notificationsSharp } from "ionicons/icons";


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
                                <IonRouterLink className='ion-text-right' routerLink="/app/notification">
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
        </IonPage>
    );
};

export default AccountDetails;