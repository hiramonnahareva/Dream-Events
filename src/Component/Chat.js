import React from 'react';

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";


const Chat = () => {
    return (

		<WhatsAppWidget
			phoneNo="919884098840"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt="Hi Team, is there any related service available ?"
			iconSize="40"
			iconColor="white"
			iconBgColor="#9333ea"
			headerIcon="https://cdn-icons-png.flaticon.com/128/2899/2899295.png"
			headerIconColor="pink"
			headerTxtColor="white"
			headerBgColor="#9333ea"
			headerTitle="John Doe"
			headerCaption="Online"
			bodyBgColor="#f1f5f9"
			chatPersonName="Support"
			chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
			footerBgColor="#ebeef2"
			placeholder="Type a message.."
			btnBgColor="#9333ea"
			btnTxt="Start Chat"
			btnTxtColor="white"
		/>
	);
};

export default Chat;