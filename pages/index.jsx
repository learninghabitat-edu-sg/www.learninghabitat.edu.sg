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
import Header from '../components/header';

export const config = { amp: true };

const SEOHeader = () => (
  <>
    <Head>
      <meta property="og:title" content="Learning Habitat" />
      <meta property="og:site_name" content="Learning Habitat" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en-GB" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@id': 'https://www.learninghabitat.edu.sg/#JSONLD-School',
            '@context': 'https://schema.org/',
            '@type': 'School',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'SG',
              postalCode: '530684',
              streetAddress: '684 Hougang Ave 8 #04-967, Hougang Village',
            },
            email: 'admin@learninghabitat.edu.sg',
            legalName: 'Learning Habitat Pte. Ltd.',
            name: 'Learning Habitat',
            taxID: '200603601G',
            telephone: ['+65 63437857', '+65 68585184'],
            language: {
              '@type': 'Language',
              name: 'English',
              alternateName: 'en',
            },
            description:
              'Quality tuition backed by a pool of competent tutors with years of experience. Learning Habitat is a professional Primary and Secondary tuition centre in Singapore, registered with the Ministry of Education since 2006.',
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
            accessMode: ['textual', 'visual'],
            accessModeSufficient: {
              '@type': 'ItemList',
              itemListOrder: 'https://schema.org/ItemListUnordered',
              itemListElement: ['textual', 'visual'],
            },
            accessibilityAPI: 'ARIA',
            accessibilityControl: [
              'fullKeyboardControl',
              'fullMouseControl',
              'fullTouchControl',
            ],
            accesssibilityFeature: [
              'alternativeText',
              'structuralNavigation',
              'unlocked',
            ],
            accessibilityHazard: 'none',
          }),
        }}
      />
    </Head>
  </>
);

export default () => (
  <>
    <SEOHeader />
    <Header />
  </>
);
