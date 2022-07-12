import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Account.module.scss';

import { accessibilityOutline, notificationsOutline, arrowBack, batteryChargingOutline, cardOutline, notificationsSharp, peopleOutline, earthOutline } from "ionicons/icons";
import { home, checkbox, logOutOutline, cartOutline, lockOpenOutline, cashOutline, rocket, mail, personCircle, arrowForwardOutline, card, gitBranch, documentTextOutline } from "ionicons/icons";


const Account = () => {

    return (
        <IonPage className={styles.accountPage}>
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
                <div className={styles.accountContainer}>
                    <IonCard className={`ion-padding-top ion-padding-start ion-padding-end ion-no-margin ${styles.accountHeading}`}>
                        <IonRow className={`ion-align-items-center ${styles.accountHeadingItem}`}>
                            <IonCol size='3'>
                                <IonImg src="/assets/img/avatar/2.png" />
                            </IonCol>
                            <IonCol size='9'>
                                <IonRow className='ion-align-items-center'>
                                    <span className={styles.accountName}>BigStar</span>
                                    <span className={styles.accountLevel}>VIP 0</span>
                                </IonRow>
                                <IonRow className='ion-align-items-center'>
                                    <span>InvitationCode:</span>
                                    <span className={styles.accountInvitationCode}>EW8JG2</span>
                                    <IonRouterLink routerLink="/invite">
                                        <IonIcon icon={gitBranch} />
                                    </IonRouterLink>
                                </IonRow>
                            </IonCol>
                        </IonRow>
                        <div className={styles.accountHeadingItem}>
                            <h2>
                                $ 10000.00
                            </h2>
                            <p>
                                Account Balance
                            </p>
                        </div>
                        <IonRow className={`ion-justify-content-center ${styles.accountDisplayAmount}`}>
                            <IonCol size='5'>
                                <p className={`ion-text-left ${styles.accountAvailableAmount}`}>
                                    $10000.00
                                </p>
                                <p className='ion-text-left'>
                                    Available Balance
                                </p>
                            </IonCol>
                            <IonCol size='5'>
                                <p className={`ion-text-right ${styles.accountFreezonAmount}`}>
                                    $0.00
                                </p>
                                <p className='ion-text-right'>
                                    Frozen Amount
                                </p>
                            </IonCol>
                        </IonRow>
                    </IonCard>
                    <IonCard className={`ion-padding-start ion-padding-end ${styles.accountContent}`}>
                        <IonRouterLink routerLink="/withdraw">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.accountLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.accountLinkTabTitle}`}>
                                    <IonIcon icon={cardOutline} />
                                    <span>
                                        Withdraw
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.accountLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/teams">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.accountLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.accountLinkTabTitle}`}>
                                    <IonIcon icon={peopleOutline} />
                                    <span>
                                        Team Reports
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.accountLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/recharge">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.accountLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.accountLinkTabTitle}`}>
                                    <IonIcon icon={batteryChargingOutline} />
                                    <span>
                                        Recharge Record
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.accountLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/withdraw-record">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.accountLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.accountLinkTabTitle}`}>
                                    <IonIcon icon={documentTextOutline} />
                                    <span>
                                        Withdraw Record
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.accountLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/account-detail">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.accountLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.accountLinkTabTitle}`}>
                                    <IonIcon icon={accessibilityOutline} />
                                    <span>
                                        Account Details
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.accountLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/notification">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.accountLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.accountLinkTabTitle}`}>
                                    <IonIcon icon={notificationsOutline} />
                                    <span>
                                        Notification
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.accountLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/shipping">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.accountLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.accountLinkTabTitle}`}>
                                    <IonIcon icon={cartOutline} />
                                    <span>
                                        Shipping Address
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.accountLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/bank">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.accountLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.accountLinkTabTitle}`}>
                                    <IonIcon icon={cashOutline} />
                                    <span>
                                        Bind Bank Card
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.accountLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/password">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.accountLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.accountLinkTabTitle}`}>
                                    <IonIcon icon={lockOpenOutline} />
                                    <span>
                                        Change Password
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.accountLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/language">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.accountLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.accountLinkTabTitle}`}>
                                    <IonIcon icon={earthOutline} />
                                    <span>
                                        Language
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.accountLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
                        <IonRouterLink routerLink="/login">
                            <IonRow className={`ion-justify-content-between ion-align-items-center ${styles.accountLinkTab}`}>
                                <IonCol size='9' className={`ion-text-left ${styles.accountLinkTabTitle}`}>
                                    <IonIcon icon={logOutOutline} />
                                    <span>
                                        Logout
                                    </span>
                                </IonCol>
                                <IonCol size='3' className={`ion-text-right ${styles.accountLinkTabArrow}`}>
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonCol>
                            </IonRow>
                        </IonRouterLink>
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

export default Account;