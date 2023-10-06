import React from 'react';

const ResponseCard = ({removedCols, modifiedCols}) => {
    return (
        <div id="response" className="response-card-info text-primary">
            {(!removedCols || removedCols.length <= 0) && (!modifiedCols || Object.keys(modifiedCols).length <= 0) ? (
                <h2>Your data is already de-identified!</h2>
            ) : (
                <>
                <h2>Your data has been de-identified!</h2>
                <p>We've identified how we have de-identified your data below, based on HIPAA Safe Harbor De-identification standards.</p>
                <hr/>
                <div className="response-card-list">
                    {removedCols && removedCols.length > 0 && (
                        <div className='response-card-column'>
                            <h3>Columns Removed</h3>
                            <ul>
                                {removedCols.map(col => (
                                    <li>{col}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {modifiedCols && Object.keys(modifiedCols).length > 0 && (
                        <div className='response-card-column'>
                            <h3>Columns Potentially Modified</h3>
                            <ul>
                                {modifiedCols.map(col => (
                                    <>
                                    <li>{col.column}</li>
                                    <ul>
                                        <li>{col.change}</li>
                                    </ul>

                                    </>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </>
            )}
        </div>
    );
}

export default ResponseCard;