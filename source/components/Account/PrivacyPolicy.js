import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from '../Common/Header';
import Styles from './Styles';
import { moderateScale } from '../../constants/constant_functions';

const PrivacyPolicy = props => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header headerText="Privacy Policy" navigation={props.navigation} />

      <ScrollView>
        <View style={{ paddingHorizontal: moderateScale(15) }}>
          <Text style={Styles.privacyText}>
            This privacy policy sets out how GeorgiaPhoneCase.com uses and
            protects any information that you give us when you use this website.
            GeorgiaPhoneCase.com is committed to ensuring that your privacy is
            protected. Should we ask you to provide certain information by which
            you can be identified when using this website, then you can be
            assured that it will only be used in accordance with this privacy
            policy. GeorgiaPhoneCase.com may change this policy from time to
            time by updating this page. You should check this page from time to
            time to ensure that you are aware of any changes.
          </Text>
          <Text style={[Styles.privacyText, { paddingBottom: 0 }]}>
            While using our website, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you. Personally, identifiable information may include:
          </Text>
          <Text>
            {'\u2022\t'} Name{'\n'}
            {'\u2022\t'} Contact information including email address{'\n'}
            {'\u2022\t'} Demographic information such as postcode, preferences
            and interests{'\n'}
            {'\u2022\t'} Other information relevant to customer surveys and/or
            offers
          </Text>

          <Text style={Styles.privacyHeader}>Cookies</Text>
          <Text style={Styles.privacyText}>
            A cookie is a small file which asks permission to be placed on your
            computer’s hard drive. Once you agree, the file is added and the
            cookie helps analyze web traffic or lets you know when you visit a
            particular site. Cookies allow web applications to respond to you as
            an individual. The web application can tailor its operations to your
            needs, likes and dislikes by gathering and remembering information
            about your preferences.
          </Text>
          <Text style={Styles.privacyText}>
            We use traffic log cookies to identify which pages are being used.
            This helps us analyze data about web page traffic and improve our
            website in order to tailor it to our customer needs. We only use
            this information for statistical analysis purposes and then the data
            is removed from the system.
          </Text>
          <Text style={Styles.privacyText}>
            Overall, cookies help us provide you with a better website, by
            enabling us to monitor which pages you find useful and which you do
            not. A cookie does not give us access to your computer or any
            information about you, other than the data you choose to share with
            us. You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer. This may prevent
            you from taking full advantage of our website.
          </Text>

          <Text style={Styles.privacyHeader}>Information Gathered</Text>
          <Text style={Styles.privacyText}>
            We may use your Personal Information to contact you with
            newsletters, marketing or promotional materials and other
            information as well as for internal recordkeeping, improve our
            products and services, and from time to time, we may also use your
            information to contact you for market research purposes. We may
            contact you by email, phone, fax or mail. We may use the information
            to customize the website according to your interests
          </Text>

          <Text style={Styles.privacyHeader}>
            Controlling your personal information:
          </Text>
          <Text style={Styles.privacyText}>
            You may choose to restrict the collection or use of your personal
            information in the following ways:
          </Text>
          <Text>
            {'\u2022\t'} Whenever you are asked to fill in a form on the
            website, look for the box that you can click to indicate that you do
            not want the information to be used by anybody for direct marketing
            purposes{'\n'}
            {'\u2022\t'}If you have previously agreed to share your personal
            information with us for direct marketing purposes, you may change
            your mind at any time by writing to or emailing us at
            info@GeorgiaPhoneCase.com{'\n'}
          </Text>
          <Text style={Styles.privacyText}>
            We will not sell, distribute or lease your personal information to
            third parties unless we have your permission or are required by law
            to do so. We may use your personal information to send you
            promotional information about third parties which we think you may
            find interesting once we receive your permission.
          </Text>
          <Text style={Styles.privacyText}>
            You may request details of personal information which we hold about
            you under the Data Protection Act 1998. A small fee will be
            requested. If you would like a copy of the information held, please
            email to info@GeorgiaPhoneCase.com
          </Text>
          <Text style={Styles.privacyText}>
            If you believe that any information we are holding about you is
            incorrect or incomplete, please write to or email us as soon as
            possible, at the above address. We will promptly correct any
            information found to be incorrect.
          </Text>

          <Text style={Styles.privacyHeader}>Security</Text>
          <Text style={Styles.securityText}>
            Your payment and personal information is confidential and protected.
            Our software is the industry standard and among the best software
            available today for secure commercial transactions. It encrypts all
            of your personal information, including credit card number, name,
            and address, so that it cannot be read over the internet.
          </Text>
          <Text style={Styles.privacyText}>
            The security of your Personal Information is important to us, but
            remember that no method of transmission over the Internet, or method
            of electronic storage, is 100% secure. While we strive to use
            commercially acceptable means to protect your Personal Information,
            we cannot guarantee its absolute security.
          </Text>

          <Text style={Styles.privacyHeader}>
            Changes To This Privacy Policy
          </Text>
          <Text style={Styles.privacyText}>
            This Privacy Policy is effective as of July 31st, 2019 and will
            remain in effect except with respect to any changes in its
            provisions in the future, which will be in effect immediately after
            being posted on this page. We reserve the right to update or change
            our Privacy Policy at any time and you should check this Privacy
            Policy periodically. Your continued use of the website after we post
            any modifications to the Privacy Policy on this page will constitute
            your acknowledgment of the modifications and your consent to abide
            and be bound by the modified Privacy Policy. If we make any material
            changes to this Privacy Policy, we will notify you either through
            the email address you have provided us or by placing a prominent
            notice on our website.
          </Text>

          <Text style={Styles.privacyHeader}>Links to other websites</Text>
          <Text style={Styles.privacyText}>
            Our website may contain links to other websites of interest.
            However, once you have used these links to leave our site, you
            should note that we do not have any control over any other website.
            Therefore, we are not responsible for the protection and privacy of
            any information which you provide whilst visiting such sites and
            such sites are not governed by this privacy policy. You should
            exercise caution and look at the privacy statement applicable to the
            website in question.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
