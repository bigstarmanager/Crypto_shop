import { IonBackButton, IonButton, IonButtons, IonCheckbox, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Withdraw.module.scss';

import { arrowBack, chatbubbleEllipses } from "ionicons/icons";


const Withdraw = () => {

    return (
        <IonPage className={styles.withdrawPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol>
                            <IonButtons>
                                <IonBackButton icon={arrowBack} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol>
                            <h5 className='ion-text-center ion-no-margin'>WITHDRAW</h5>
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
                <div className={styles.cartContainer}>
                    <IonCard className={`ion-padding-start ion-padding-end ${styles.cartContent}`}>
                        <IonCard >
                            <h1 className='ion-text-center'>
                                $ 10000.00
                            </h1>
                            <p className='ion-text-center'>
                                Withdraw amount
                            </p>
                        </IonCard>
                        <IonRow>
                            <IonCol>
                                <h6>Account name</h6>
                                <p>Phone number</p>
                            </IonCol>
                            <IonCol>
                                <h6>1234</h6>
                                <p>123***123</p>
                            </IonCol>
                        </IonRow>
                        <IonRow className='ion-padding-start'>
                            <IonCheckbox color="primary" className='ion-margin-end' />
                            with_new_desc
                        </IonRow>
                        <IonItem className='ion-margin-top'>
                            <IonLabel position="floating" color="primary">Please input the withdraw amount</IonLabel>
                            <IonInput color="primary" type='number'></IonInput>
                        </IonItem>
                        <IonButton expand='block' className='ion-margin'>
                            Withdraw
                        </IonButton>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Withdraw;