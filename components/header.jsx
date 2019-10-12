//
// Copyright 2019 Learning Habitat Pte. Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0
//

import React from 'react';
import Head from 'next/head';

export const config = { amp: true };

const ContactHeader = () => (
  <>
    <Head>
      <link
        key="link-stylesheet-material-icons"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Head>

    <div className="block-contact-header">
      <a className="contact-header__contact-point" href="tel:+65 1234 5678">
        <span className="material-icons">phone</span>
        Phone
      </a>
      <a className="contact-header__contact-point" href="mailto:admin@lhtc.sg">
        <span className="material-icons">email</span>
        Email
      </a>
    </div>

    <style jsx>
      {`
        .block-contact-header {
          padding: 0.5rem;
          display: flex;

          background-color: #06a600;
          font-family: Arial, sans-serif;
        }

        .contact-header__contact-point {
          padding: 0 0.15rem;
          display: flex;
          align-items: center;
          color: white;
          text-decoration: none;
        }
      `}
    </style>
  </>
);

const LegalHeader = () => (
  <>
    <Head>
      <script
        async
        custom-element="amp-consent"
        src="https://cdn.ampproject.org/v0/amp-consent-0.1.js"
      />
      <script
        async
        custom-element="amp-geo"
        src="https://cdn.ampproject.org/v0/amp-geo-0.1.js"
      />
    </Head>

    <amp-consent layout="nodisplay" id="consent-element">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            consents: {
              'main-consent': {
                promptIfUnknownForGeoGroup: true,
                promptUI: 'consent-ui',
              },
            },
          }),
        }}
      />

      <div id="block-consent-ui">
        <p>
          By clicking &quot;continue&quot;, you consent to our
          {' '}
          <a href="/policies/privacy">privacy policy</a>
.
        </p>
        <button type="button" on="tap:consent-element.accept">
          Continue
        </button>
      </div>
    </amp-consent>

    <amp-geo layout="nodisplay" />

    <style jsx>
      {`
        #block-consent-ui {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
        }
      `}
    </style>
  </>
);

const NavigationHeader = () => (
  <>
    <Head>
      <script
        async
        custom-element="amp-sidebar"
        src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
      />
    </Head>

    <amp-sidebar id="site-navigation-sidebar" layout="nodisplay">
      <nav toolbar="(min-width: 980px)" toolbar-target="navigation-target">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Programmes</li>
        </ul>
      </nav>
    </amp-sidebar>

    <div className="block-navigation-header">
      <div className="short-logo__wrapper">
        <amp-img
          className="navigation-header__short-logo"
          src="//static.learninghabitat.edu.sg/img/lh-logo/100x100.webp"
          layout="responsive"
          width="1"
          height="1"
        />
      </div>

      <div id="navigation-target" />
    </div>

    <style jsx>
      {`
        .block-navigation-header {
          display: flex;
          align-items: center;
        }

        .short-logo__wrapper {
          width: 25px;
          height: 25px;
        }
      `}
    </style>
  </>
);

const SEOHeader = () => (
  <Head>
    <meta name="author" content="https://www.learninghabitat.edu.sg/" />
    <meta
      name="description"
      content="Quality tuition backed by a pool of competent tutors with years of experience. Learning Habitat is a professional Primary and Secondary tuition centre in Singapore, registered with the Ministry of Education since 2006."
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@id': 'https://www.learninghabitat.edu.sg/#JSONLD-School',
          '@context': 'https://schema.org/',
          '@type': 'School',
        }),
      }}
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@id': 'https://www.learninghabitat.edu.sg/#JSONLD-WebSite',
          '@context': 'https://schema.org/',
          '@type': 'WebSite',
        }),
      }}
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@id': 'https://www.learninghabitat.edu.sg/#JSONLD-WebPage',
          '@context': 'https://schema.org/',
          '@type': 'WebPage',
        }),
      }}
    />
  </Head>
);

export default () => (
  <>
    <div className="block-header-wrapper">
      <ContactHeader />
      <NavigationHeader />
    </div>
    <LegalHeader />
    <SEOHeader />

    <style jsx>
      {`
        .block-header-wrapper {
          /*position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;*/
        }
      `}
    </style>
  </>
);
