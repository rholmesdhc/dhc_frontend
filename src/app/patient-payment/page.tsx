import styles from './PatientPayment.module.css';

export const metadata = {
  title: 'Patient Payment | Delta Health Center',
  description: 'Manage your medical bill payments and view sliding fee scale information at Delta Health Center.',
};

export default function PatientPayment() {
  return (
    <main>
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Patient Payment</h1>
            <p className={styles.heroSubtitle}>
              Secure, convenient, and flexible payment options designed to support your healthcare journey.
            </p>
          </div>
        </section>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Information */}
          <div>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>General Payment Information</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <div>We accept Medicaid, Medicare MSCAN, CHIPS, and most major private insurances.</div>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <div>Payment is expected at the time of service for all patients.</div>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <div>Accepted forms of payment include: cash, personal checks, money orders, and major credit cards.</div>
                </li>
              </ul>

              <div className={styles.alertBox}>
                <div className={styles.alertTitle}>Important for New Patients</div>
                <p>New patients should arrive 15 minutes prior to their scheduled appointment to allow adequate time for registration and verification of information.</p>
              </div>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Sliding Fee Scale</h2>
              <p className={styles.listItem}>
                Patients who are uninsured or have a low household income may qualify for our Sliding Fee Discount Program. This program ensures that quality healthcare remains accessible to everyone. Allowable discounts are based on family size and household income.
              </p>
              
              <p className={styles.listItem}>
                <strong>Valid proof of income is required to determine eligibility. Acceptable forms include:</strong>
              </p>

              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.bulletIcon}>•</span>
                  <div>Most recent consecutive pay stubs (one month's worth)</div>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletIcon}>•</span>
                  <div>W-2 forms or highly recent tax returns</div>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.bulletIcon}>•</span>
                  <div>Unemployment, disability, or Social Security benefits statements</div>
                </li>
              </ul>

              <a href="/documents/Board-Report-Sliding-Fee-Scale-Update-Approved-01262023.pdf" className={styles.pdfLink}>
                <span className={styles.pdfIcon}>📄</span>
                Download complete Sliding Fee Scale application details (PDF)
              </a>
            </div>
          </div>

          {/* Right Column: CTA */}
          <div>
            <div className={`${styles.card} ${styles.payCard}`}>
              <h2 className={styles.cardTitle}>Pay Your Bill Online</h2>
              <p className={styles.listItem}>
                We've partnered with Phreesia to provide you with a fast, secure, and hassle-free way to manage and pay your medical bills directly online.
              </p>
              
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <div><strong>Safe & Secure:</strong> State-of-the-art data encryption to protect your financial information.</div>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <div><strong>Fast & Convenient:</strong> Pay your balance in seconds directly from your phone, tablet, or computer.</div>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <div><strong>No Hassle:</strong> Easily view your balance, manage payment history, and set up payment plans.</div>
                </li>
              </ul>

              <a href="https://z4-ppw.phreesia.net" target="_blank" rel="noopener noreferrer" className={styles.button}>
                Click Here to Pay Now
              </a>

              <div className={styles.qrContainer}>
                <p className={styles.qrText}>
                  📌 Scan the QR code or click the link now and take care of your bill with confidence!
                </p>
                <img src="/images/phreesia-qr.png" alt="Scan to Pay QR Code" className={styles.qrImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
