import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './TeamReport.module.scss';
import { IonDatetime } from '@ionic/react';
import { arrowBack, calendarOutline, notificationsSharp } from "ionicons/icons";

const TeamReport = () => {
    return (
        <IonPage className={styles.teamReportPage}>
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
                <div className={styles.teamReportContainer}>
                    <IonCard className={`ion-padding-top ion-no-margin ${styles.teamReportHeading}`}>
                        <IonRow className='ion-align-items-center'>
                            <IonCol className='ion-text-center'>
                                <span>All</span>
                                <span>Today</span>
                                <span>Yesterday</span>
                                <span>Week</span>
                            </IonCol>
                        </IonRow>
                        <IonRow className={`ion-justify-content-center ion-align-items-center ${styles.teamReportCalendar}`}>
                            <IonIcon icon={calendarOutline} />
                            <IonDatetime
                                value="2022-04-21"
                                displayFormat='YYYY-MM-DD'
                                className={styles.teamReportSelectDate}
                            ></IonDatetime>
                        </IonRow>
                    </IonCard>
                    <IonCard className={styles.teamReportContent}>
                        <IonRow className={`ion-align-items-center ion-justify-content-between ion-padding-start ion-padding-end ${styles.teamReportStatusBtnContent}`}>
                            <IonCol>
                                <p>All Data</p>
                            </IonCol>
                            <IonCol className='ion-text-right'>
                                <span>0</span>
                            </IonCol>
                        </IonRow>
                        <IonRow className={`ion-justify-contect-between ion-align-items-center ion-padding-start ion-padding-end ion-padding-bottom ${styles.teamCardBody}`}>
                            <IonCol>
                                <p>1</p>
                                <span>Team Size</span>
                            </IonCol>
                            <IonCol className='ion-text-right'>
                                <p>0</p>
                                <span>Order Commission</span>
                            </IonCol>
                        </IonRow>
                        <IonRow class={`ion-padding ${styles.teamCardBottom}`}>
                            <span>Subordinate</span>
                            <IonRow class='ion-justify-content-between ion-align-items-center'>
                                <IonCol size='2'>
                                    <IonImg src="/assets/img/head.png" />
                                </IonCol>
                                <IonCol size='3'>
                                    <p>Account: 888</p>
                                    <p>Membership Level: 2</p>
                                </IonCol>
                                <IonCol size='7'>
                                    <p>Cell-phone number: ***</p>
                                    <p>Registration time: 2022-05-05 12:41:38</p>
                                </IonCol>
                            </IonRow>
                        </IonRow>
                    </IonCard>
                    <IonCard className={styles.teamReportContent}>
                        <IonRow className={`ion-align-items-center ion-justify-content-between ion-padding-start ion-padding-end ${styles.teamReportStatusBtnContent}`}>
                            <IonCol className={styles.teamCardTitle1}>
                                <p>Level 1</p>
                                <span>proportion 9%</span>
                            </IonCol>
                            <IonCol className='ion-text-right'>
                                <span>0</span>
                            </IonCol>
                        </IonRow>
                        <IonRow className={`ion-justify-contect-between ion-align-items-center ion-padding-start ion-padding-end ion-padding-bottom ${styles.teamCardBody}`}>
                            <IonCol>
                                <p>1</p>
                                <span>Team Size</span>
                            </IonCol>
                            <IonCol className='ion-text-right'>
                                <p>0</p>
                                <span>Order Commission</span>
                            </IonCol>
                        </IonRow>
                        <IonRow class={`ion-padding ${styles.teamCardBottom}`}>
                            <span>Subordinate</span>
                            <IonRow class='ion-justify-content-between ion-align-items-center'>
                                <IonCol size='2'>
                                    <IonImg src="/assets/img/head.png" />
                                </IonCol>
                                <IonCol size='3'>
                                    <p>Account: 888</p>
                                    <p>Membership Level: 2</p>
                                </IonCol>
                                <IonCol size='7'>
                                    <p>Cell-phone number: ***</p>
                                    <p>Registration time: 2022-05-05 12:41:38</p>
                                </IonCol>
                            </IonRow>
                        </IonRow>
                    </IonCard>
                    <IonCard className={styles.teamReportContent}>
                        <IonRow className={`ion-align-items-center ion-justify-content-between ion-padding-start ion-padding-end ${styles.teamReportStatusBtnContent}`}>
                            <IonCol className={styles.teamCardTitle2}>
                                <p>Level 2</p>
                                <span>proportion 6%</span>
                            </IonCol>
                            <IonCol className='ion-text-right'>
                                <span>0</span>
                            </IonCol>
                        </IonRow>
                        <IonRow className={`ion-justify-contect-between ion-align-items-center ion-padding-start ion-padding-end ion-padding-bottom ${styles.teamCardBody}`}>
                            <IonCol>
                                <p>1</p>
                                <span>Team Size</span>
                            </IonCol>
                            <IonCol className='ion-text-right'>
                                <p>0</p>
                                <span>Order Commission</span>
                            </IonCol>
                        </IonRow>
                        <IonRow class={`ion-padding ${styles.teamCardBottom}`}>
                            <span>Subordinate</span>
                            <IonRow class='ion-justify-content-between ion-align-items-center'>
                                <IonCol size='2'>
                                    <IonImg src="/assets/img/head.png" />
                                </IonCol>
                                <IonCol size='3'>
                                    <p>Account: 888</p>
                                    <p>Membership Level: 2</p>
                                </IonCol>
                                <IonCol size='7'>
                                    <p>Cell-phone number: ***</p>
                                    <p>Registration time: 2022-05-05 12:41:38</p>
                                </IonCol>
                            </IonRow>
                        </IonRow>
                    </IonCard>
                    <IonCard className={styles.teamReportContent}>
                        <IonRow className={`ion-align-items-center ion-justify-content-between ion-padding-start ion-padding-end ${styles.teamReportStatusBtnContent}`}>
                            <IonCol className={styles.teamCardTitle3}>
                                <p>Level 3</p>
                                <span>proportion 1%</span>
                            </IonCol>
                            <IonCol className='ion-text-right'>
                                <span>0</span>
                            </IonCol>
                        </IonRow>
                        <IonRow className={`ion-justify-contect-between ion-align-items-center ion-padding-start ion-padding-end ion-padding-bottom ${styles.teamCardBody}`}>
                            <IonCol>
                                <p>1</p>
                                <span>Team Size</span>
                            </IonCol>
                            <IonCol className='ion-text-right'>
                                <p>0</p>
                                <span>Order Commission</span>
                            </IonCol>
                        </IonRow>
                        <IonRow class={`ion-padding ${styles.teamCardBottom}`}>
                            <span>Subordinate</span>
                            <IonRow class='ion-justify-content-between ion-align-items-center'>
                                <IonCol size='2'>
                                    <IonImg src="/assets/img/head.png" />
                                </IonCol>
                                <IonCol size='3'>
                                    <p>Account: 888</p>
                                    <p>Membership Level: 2</p>
                                </IonCol>
                                <IonCol size='7'>
                                    <p>Cell-phone number: ***</p>
                                    <p>Registration time: 2022-05-05 12:41:38</p>
                                </IonCol>
                            </IonRow>
                        </IonRow>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default TeamReport;