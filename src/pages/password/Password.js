import { IonBackButton, IonSelectOption, IonButton, IonButtons, IonCheckbox, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Password.module.scss';

import { arrowBack, notificationsSharp } from "ionicons/icons";
import { home, checkbox, rocket, mail, personCircle, logoUsd, card, gitBranch } from "ionicons/icons";


const Password = () => {

    return (
        <IonPage className={styles.passwordPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol>
                            <IonButtons>
                                <IonBackButton icon={arrowBack} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol size='8'>
                            <h5 className='ion-text-center ion-no-margin'>CHANGE PASSWORD</h5>
                        </IonCol>
                        <IonCol>
                            <IonButtons className='ion-justify-content-end'>
                                <IonRouterLink routerLink='/notification'>
                                    <IonButton className="custom-button">
                                        <IonIcon icon={notificationsSharp} />
                                    </IonButton>
                                </IonRouterLink>
                            </IonButtons>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.passwordContainer}>
                    <IonCard className={`ion-padding-start ion-padding-end ${styles.passwordContent}`}>
                        <div className={styles.passwordItems}>
                            <p className='ion-text-center'>
                                Change Password
                            </p>
                            <IonItem>
                                <IonLabel position="floating" color="primary">Please input Old Password</IonLabel>
                                <IonInput color="primary" type='password'></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" color="primary">Please input New Password</IonLabel>
                                <IonInput color="primary" type='password'></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" color="primary">Please input Confirm Password</IonLabel>
                                <IonInput color="primary" type='password'></IonInput>
                            </IonItem>
                        </div>
                        <IonButton expand='block' className='ion-margin-top'>
                            Next Step
                        </IonButton>
                        <p className='ion-text-center'>
                            Please remember the password, if you forget the password, please contact customer service.
                        </p>
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

export default Password;