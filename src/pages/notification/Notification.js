import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonToolbar } from '@ionic/react';
import styles from './Notification.module.scss';

import { arrowBack, mailUnread } from "ionicons/icons";


const Notification = () => {

    return (
        <IonPage className={styles.notificationPage}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} text="" className="custom-back" />
                    </IonButtons>

                    <IonButtons slot="end">
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
        </IonPage>
    );
};

export default Notification;