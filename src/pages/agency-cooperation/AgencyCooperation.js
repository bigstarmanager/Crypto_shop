import { IonBackButton, IonImg, IonButtons, IonCheckbox, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './AgencyCooperation.module.scss';

import { arrowBack, chatbubbleEllipses } from "ionicons/icons";
import { home, checkbox, rocket, mail, personCircle, logoUsd, card, gitBranch } from "ionicons/icons";


const AgencyCooperation = () => {

    return (
        <IonPage className={styles.agencyCooperationPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol>
                            <IonButtons>
                                <IonBackButton icon={arrowBack} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol>
                            <h5 className='ion-text-center ion-no-margin'>Agency</h5>
                        </IonCol>
                        <IonCol>
                            <IonButtons className='ion-justify-content-end'>
                                <IonRouterLink className='ion-text-right' href="https://direct.lc.chat/14101083/">
                                    <IonIcon icon={chatbubbleEllipses} />
                                </IonRouterLink>
                            </IonButtons>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.agencyCooperationContainer}>
                    <IonCard className={`ion-padding ${styles.agencyCooperationContent}`}>
                        <IonImg src="/assets/img/contact3.png" />
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

export default AgencyCooperation;