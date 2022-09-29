import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BloodVolumes = () => {

    var id = "631a09bd95344733d700e1ad";

    const [currentVolumes, setCurrentVolumes] = useState({});

	const getBloodVolumes = async (id) => {
		const config = {
			headers: { "Content-Type": "application/json", },
		};
		try {
			const res = await axios.get(`http://localhost:8070/bloodvolumes/get/${id}`, config);
            setCurrentVolumes(res.data.bloodVolumes);
            console.log(res.data.bloodVolumes);       
		} catch (err) {
			console.error("error", err);
            console.log("Traking ID Wrong");
		}
	};
  
  
    useEffect(() => {
		
        try {
            getBloodVolumes(id);
          }catch (err) {
            console.error("error", err);
          }

	}, []);


  return (
    
        <div class="overview">
            
            <div class="ad-title">
                <i class="uil uil-tachometer-fast-alt"></i>
                <span class="text">Dashboard</span>
            </div>

            <div class="ad-boxes">
                <div class="box box1">
                    <span class="number">A+</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">{currentVolumes.Ap}</span>
                </div>
                <div class="box box2">
                    <span class="number">B+</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">{currentVolumes.Bp}</span>
                </div>
                <div class="box box3">
                    <span class="number">AB+</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">{currentVolumes.ABp}</span>
                </div>
                <div class="box box4">
                    <span class="number">O+</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">{currentVolumes.Op}</span>
                </div>
            </div>

            <br/>

            <div class="ad-boxes">
                <div class="box box5">
                    <span class="number">A-</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">{currentVolumes.Am}</span>
                </div>
                <div class="box box6">
                    <span class="number">B-</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">{currentVolumes.Bm}</span>
                </div>
                <div class="box box7">
                    <span class="number">AB-</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">{currentVolumes.ABm}</span>
                </div>
                <div class="box box8">
                    <span class="number">O-</span>
                    <i class="fa-solid fa-droplet"></i>
                    <span class="text">{currentVolumes.Om}</span>
                </div>
            </div>
        </div>

  )
}

export default BloodVolumes