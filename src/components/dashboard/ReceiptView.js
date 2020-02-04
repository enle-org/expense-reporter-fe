/* eslint-disable react/no-unused-state */
import React from 'react';
import Nav from './Nav';

import Link from 'next/link';
import { useRouter } from 'next/router';

class ReceiptView extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="accountWrapper">
        <Nav />
        <main id="receipts" className="accountWrapper__main">
          <div className="u_section head">
            <Link href="/dashboard/receipts" as="/dashboard/receipts">
              <a href="#" className="receipt-view-link">
                <span>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM17 7L1 7V9L17 9V7Z" fill="#6C63FF"/>
                  </svg>
                </span>
                Back to Receipts
              </a>
            </Link>
          </div>
          <div className="body">
          
          </div>
        </main>
      </div>
    );
  }
}

export default ReceiptView;