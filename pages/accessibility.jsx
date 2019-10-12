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
import Header from '../components/header';
import Footer from '../components/footer';

export const config = { amp: true };

export default () => (
  <>
    <Header />
    <article>
      <header>
        <h1>Accessibility</h1>
        <small>Website</small>
      </header>
      <main>
        <p>
          We strive to ensure that our website is accessible to all people.
          Hence, this website has been made to comply with WCAG 2.1 AAA (and
          inheritly WCAG 2.1 AA) on a best-effort basis.
        </p>

        <p>
          If there&apos;s any potential accessibility issues with the website,
          please don&apos;t hesitate to
          {' '}
          <a href="https://go.lhtc.sg/WebsiteWWWNewIssueA11y">
            create a new issue
          </a>
          {' '}
          on our Github repository.
        </p>
      </main>
    </article>
    <Footer />
  </>
);
