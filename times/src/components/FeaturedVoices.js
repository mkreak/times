import React from 'react';
import './FeaturedVoices.css';

function FeaturedVoices() {
    return (
        <div className="featured-voices" >
            <div style={{ fontSize: "30px" }} >Featured Voices</div>
            <div style={{ display: "flex", justifyContent: "flex-start", paddingBlock: "10px" }}>
                <div style={{ width: "50%" }}>
                    <div>
                        <h3 style={{ fontFamily: "auto", color: "red" }}>Anatol Lieven</h3>
                        <p>Russia Has Been Warning the West About Ukraine for Decades</p>
                    </div>
                    <div >
                        <h3 style={{ fontFamily: "auto", color: "red" }}>Robert J. Davis</h3>
                        <p>Why You Shouldn't Exercise to Lose Weight</p>
                    </div>
                    <div >
                        <h3 style={{ fontFamily: "auto", color: "red" }}>Ismat Ara</h3>
                        <p>How It Feels to Be a Muslim Woman Sold by India's Right Wing</p>
                    </div>


                </div>
                <div style={{ width: "50%", marginInline: "25px" }}>
                    <div >
                        <h3 style={{ fontFamily: "auto", color: "red" }}>Yohanca Delgado</h3>
                        <p>The Life-Changing Practice That Will Help You Feel More Gratitude</p>
                    </div>
                    <div >
                        <h3 style={{ fontFamily: "auto", color: "red" }}>W. Kamau Bell</h3>
                        <p>There's So Much More To Say About Bill Cosby</p>
                    </div>
                    <div >
                        <h3 style={{ fontFamily: "auto", color: "red" }}>Christina Bu</h3>
                        <p>What Norway Can Teach the World About Switching to Electric Vehicles</p>
                    </div>

                </div>
            </div>
            {/* Content for featured voices */}
        </div>
    );
}

export default FeaturedVoices;
