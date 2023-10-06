import React from 'react';

const SafeHarborInfo = () => {
    return (
        <div id='info' className="safe-harbor-info text-primary">
            <h2>Safe Harbor HIPAA Requirements</h2>
            <p>The Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule provides the Safe Harbor method of de-identification. According to this method, health data is considered de-identified if the following 18 identifiers are removed:</p>
            <div className="safe-harbor-list text-primary">
                <ul>
                    <li>Names</li>
                    <li>All geographic subdivisions smaller than a state</li>
                    <li>All elements of dates (except year) related to an individual</li>
                    <li>Phone numbers</li>
                    <li>Fax numbers</li>
                    <li>Email addresses</li>
                    <li>Social Security numbers</li>
                    <li>Medical record numbers</li>
                    <li>Health plan beneficiary numbers</li>
                </ul>
                <ul>
                    <li>Account numbers</li>
                    <li>Certificate/license numbers</li>
                    <li>Vehicle identifiers and serial numbers, including license plate numbers</li>
                    <li>Device identifiers and serial numbers</li>
                    <li>Web URLs</li>
                    <li>IP addresses</li>
                    <li>Biometric identifiers (e.g., finger and voice prints)</li>
                    <li>Full-face photographs and any comparable images</li>
                    <li>Any other unique identifying number, characteristic, or code</li>
                </ul>
            </div>
        </div>
    );
}

export default SafeHarborInfo;