import { IonModal, IonCard, IonButton, IonText, IonCol, IonContent, IonFooter, IonGrid, IonIcon, IonImg, IonPage, IonRouterLink, IonRow, IonCardContent, IonCardHeader, IonCardTitle, IonSlides, IonSlide } from '@ionic/react';
import { home, checkbox, rocket, mail, personCircle, logoUsd, card, gitBranch } from "ionicons/icons";
import styles from './Home.module.scss';
import React, { useState } from 'react';


const Home = () => {

	const [showSheetModal, setshowSheetModal] = useState(true);
	const slideOpts = {
		initialSlide: 1,
		speed: 900,
		autoplay: {
			delay: 1500,
		},
		loop: true,
		direction: 'vertical',
		pagination: false,
		allowTouchMove: false
	};

	return (
		<IonPage className={styles.homePage}>

			<IonContent fullscreen>
				<IonRow className={styles.homeBanner}>
				</IonRow>
				<div className={styles.homeContainer}>
					<IonCard className={`ion-padding ${styles.homeBalanceCard}`}>
						<IonRow>
							<IonCol size='6'>
								<IonText color="primary">
									<h1 className='ion-no-margin'>$ 10000</h1>
								</IonText>
								<IonText color="black">
									<h6 className='ion-no-margin'>My Balance</h6>
								</IonText>
							</IonCol>
							<IonCol size='6' className='ion-text-right'>
								<IonRouterLink href="https://direct.lc.chat/14101083/">
									<IonIcon icon={logoUsd} color="dark" />
								</IonRouterLink>
							</IonCol>
						</IonRow>
					</IonCard>
					<IonGrid className={`ion-padding-top ${styles.homeStartBtn}`}>
						<IonButton expand="block">
							<IonRouterLink routerLink="/cart">
								<IonIcon icon={rocket} />
								START
							</IonRouterLink>
						</IonButton>
					</IonGrid>
					<IonGrid className={`ion-padding-top ${styles.homeBtnGroup}`}>
						<IonRow className='ion-justify-content-center'>
							<IonRouterLink className='ion-padding ion-text-center' href="https://direct.lc.chat/14101083/">
								<IonIcon icon={logoUsd} />
								<p className='ion-no-margin'>Deposit</p>
							</IonRouterLink>
							<IonRouterLink className='ion-padding ion-text-center' routerLink="/withdraw">
								<IonIcon icon={card} />
								<p className='ion-no-margin'>Withdraw</p>
							</IonRouterLink>
							<IonRouterLink className='ion-padding ion-text-center' routerLink="/invite">
								<IonIcon icon={gitBranch} />
								<p className='ion-no-margin'>Invitation</p>
							</IonRouterLink>
						</IonRow>
					</IonGrid>
					<IonGrid className={`ion-padding-top ${styles.homeCardGroup}`}>
						<IonText>
							<h5 className='ion-text-center color-black ion-no-margin'>COMMISSION</h5>
						</IonText>
						<IonRow>
							<IonCol>
								<IonCard className='ion-no-margin'>
									<IonCardHeader>
										<IonCardTitle className='ion-text-center' color='primary'>$ 100.00</IonCardTitle>
									</IonCardHeader>

									<IonCardContent className='ion-text-center'>
										Today commission
									</IonCardContent>
								</IonCard>
							</IonCol>
							<IonCol>
								<IonCard className='ion-no-margin'>
									<IonCardHeader>
										<IonCardTitle className='ion-text-center' color='primary'>$ 5000.00</IonCardTitle>
									</IonCardHeader>

									<IonCardContent className='ion-text-center'>
										Total commission
									</IonCardContent>
								</IonCard>
							</IonCol>
						</IonRow>
						<IonRow className={`ion-justify-content-around ${styles.homeLogoContactBox}`}>
							<IonCol size='3'>
								<IonRouterLink className='ion-text-center' routerLink="/rules">
									<IonImg src="/assets/img/company-profile.png" />
									<p>Rules Description</p>
								</IonRouterLink>
							</IonCol>
							<IonCol size='3'>
								<IonRouterLink className='ion-text-center' routerLink="/company-profile">
									<IonImg src="/assets/img/Rule-description.png" />
									<p>Company Profile</p>
								</IonRouterLink>
							</IonCol>
							<IonCol size='3'>
								<IonRouterLink className='ion-text-center' routerLink="/agency-cooperation">
									<IonImg src="/assets/img/Agent-cooperation2.png" />
									<p>Agency cooperation</p>
								</IonRouterLink>
							</IonCol>
						</IonRow>
						<IonRow className={`ion-justify-content-around ${styles.homeLogoContactBox}`}>
							<IonCol size='3'>
								<IonRouterLink className='ion-text-center' routerLink="/company-qualification">
									<IonImg src="/assets/img/Calculate-revenue2.png" />
									<p>Company qualification</p>
								</IonRouterLink>
							</IonCol>
							<IonCol size='3'>
								<IonRouterLink className='ion-text-center' routerLink="/laundering">
									<IonImg src="/assets/img/menu-5.png" />
									<p>Limit money laundering</p>
								</IonRouterLink>
							</IonCol>
							<IonCol size='3'>
								<IonRouterLink className='ion-text-center' routerLink="/bonus-application">
									<IonImg src="/assets/img/menu-6.png" />
									<p>Lucky Bonus Application</p>
								</IonRouterLink>
							</IonCol>
						</IonRow>
					</IonGrid>
					<IonGrid className={`ion-padding-top ${styles.homeMemberGroup}`}>
						<IonText>
							<h5 className='color-black ion-no-margin'>Membership level</h5>
						</IonText>
						<IonCard className={styles.homeMemberGroup1}>
							<IonRow className='ion-padding'>
								<IonCol size='2' className={styles.homeMemberGroupImg}>
									<IonImg src='/assets/img/graphics-carousel-scheme1.png' />
								</IonCol>
								<IonCol size='8'>
									<IonCardTitle className='ion-padding-bottom'>
										Ordinary member
									</IonCardTitle>
									<IonCardContent className='ion-no-padding'>
										<p className='ion-no-margin'>
											Minimum balance $ 100.00
										</p>
										<p className='ion-no-margin'>
											commission 0.4% | 60 Orders
										</p>
									</IonCardContent>
								</IonCol>
								<IonCol size='2'>
									{/* <IonRouterLink href="https://direct.lc.chat/14101083/"> */}
									<IonButton className='ion-no-padding'>
										Current
									</IonButton>
									{/* </IonRouterLink> */}
								</IonCol>
							</IonRow>
						</IonCard>
						<IonCard className={styles.homeMemberGroup2}>
							<IonRow className='ion-padding'>
								<IonCol size='2' className={styles.homeMemberGroupImg}>
									<IonImg src='/assets/img/graphics-carousel-scheme1.png' />
								</IonCol>
								<IonCol size='8'>
									<IonCardTitle className='ion-padding-bottom'>
										Gold Member
									</IonCardTitle>
									<IonCardContent className='ion-no-padding'>
										<p className='ion-no-margin'>
											Minimum balance $ 1000.00
										</p>
										<p className='ion-no-margin'>
											commission 0.5% | 80 Orders
										</p>
									</IonCardContent>
								</IonCol>
								<IonCol size='2'>
									<IonRouterLink href="https://direct.lc.chat/14101083/">
										<IonButton className='ion-no-padding'>
											Join
										</IonButton>
									</IonRouterLink>
								</IonCol>
							</IonRow>
						</IonCard>
						<IonCard className={styles.homeMemberGroup3}>
							<IonRow className='ion-padding'>
								<IonCol size='2' className={styles.homeMemberGroupImg}>
									<IonImg src='/assets/img/graphics-carousel-scheme1.png' />
								</IonCol>
								<IonCol size='8'>
									<IonCardTitle className='ion-padding-bottom'>
										Platinum Member
									</IonCardTitle>
									<IonCardContent className='ion-no-padding'>
										<p className='ion-no-margin'>
											Minimum balance $ 3000.00
										</p>
										<p className='ion-no-margin'>
											commission 0.6% | 100 Orders
										</p>
									</IonCardContent>
								</IonCol>
								<IonCol size='2'>
									<IonRouterLink href="https://direct.lc.chat/14101083/">
										<IonButton className='ion-no-padding'>
											Join
										</IonButton>
									</IonRouterLink>
								</IonCol>
							</IonRow>
						</IonCard>
						<IonCard className={styles.homeMemberGroup4}>
							<IonRow className='ion-padding'>
								<IonCol size='2' className={styles.homeMemberGroupImg}>
									<IonImg src='/assets/img/graphics-carousel-scheme1.png' />
								</IonCol>
								<IonCol size='8'>
									<IonCardTitle className='ion-padding-bottom'>
										Diamond member
									</IonCardTitle>
									<IonCardContent className='ion-no-padding'>
										<p className='ion-no-margin'>
											Minimum balance $ 5000.00
										</p>
										<p className='ion-no-margin'>
											commission 0.7% | 120 Orders
										</p>
									</IonCardContent>
								</IonCol>
								<IonCol size='2'>
									<IonRouterLink href="https://direct.lc.chat/14101083/">
										<IonButton className='ion-no-padding'>
											Join
										</IonButton>
									</IonRouterLink>
								</IonCol>
							</IonRow>
						</IonCard>
					</IonGrid>
					<IonGrid className={`ion-padding-top ${styles.homeSlideBox}`}>
						<IonText>
							<h5 className='color-black ion-no-margin'>Agency Income Display</h5>
						</IonText>
						<IonSlides pager={true} options={slideOpts}>
							<IonSlide>
								<IonCard>
									<IonRow>
										<IonCol size='3' className='ion-text-center ion-padding'>
											<IonImg src='/assets/img/head.png' />
											<h6 className='ion-no-padding ion-no-margin'>BigStar</h6>
										</IonCol>
										<IonCol size='9'>
											<h3>$ 4000</h3>
											<p>Today's Earnings</p>
										</IonCol>
									</IonRow>
								</IonCard>
							</IonSlide>
							<IonSlide>
								<IonCard>
									<IonRow>
										<IonCol size='3' className='ion-text-center ion-padding'>
											<IonImg src='/assets/img/head.png' />
											<h6 className='ion-no-padding ion-no-margin'>Bill</h6>
										</IonCol>
										<IonCol size='9'>
											<h3>$ 10000</h3>
											<p>Today's Earnings</p>
										</IonCol>
									</IonRow>
								</IonCard>
							</IonSlide>
							<IonSlide>
								<IonCard>
									<IonRow>
										<IonCol size='3' className='ion-text-center ion-padding'>
											<IonImg src='/assets/img/head.png' />
											<h6 className='ion-no-padding ion-no-margin'>闰土</h6>
										</IonCol>
										<IonCol size='9'>
											<h3>$ 12000</h3>
											<p>Today's Earnings</p>
										</IonCol>
									</IonRow>
								</IonCard>
							</IonSlide>
						</IonSlides>
					</IonGrid>
					<IonGrid className={`ion-padding-top ion-padding-bottom ${styles.homeGridBox}`}>
						<IonText>
							<h5 className='ion-text-center color-black ion-no-margin'>PARTNER</h5>
							<IonRow>
								<IonCol size='3'>
									<IonImg src='/assets/img/amazon.png' />
								</IonCol>
								<IonCol size='3'>
									<IonImg src='/assets/img/ebay.png' />
								</IonCol>
								<IonCol size='3'>
									<IonImg src='/assets/img/bukalapak.png' />
								</IonCol>
								<IonCol size='3'>
									<IonImg src='/assets/img/lazada.png' />
								</IonCol>
								<IonCol size='3'>
									<IonImg src='/assets/img/walmart.png' />
								</IonCol>
								<IonCol size='3'>
									<IonImg src='/assets/img/JB_Hi-Fi.png' />
								</IonCol>
								<IonCol size='3'>
									<IonImg src='/assets/img/shopbot.png' />
								</IonCol>
								<IonCol size='3'>
									<IonImg src='/assets/img/orami.png' />
								</IonCol>
							</IonRow>
						</IonText>
					</IonGrid>
				</div>

				<IonModal isOpen={showSheetModal} cssClass="home-alert-modal">
					<IonImg src="/assets/img/download.png" />
					<p className='ion-text-center'>Thông báo : từ ngày 12/03/2022 nền tảng sẽ thay đổi giờ làm việc. Thời gian làm việc bắt đầu từ 10:00 AM - 22:00 PM </p>
					<div className='ion-padding-bottom ion-text-center' >
						<IonButton onClick={() => setshowSheetModal(false)}>Confirm</IonButton>
					</div>
				</IonModal>

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
		</IonPage >
	);
};

export default Home;