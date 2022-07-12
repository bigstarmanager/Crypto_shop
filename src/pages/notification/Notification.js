import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Notification.module.scss';

import { arrowBack, notificationsSharp, mailUnread } from "ionicons/icons";
import { home, checkbox, rocket, mail, personCircle, logoUsd, card, gitBranch } from "ionicons/icons";


const Notification = () => {

    return (
        <IonPage className={styles.notificationPage}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} text="" className="custom-back" />
                    </IonButtons>

                    <IonButtons slot="end">
                        {/* <IonRouterLink routerLink='/notification'>
                            <IonButton className="custom-button">
                                <IonIcon icon={notificationsSharp} />
                            </IonButton>
                        </IonRouterLink> */}
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.notificationContainer}>
                    <IonImg src="/assets/img/announcement.png" />
                    <h2 className={styles.headerText}>
                        <IonIcon icon={mailUnread} /> System announcement
                    </h2>
                    <IonCard className={`ion-padding-start ion-padding-end ${styles.notificationContent}`}>
                        <IonCard>
                            <IonCardTitle className='ion-padding'>
                                Notice
                            </IonCardTitle>
                            <IonCardContent>
                                Hãy chọn đơn hàng trung tâm mua sắm một cách hợp lý để nhận được hoa hồng cao hơn nhé!
                            </IonCardContent>
                        </IonCard>
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

export default Notification;