import React from 'react';
import styles from './page.module.css';

export default function OurLocations() {
  const services = [
    'Family Medical Care',
    'Dental Care',
    'Pediatric Care',
    'Behavioral Health',
    'Womens Health'
  ];

  return (
    <main className={styles.main}>

      {/* Mound Bayou Geiger Section */}
      <div className="container" id="moundbayou">
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Delta Health Center | Dr. H. Jack Geiger Medical Center</h1>
            <div className={styles.contactBlock}>
              <p>Delta Health Center, Inc.<br />702 Martin Luther King Road<br />Post Office Box 900<br />Mound Bayou, MS 38762</p>
              <br />
              <p>
                <strong>Phone:</strong> <a href="tel:6627418800">(662) 741-8800</a><br />
                <strong>Fax:</strong> (662) 741-2268
              </p>
            </div>
            <div className={styles.hoursBlock}>
              <p><strong>Monday - Thursday:</strong> 8:00am &ndash; 6:00pm</p>
              <p><strong>Friday:</strong> 8:00am &ndash; 12:00pm</p>
            </div>
            <div className={styles.servicesBlock}>
              <h3 className={styles.servicesTitle}>Medical Services Provided</h3>
              <ul className={styles.servicesList}>
                {services.filter(s => s !== 'Dental Care').map((service, index) => <li key={index}>{service}</li>)}
                <li>Pharmacy (Full Service)</li>
              </ul>
            </div>
          </div>
          <div className={styles.mapCol}>
            <iframe src="https://maps.google.com/maps?q=702%20Martin%20Luther%20King%20Road,%20Mound%20Bayou,%20MS%2038762&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0, minHeight: '450px', display: 'block' }} loading="lazy" title="Google Maps displaying Mound Bayou Geiger Clinic"></iframe>
          </div>
        </div>
      </div>

      {/* Mound Bayou Dental Section */}
      <div className="container" id="moundbayou-dental" style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid #eaeaea' }}>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Delta Health Center | Dr. Warren Inge Dental Center</h1>
            <div className={styles.contactBlock}>
              <p>Delta Health Center, Inc.<br />702 Martin Luther King Road<br />Post Office Box 900<br />Mound Bayou, MS 38762</p>
              <br />
              <p>
                <strong>Phone:</strong> <a href="tel:6627418857">(662) 741-8857</a><br />
                <strong>Fax:</strong> (662) 741-8806
              </p>
            </div>
            <div className={styles.hoursBlock}>
              <p><strong>Monday - Thursday:</strong> 8:00am &ndash; 6:00pm</p>
              <p><strong>Friday:</strong> 8:00am &ndash; 12:00pm</p>
            </div>
            <div className={styles.servicesBlock}>
              <h3 className={styles.servicesTitle}>Services Provided</h3>
              <ul className={styles.servicesList}>
                <li>Dental Care</li>
              </ul>
            </div>
          </div>
          <div className={styles.mapCol}>
            <iframe src="https://maps.google.com/maps?q=702%20Martin%20Luther%20King%20Road,%20Mound%20Bayou,%20MS%2038762&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0, minHeight: '450px', display: 'block' }} loading="lazy" title="Google Maps displaying Mound Bayou Dental Clinic"></iframe>
          </div>
        </div>
      </div>

      {/* Greenville-South Section */}
      <div className="container" id="greenville-south" style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid #eaeaea' }}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Delta Health Center | Dr. Robert Smith Medical Center – Greenville South</h1>
            
            <div className={styles.contactBlock}>
              <p>2363 Hwy 1 South<br />Greenville, MS 38701</p>
              <br />
              <p>
                <strong>Phone:</strong> <a href="tel:6623341253">(662) 334-1253</a><br />
                <strong>Fax:</strong> (662) 332-0443
              </p>
            </div>

            <div className={styles.hoursBlock}>
              <p><strong>Monday - Thursday:</strong> 7:30am &ndash; 5:30pm</p>
              <p><strong>Friday:</strong> 7:30am &ndash; 11:30am</p>
            </div>
            
            <div className={styles.servicesBlock}>
              <h3 className={styles.servicesTitle}>Medical Services Provided</h3>
              <ul className={styles.servicesList}>
                {services.filter(s => s !== 'Dental Care').map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Map) */}
          <div className={styles.mapCol}>
            <iframe 
              src="https://maps.google.com/maps?q=2363%20Hwy%201%20South,%20Greenville,%20MS%2038701&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '450px', display: 'block' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps displaying Greenville South Clinic"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Greenville Central Section */}
      <div className="container" id="greenville-central" style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid #eaeaea' }}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Delta Health Center | Greenville Central Medical Center</h1>
            
            <div className={styles.contactBlock}>
              <p>1414 Hospital St.<br />Greenville, MS 38703</p>
              <br />
              <p>
                <strong>Phone:</strong> <a href="tel:6623353991">(662) 335-3991</a><br />
                <strong>Fax:</strong> (662) 332-1736
              </p>
            </div>

            <div className={styles.hoursBlock}>
              <p><strong>Monday - Thursday:</strong> 8:00am &ndash; 6:00pm</p>
              <p><strong>Friday:</strong> 8:00am &ndash; 12:00pm</p>
            </div>
            
            <div className={styles.servicesBlock}>
              <h3 className={styles.servicesTitle}>Medical Services Provided</h3>
              <ul className={styles.servicesList}>
                {services.filter(s => s !== 'Dental Care').map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Map) */}
          <div className={styles.mapCol}>
            <iframe 
              src="https://maps.google.com/maps?q=1414%20Hospital%20St.,%20Greenville,%20MS%2038703&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '450px', display: 'block' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps displaying Greenville Central Clinic"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Indianola Section */}
      <div className="container" id="indianola" style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid #eaeaea' }}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Delta Health Center | Indianola</h1>
            
            <div className={styles.contactBlock}>
              <p>118 Front Avenue<br />Indianola, MS 38751</p>
              <br />
              <p>
                <strong>Phone:</strong> <a href="tel:6624450900">(662) 445-0900</a><br />
                <strong>Fax:</strong> (662) 887-5280
              </p>
            </div>

            <div className={styles.hoursBlock}>
              <p><strong>Monday - Thursday:</strong> 7:30am &ndash; 5:30pm</p>
              <p><strong>Friday:</strong> 7:30am &ndash; 11:30am</p>
            </div>
            
            <div className={styles.servicesBlock}>
              <h3 className={styles.servicesTitle}>Medical Services Provided</h3>
              <ul className={styles.servicesList}>
                {services.filter(s => s !== 'Dental Care').map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
                <li>Pharmacy (Full Service)</li>
              </ul>
            </div>
          </div>

          {/* Right Column (Map) */}
          <div className={styles.mapCol}>
            <iframe 
              src="https://maps.google.com/maps?q=118%20Front%20Avenue,%20Indianola,%20MS%2038751&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '450px', display: 'block' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps displaying Indianola Clinic"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Cleveland Section */}
      <div className="container" id="cleveland" style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid #eaeaea' }}>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Delta Health Center | Searcy Medical Clinic</h1>
            
            <div className={styles.contactBlock}>
              <p>548 Rosemary Road<br />Cleveland, MS 38732</p>
              <br />
              <p>
                <strong>Phone:</strong> <a href="tel:6628437373">(662) 843-7373</a><br />
                <strong>Fax:</strong> (662) 843-7510
              </p>
            </div>

            <div className={styles.hoursBlock}>
              <p><strong>Monday - Thursday:</strong> 8:00am &ndash; 6:00pm</p>
              <p><strong>Friday:</strong> 8:00am &ndash; 12:00pm</p>
              <p><strong>Saturday:</strong> 8:00am &ndash; 5:00pm</p>
            </div>
            
            <div className={styles.servicesBlock}>
              <h3 className={styles.servicesTitle}>Medical Services Provided</h3>
              <ul className={styles.servicesList}>
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.mapCol}>
            <iframe 
              src="https://maps.google.com/maps?q=548%20Rosemary%20Road,%20Cleveland,%20MS%2038732&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '450px', display: 'block' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps displaying Searcy Medical Center"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Hollandale Section */}
      <div className="container" id="hollandale" style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid #eaeaea' }}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Delta Health Center | Hollandale</h1>
            
            <div className={styles.contactBlock}>
              <p>100 E. Washington St.<br />Hollandale, MS 38748</p>
              <br />
              <p>
                <strong>Phone:</strong> <a href="tel:6628277400">(662) 827-7400</a><br />
                <strong>Fax:</strong> (662) 827-7407
              </p>
            </div>

            <div className={styles.hoursBlock}>
              <p><strong>Monday - Thursday:</strong> 7:30am &ndash; 5:30pm</p>
              <p><strong>Friday:</strong> 7:30am &ndash; 11:30am</p>
            </div>
            
            <div className={styles.servicesBlock}>
              <h3 className={styles.servicesTitle}>Medical Services Provided</h3>
              <ul className={styles.servicesList}>
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
                <li>Pharmacy (Pick-up Only)</li>
              </ul>
            </div>
          </div>

          {/* Right Column (Map) */}
          <div className={styles.mapCol}>
            <iframe 
              src="https://maps.google.com/maps?q=100%20E.%20Washington%20St.,%20Hollandale,%20MS%2038748&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '450px', display: 'block' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps displaying Hollandale Clinic"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Itta Bena Section */}
      <div className="container" id="ittabena" style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid #eaeaea' }}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Delta Health Center | MVSU (Itta Bena)</h1>
            
            <div className={styles.contactBlock}>
              <p>14000 Highway 82W<br />Itta Bena, MS 38941</p>
              <br />
              <p>
                <strong>Phone:</strong> <a href="tel:6626444865">(662) 644-4865</a><br />
                <strong>Fax:</strong> (662) 579-3447
              </p>
            </div>

            <div className={styles.hoursBlock}>
              <p><strong>Monday - Wednesday:</strong> 8:00am &ndash; 6:00pm</p>
              <p><strong>Thursday:</strong> 8:00am &ndash; 7:00pm</p>
              <p><strong>Friday:</strong> 8:00am &ndash; 11:00am</p>
            </div>
            
            <div className={styles.servicesBlock}>
              <h3 className={styles.servicesTitle}>Medical Services Provided</h3>
              <ul className={styles.servicesList}>
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Map) */}
          <div className={styles.mapCol}>
            <iframe 
              src="https://maps.google.com/maps?q=14000%20Highway%2082W,%20Itta%20Bena,%20MS%2038941&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '450px', display: 'block' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps displaying Itta Bena Clinic"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Leland Section */}
      <div className="container" id="leland" style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid #eaeaea' }}>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Delta Health Center | Barbara Brooks Center – Leland</h1>
            <div className={styles.contactBlock}>
              <p>801 North Broad Street<br />Leland, MS 38756</p>
              <br />
              <p>
                <strong>Phone:</strong> <a href="tel:6626860295">(662) 686-0295</a><br />
                <strong>Fax:</strong> (662) 771-4082
              </p>
            </div>
            <div className={styles.hoursBlock}>
              <p><strong>Monday - Thursday:</strong> 7:30am &ndash; 5:30pm</p>
              <p><strong>Friday:</strong> 7:30am &ndash; 11:30am</p>
              <p><strong>Saturday:</strong> 8:00am &ndash; 5:00pm</p>
            </div>
            <div className={styles.servicesBlock}>
              <h3 className={styles.servicesTitle}>Medical Services Provided</h3>
              <ul className={styles.servicesList}>
                {services.map((service, index) => <li key={index}>{service}</li>)}
              </ul>
            </div>
          </div>
          <div className={styles.mapCol}>
            <iframe src="https://maps.google.com/maps?q=801%20North%20Broad%20Street,%20Leland,%20MS%2038756&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0, minHeight: '450px', display: 'block' }} loading="lazy" title="Google Maps displaying Leland Clinic"></iframe>
          </div>
        </div>
      </div>

      {/* Moorhead Section */}
      <div className="container" id="moorhead" style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid #eaeaea' }}>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Delta Health Center | Moorhead Medical Center</h1>
            <div className={styles.contactBlock}>
              <p>598 Ingram St.<br />Moorhead, MS 38761</p>
              <br />
              <p>
                <strong>Phone:</strong> <a href="tel:6622468028">(662) 246-8028</a><br />
                <strong>Fax:</strong> (662) 246-5847
              </p>
            </div>
            <div className={styles.hoursBlock}>
              <p><strong>Monday - Thursday:</strong> 8:00am &ndash; 6:00pm</p>
              <p><strong>Friday:</strong> 8:00am &ndash; 12:00pm</p>
            </div>
            <div className={styles.servicesBlock}>
              <h3 className={styles.servicesTitle}>Medical Services Provided</h3>
              <ul className={styles.servicesList}>
                {services.map((service, index) => <li key={index}>{service}</li>)}
              </ul>
            </div>
          </div>
          <div className={styles.mapCol}>
            <iframe src="https://maps.google.com/maps?q=598%20Ingram%20St.,%20Moorhead,%20MS%2038761&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0, minHeight: '450px', display: 'block' }} loading="lazy" title="Google Maps displaying Moorhead Clinic"></iframe>
          </div>
        </div>
      </div>

      {/* Rolling Fork Section */}
      <div className="container" id="rollingfork" style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid #eaeaea' }}>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Delta Health Center | Rolling Fork</h1>
            <div className={styles.contactBlock}>
              <p>20400 Highway 61<br />Rolling Fork, MS 39159</p>
              <br />
              <p>
                <strong>Phone:</strong> <a href="tel:6628736082">(662) 873-6082</a><br />
                <strong>Fax:</strong> (662) 873-6085
              </p>
            </div>
            <div className={styles.hoursBlock}>
              <p><strong>Monday - Thursday:</strong> 7:30am &ndash; 5:30pm</p>
              <p><strong>Friday:</strong> 7:30am &ndash; 11:30am</p>
            </div>
            <div className={styles.servicesBlock}>
              <h3 className={styles.servicesTitle}>Medical Services Provided</h3>
              <ul className={styles.servicesList}>
                {services.map((service, index) => <li key={index}>{service}</li>)}
              </ul>
            </div>
          </div>
          <div className={styles.mapCol}>
            <iframe src="https://maps.google.com/maps?q=20400%20Highway%2061,%20Rolling%20Fork,%20MS%2039159&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0, minHeight: '450px', display: 'block' }} loading="lazy" title="Google Maps displaying Rolling Fork Clinic"></iframe>
          </div>
        </div>
      </div>

      {/* Rosedale Section */}
      <div className="container" id="rosedale" style={{ marginTop: '80px', paddingTop: '80px', borderTop: '1px solid #eaeaea' }}>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h1 className={styles.title}>Delta Health Center | Rosedale</h1>
            <div className={styles.contactBlock}>
              <p>1302 Main Street<br />Rosedale, MS 38769</p>
              <br />
              <p>
                <strong>Phone:</strong> <a href="tel:6628736933">(662) 873-6933</a><br />
                <strong>Fax:</strong> TBA
              </p>
            </div>
            <div className={styles.hoursBlock}>
              <p><strong>Monday - Thursday:</strong> 8:00am &ndash; 6:00pm</p>
              <p><strong>Friday:</strong> 8:00am &ndash; 12:00pm</p>
            </div>
            <div className={styles.servicesBlock}>
              <h3 className={styles.servicesTitle}>Medical Services Provided</h3>
              <ul className={styles.servicesList}>
                {services.map((service, index) => <li key={index}>{service}</li>)}
              </ul>
            </div>
          </div>
          <div className={styles.mapCol}>
            <iframe src="https://maps.google.com/maps?q=1302%20Main%20Street,%20Rosedale,%20MS%2038769&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0, minHeight: '450px', display: 'block' }} loading="lazy" title="Google Maps displaying Rosedale Clinic"></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
