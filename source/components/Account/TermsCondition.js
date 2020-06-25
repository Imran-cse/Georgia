import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from '../Common/Header';
import Styles from './Styles';
import { moderateScale } from '../../constants/constant_functions';

const TermsCondition = props => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header headerText="Terms of Use" navigation={props.navigation} />

      <ScrollView>
        <View style={{ marginHorizontal: moderateScale(15) }}>
          <Text style={Styles.privacyText}>
            Welcome to our Website. Access to and uses of this site are subject
            to the following terms and conditions and all applicable laws.
            Please review these terms and conditions on a periodic basis, as
            they are subject to modification, alteration, or update at any time
            and at the sole discretion of GeorgiaPhoneCase.com.
          </Text>

          <Text style={Styles.privacyHeader}>Privacy Policy</Text>
          <Text style={Styles.privacyText}>
            Please review our Privacy Policy, which also governs your visit to
            our website, to understand our practices.
          </Text>

          <Text style={Styles.privacyHeader}>Electronic Communications</Text>
          <Text style={Styles.privacyText}>
            When you visit GeorgiaPhoneCase.com or send e-mails to us, you are
            communicating with us electronically. You consent to receive
            communications from us electronically. We will communicate with you
            by e-mail or by posting notices on this website. You agree that all
            agreements, notices, disclosures and other communications that we
            provide to you electronically satisfy any legal requirement that
            such communications be in writing.
          </Text>

          <Text style={Styles.privacyHeader}>Copyright</Text>
          <Text style={Styles.privacyText}>
            All content included on this website, such as text, graphics, logos,
            button icons, images, audio clips, digital downloads, data
            compilations, and software, is the property of GeorgiaPhoneCase.com
            and its content is protected by Copyright Law. The compilation of
            all content on this website is the exclusive property of
            GeorgiaPhoneCase.com.
          </Text>

          <Text style={Styles.privacyHeader}>Trade Marks</Text>
          <Text style={Styles.privacyText}>
            GeorgiaPhoneCase.com’s trademarks and trade dress may not be used in
            connection with any product or service that is not
            GeorgiaPhoneCase.com, in any manner that is likely to cause
            confusion among customers, or in any manner that disparages or
            discredits GeorgiaPhoneCase.com. All other trademarks not owned by
            GeorgiaPhoneCase.com that appear on this site are the property of
            their respective owners, who may or may not be affiliated with,
            connected to, or sponsored by GeorgiaPhoneCase.com.
          </Text>

          <Text style={Styles.privacyHeader}>License and Site Access</Text>
          <Text style={Styles.privacyText}>
            GeorgiaPhoneCase.com grants you a limited license to access and make
            personal use of this website and not to download (other than page
            caching) or modify it, or any portion of it, except with express
            written consent of GeorgiaPhoneCase.com. This license does not
            include any resale or commercial use of this site or its contents;
            any collection and use of any product listings, descriptions, or
            prices; any derivative use of this site or its contents; any
            downloading or copying of account information for the benefit of
            another merchant; or any use of data mining, robots, or similar data
            gathering and extraction tools. This site or any portion of this
            site may not be reproduced, duplicated, copied, sold, resold,
            visited, or otherwise exploited for any commercial purpose without
            express written consent of GeorgiaPhoneCase.com. You may not frame
            or utilize framing techniques to enclose any trademark, logo, or
            other proprietary information (including images, text, page layout,
            or form) of GeorgiaPhoneCase.com and our associates without express
            written consent. You may not use any meta tags or any other “hidden
            text” utilizing GeorgiaPhoneCase.com’s name or trademarks without
            the express written consent of GeorgiaPhoneCase.com. Any
            unauthorized use terminates the permission or license granted by
            GeorgiaPhoneCase.com. You are granted a limited, revocable, and
            nonexclusive right to create a hyperlink to the home page of
            GeorgiaPhoneCase.com so long as the link does not portray
            GeorgiaPhoneCase.com, its associates, or their products or services
            in a false, misleading, derogatory, or otherwise offensive matter.
            You may not use any GeorgiaPhoneCase.com logo or other proprietary
            graphic or trademark as part of the link without express written
            permission.
          </Text>

          <Text style={Styles.privacyHeader}>Your Membership Account</Text>
          <Text style={Styles.privacyText}>
            If you use this site, you are responsible for maintaining the
            confidentiality of your account and password and for restricting
            access to your computer, and you agree to accept responsibility for
            all activities that occur under your account or password. If you are
            under 18, you may use our website only with involvement of a parent
            or guardian. GeorgiaPhoneCase.com and its associates reserve the
            right to refuse service, terminate accounts, remove or edit content,
            or cancel orders in their sole discretion.
          </Text>

          <Text style={Styles.privacyHeader}>
            Reviews, Comments, Emails and Other Content
          </Text>
          <Text style={Styles.privacyText}>
            Visitors may post reviews, comments, and other content, submit
            suggestions, ideas, comments, questions, or other information, so
            long as the content is not illegal, obscene, threatening,
            defamatory, invasive of privacy, infringing of intellectual property
            rights, or otherwise injurious to third parties or objectionable and
            does not consist of or contain software viruses, political
            campaigning, commercial solicitation, chain letters, mass mailings,
            or any form of “spam.” You may not use a false e-mail address,
            impersonate any person or entity, or otherwise mislead as to the
            origin of a card or other content. GeorgiaPhoneCase.com reserves the
            right (but not the obligation) to remove or edit such content, but
            does not regularly review posted content. If you do post content or
            submit material, and unless we indicate otherwise, you grant
            GeorgiaPhoneCase.com and its associates a nonexclusive,
            royalty-free, perpetual, irrevocable, and fully sublicensable right
            to use, reproduce, modify, adapt, publish, translate, create
            derivative works from, distribute, and display such content
            throughout the world in any media. You grant GeorgiaPhoneCase.com
            and its associates and sublicensees the right to use the name that
            you submit in connection with such content, if they choose. You
            represent and warrant that you own or otherwise control all of the
            rights to the content that you post, that the content is accurate,
            that use of the content you supply does not violate this policy and
            will not cause injury to any person or entity, and that you will
            indemnify GeorgiaPhoneCase.com or its associates for all claims
            resulting from content you supply. GeorgiaPhoneCase.com has the
            right but not the obligation to monitor and edit or remove any
            activity or content. GeorgiaPhoneCase.com takes no responsibility
            and assumes no liability for any content posted by you or any third
            party.
          </Text>

          <Text style={Styles.privacyHeader}>Risk of Loss</Text>
          <Text style={Styles.privacyText}>
            All items purchased from GeorgiaPhoneCase.com are made pursuant to a
            shipment contract. This basically means that the risk of loss and
            title for such items pass to you upon our delivery to the carrier.
          </Text>

          <Text style={Styles.privacyHeader}>Product Descriptions</Text>
          <Text style={Styles.privacyText}>
            GeorgiaPhoneCase.com and its associates attempt to be as accurate as
            possible. However, GeorgiaPhoneCase.com does not warrant that
            product descriptions or other content of this site is accurate,
            complete, reliable, current, or error-free. If a product offered by
            GeorgiaPhoneCase.com itself is not as described, your sole remedy is
            to return it in unused condition.
          </Text>

          <Text style={Styles.securityText}>
            DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY THIS SITE IS
            PROVIDED BY GEORGIAPHONECASE.COM ON AN “AS IS” AND “AS AVAILABLE”
            BASIS. GEORGIAPHONECASE.COM MAKES NO REPRESENTATIONS OR WARRANTIES
            OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THIS WEBSITE
            OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THIS
            WEBSITE. YOU EXPRESSLY AGREE THAT YOUR USE OF THIS WEBSITE IS AT
            YOUR SOLE RISK. TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW,
            GEORGIAPHONECASE.COM DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
            INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS FOR A PARTICULAR PURPOSE. GEORGIAPHONECASE.COM DOES NOT
            WARRANT THAT THIS SITE, ITS SERVERS, OR E-MAIL SENT FROM
            GEORGIAPHONECASE.COM ARE FREE OF VIRUSES OR OTHER HARMFUL
            COMPONENTS. GEORGIAPHONECASE.COM WILL NOT BE LIABLE FOR ANY DAMAGES
            OF ANY KIND ARISING FROM THE USE OF THIS WEBSITE, INCLUDING, BUT NOT
            LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL
            DAMAGES. CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED
            WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF
            THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS,
            EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MIGHT HAVE
            ADDITIONAL RIGHTS.
          </Text>

          <Text style={Styles.privacyHeader}>Applicable Law</Text>
          <Text style={Styles.privacyText}>
            By visiting GeorgiaPhoneCase.com, you agree that the laws of the
            state of Georgia, United States, without regard to principles of
            conflict of laws, will govern these Conditions of Use and any
            dispute of any sort that might arise between you and
            GeorgiaPhoneCase.com.
          </Text>

          <Text style={Styles.privacyHeader}>Disputes</Text>
          <Text style={Styles.privacyText}>
            Any dispute relating in any way to your visit to
            GeorgiaPhoneCase.com or to products you purchase through
            GeorgiaPhoneCase.com shall be submitted to confidential arbitration
            in Georgia, except that, to the extent you have in any manner
            violated or threatened to violate GeorgiaPhoneCase.com’s
            intellectual property rights, GeorgiaPhoneCase.com may seek
            injunctive or other appropriate relief in any state or federal court
            in the state of Georgia, and you consent to exclusive jurisdiction
            and venue in such courts. Arbitration under this agreement shall be
            conducted under the rules then prevailing of the American
            Arbitration Association. The arbitrators award shall be binding and
            may be entered as a judgment in any court of competent jurisdiction.
            To the fullest extent permitted by applicable law, no arbitration
            under this Agreement shall be joined to an arbitration involving any
            other party subject to this Agreement, whether through class
            arbitration proceedings or otherwise.
          </Text>

          <Text style={Styles.privacyHeader}>
            Site Policies, Modification and Severability
          </Text>
          <Text style={Styles.privacyText}>
            Please review our other policies, such as our Returns policy and
            Privacy Policy, posted on this site. These policies also govern your
            visit to GeorgiaPhoneCase.com. We reserve the right to make changes
            to our site, policies, and these Conditions of Use at any time. If
            any of these conditions shall be deemed invalid, void, or for any
            reason unenforceable, that condition shall be deemed severable and
            shall not affect the validity and enforceability of any remaining
            condition.
          </Text>

          <Text style={Styles.privacyHeader}>Quesitons</Text>
          <Text style={Styles.privacyText}>
            Questions regarding our Terms of Use, Privacy Policy, or other
            policy related material can be directed to our support staff by
            clicking on the “Contact Us” link in the side menu or you can email
            us at info@GeorgiaPhoneCase.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TermsCondition;
