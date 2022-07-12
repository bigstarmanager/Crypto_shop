import { IonBackButton, IonButton, IonButtons, IonCard, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Support.module.scss';

import { arrowBack, notificationsSharp } from "ionicons/icons";
import { home, checkbox, rocket, mail, personCircle, logoUsd, card, gitBranch } from "ionicons/icons";


const Support = () => {

    return (
        <IonPage className={styles.supportPage}>
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
                <div className={styles.supportContainer}>
                    <IonCard className={`ion-padding-start ion-padding-end ion-no-margin ${styles.supportHeading}`}>
                        <h2 className='ion-text-center'>
                            Customer service center
                        </h2>
                    </IonCard>
                    <IonCard className={`ion-padding-start ion-padding-end ${styles.supportContent}`}>
                        <IonRow>
                            <h6 className='ion-padding'>
                                Please contact online customer service if you have any issuse to be assjsted.
                            </h6>
                        </IonRow>
                        <IonRow className='ion-justify-content-center'>
                            <IonRouterLink href="https://direct.lc.chat/14101083/">
                                <IonCard className='ion-padding'>
                                    <IonCardTitle>
                                        Exclusive customer service
                                    </IonCardTitle>
                                </IonCard>
                            </IonRouterLink>
                        </IonRow>
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
                        <IonRouterLink routerLink="/profile">
                            <IonIcon icon={personCircle} />
                        </IonRouterLink>
                    </IonRow>
                </IonGrid>
            </IonFooter>
        </IonPage>
    );
};

export default Support;