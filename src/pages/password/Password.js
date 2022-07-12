import { IonBackButton, IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Password.module.scss';

import { arrowBack, notificationsSharp } from "ionicons/icons";

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
                                <IonRouterLink routerLink='/app/notification'>
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
        </IonPage>
    );
};

export default Password;