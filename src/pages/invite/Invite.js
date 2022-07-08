import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Invite.module.scss';

import { arrowBack, notificationsSharp } from "ionicons/icons";
import { home, checkbox, rocket, mail, personCircle, logoUsd, card, gitBranch } from "ionicons/icons";


const Invite = () => {

    return (
        <IonPage className={styles.invitePage}>
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

            <IonFooter className='ion-padding-top ion-padding-bottom'>
                <IonGrid className='ion-no-padding' >
                    <IonRow className='ion-justify-content-around'>
                        <IonRouterLink routerLink="/home">
                            <IonIcon icon={home} />
                        </IonRouterLink>
                        <IonRouterLink routerLink="/order">
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

export default Invite;