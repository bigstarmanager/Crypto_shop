import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Invite.module.scss';

import { arrowBack, notificationsSharp, logoUsd } from "ionicons/icons";

const Invite = () => {

    return (
        <IonPage className={styles.invitePage}>
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
                <div className={styles.inviteContainer}>
                    <IonCard className={`ion-padding-start ion-padding-end ${styles.inviteContent}`}>
                        <IonCard >
                            <h1 className='ion-text-center'>
                                Invite friends to get commission
                            </h1>
                        </IonCard>
                        <IonRow className='ion-margin-top'>
                            <div className={styles.inviteContentLogo}>
                                <IonIcon icon={logoUsd} className="logo1" />
                                <IonIcon icon={logoUsd} className="logo1" />
                                <IonIcon icon={logoUsd} className={styles.logo2} />
                            </div>
                        </IonRow>
                        <IonRow>
                            <h6>30 minutes to join my team everyday. Win a ten thousand it's just a beginning.Every invited is a chance and wealth of freedom. Share infinite, rebate!</h6>
                            <h3>
                                Invitation Code: <span>AVFT1234</span>
                            </h3>
                        </IonRow>
                        <IonButton expand='block' className='ion-margin'>
                            Copy invitation link
                        </IonButton>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Invite;