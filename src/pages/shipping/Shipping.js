import { IonBackButton, IonButton, IonButtons, IonCheckbox, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Shipping.module.scss';

import { arrowBack, chatbubbleEllipses } from "ionicons/icons";


const Shipping = () => {

    return (
        <IonPage className={styles.shippingPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol>
                            <IonButtons>
                                <IonBackButton icon={arrowBack} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol size='8'>
                            <h5 className='ion-text-center ion-no-margin'>MODIFY SHIPPING ADDRESS</h5>
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
                <div className={styles.shippingContainer}>
                    <IonCard className={`ion-padding-start ion-padding-end ${styles.shippingContent}`}>
                        <div className={styles.shippingItems}>
                            <p>
                                Recipient Information
                            </p>
                            <IonItem>
                                <IonLabel position="floating" color="primary">Please input Name</IonLabel>
                                <IonInput color="primary" type='text' value="bigstar"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" color="primary">Please input Phone number</IonLabel>
                                <IonInput color="primary" type='text' value="***2341523"></IonInput>
                            </IonItem>
                        </div>
                        <div className={styles.shippingItems}>
                            <p>
                                Recipient Address
                            </p>
                            <IonItem>
                                <IonLabel position="floating" color="primary">Please input Region name</IonLabel>
                                <IonInput color="primary" type='text' value="Beijjing"></IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position="floating" color="primary">Please input Address</IonLabel>
                                <IonInput color="primary" type='text' value="?????????236???"></IonInput>
                            </IonItem>
                        </div>
                        <div className={styles.shippingItems}>
                            <p>
                                Setting
                            </p>
                            <IonRow className='ion-align-items-center'>
                                <IonCheckbox color="primary" className='ion-margin-end' />
                                Set as default address
                            </IonRow>
                        </div>
                        <IonButton expand='block' className='ion-margin-top'>
                            Determine
                        </IonButton>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Shipping;